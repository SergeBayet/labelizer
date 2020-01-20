import { getCookie, setCookie } from "./cookies";
import terminalConfig from "./config";
import Editable from "./editable";

const ARROW_DOWN = 40;
const ARROW_UP = 38;
const ENTER = 13;

class Terminal {
  constructor(commandsNamespace, terminalSelector) {
    this.commandsNamespace = commandsNamespace;
    this.selector = terminalSelector;
    this.DOMelement = document.querySelector(this.selector);
    this.initialized = false;
    this.currentOption = "";
    this.currentCommand = "";
    this.history = [];
    this.historyCursor = 0;
    this.searchField = '';
    this.initHistory();
    this.init();
  }
  initHistory() {
    // If cookies are enabled in config.js, retrieve history

    if (terminalConfig.history.cookies) {
      let cookie = getCookie(
        terminalConfig.history.cookieName || "terminalCookie"
      );
      if (cookie != "") {
        this.history = JSON.parse(cookie);
      }
    }

    // Initialize cursor at the end of the history.

    this.historyCursor = this.history.length;
  }
  upHistory(element) {
    let command = element.target.innerText.trim();
    if (this.history.length > 0) {
      if (this.historyCursor == this.history.length) {
        this.searchField = command;
        console.log(this.searchField);
        this.history.push(command);
      }

      if (this.searchField == '') {
        this.historyCursor--;
        if (this.historyCursor < 0) this.historyCursor = 0;
      }
      else {
        let i = this.historyCursor - 1;
        while (i >= 0) {
          if (~this.history[i].indexOf(this.searchField)) {
            this.historyCursor = i;
            break;
          }
          i--
        }
      }
      element.target.innerText = this.history[this.historyCursor];
    }
  }
  downHistory(element) {
    if (this.history.length > 0) {
      if (this.searchField == '') {
        this.historyCursor++;
        if (this.historyCursor > this.history.length - 1)
          this.historyCursor = this.history.length - 1;
      }
      else {
        let i = this.historyCursor + 1;
        while (i < this.history.length) {
          if (~this.history[i].indexOf(this.searchField)) {
            this.historyCursor = i;
            break;
          }
          i++
        }
      }
      element.target.innerText = this.history[this.historyCursor];
    }
  }
  addHistory(str) {
    if (str.trim() == "") return false;
    if (this.historyCursor < this.history.length) {
      this.history.splice(this.historyCursor, 1);
    }
    if (this.history[this.history.length - 1] !== str) {
      this.history.push(str);
    }
    this.history = this.history.filter(x => x);
    setCookie(
      terminalConfig.history.cookieName || "terminalCookie",
      JSON.stringify(this.history),
      terminalConfig.history.expire || 30
    );
    this.historyCursor = this.history.length;
  }
  init() {
    // Initialize terminal only one time

    if (this.initialized) return false;
    this.initialized = true;

    // Create input element for the terminal with css rules from "config.js"

    let inputElement = document.createElement("div");
    inputElement.setAttribute("contenteditable", "true");
    inputElement.setAttribute("spellcheck", "false");
    inputElement.style.whiteSpace = 'pre';

    // white-space: pre-wrap;       /* css-3 */
    // white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    // white-space: -pre-wrap;      /* Opera 4-6 */
    // white-space: -o-pre-wrap;    /* Opera 7 */
    // word-wrap: break-word;       /* Internet Explorer 5.5+ */
    if (terminalConfig.css.input) {
      const rules = Object.entries(terminalConfig.css.input);
      for (const [property, value] of rules) {
        inputElement.style[property] = value;
      }
    }
    inputElement.autofocus = true;
    let editable = new Editable(inputElement, this.renderText, this);
    // Managing keyboard events

    inputElement.addEventListener("keyup", e => {

      switch (e.keyCode) {
        case ENTER:
          e.preventDefault();
          console.log(e.target.innerText);
          this.execute(e.target.innerText.trim());
          inputElement.innerHTML = "";
          break;
        case ARROW_UP:
          this.upHistory(e);
          break;
        case ARROW_DOWN:
          this.downHistory(e);
          break;
        default:

          this.historyCursor = this.history.length;
      }
    });

    // Add input element in the DOM

    let screen = document.createElement("div");
    screen.setAttribute("class", "context");
    this.DOMelement.appendChild(screen);
    this.DOMelement = screen;
    this.selector = this.selector + " .context";
    screen.parentNode.insertBefore(inputElement, screen.nextSibling);
  }


  renderText(text, context) {
    console.log(this);
    let ret = context.parserCli(text).colored;
    return ret;
    const words = text.split(/(\s+)/);
    const output = words.map((word) => {
      if (word === 'bold') {
        return `<strong>${word}</strong>`;
      }
      else if (word === 'red') {
        return `<span style='color:red' contenteditable='true'>${word}</span>`;
      }
      else {
        return word;
      }
    })
    //console.log(output.join(''));
    return output.join('');
  }
  interpolation(str, context) {
    if (str == undefined) return false;
    let _this = this;

    let parsed = str.replace(/(\$\{command\})/, function (x, i) {
      return _this.currentCommand || "[command undefined]";
    });

    parsed = parsed.replace(/(\$\{option\})/, function (x, i) {
      return _this.currentOption || "[option undefined]";
    });

    parsed = parsed.replace(/(\$\{info\})/, function (x, i) {
      return context.info || "[info undefined]";
    });

    parsed = parsed.replace(/\$\{args\[(\d+)\]\}/, function (x, i) {
      return context.arguments[i - 1] || "[argument undefined]";
    });

    return parsed;
  }
  parserCli(str) {
    let parser = { command: "", arguments: [], options: [] };
    let i = 0;
    let currentChar;
    let context = "normal";
    let token = "";
    let escaped = false;
    let currentOption = "";
    let colored = "";
    let openedTag = false;
    while (i <= str.length) {
      currentChar = str.charAt(i) || "";

      switch (context) {
        case "normal":
          switch (currentChar) {
            case " ":
            case "":
              if (parser.command == "") {
                parser.command = token;
                colored += "</span>" + currentChar;
                openedTag = false;
              } else {
                if (currentOption == "") {
                  parser.arguments.push(token);
                  colored += "</span>" + currentChar;
                  openedTag = false;
                } else {
                  parser.options[parser.options.length - 1].argument = token;
                  colored += "</span>" + currentChar;
                  openedTag = false;
                }
              }
              token = "";
              break;
            case '"':
              context = "quoted";
              colored += "<span style='color:green'>\"";
              openedTag = true;
              if (context == "quoted" && token !== "") {
                return "error";
              }
              break;
            case "-":
              if (token == "" && (str.charAt(i + 1) || "") == "-") {
                context = "option";
                colored += "<span style='color:blue'>--";
                openedTag = true;
                i++;
              } else if (token == "") {
                context = "abbreviated option";
                colored += "<span style='color:cyan'>-";
                openedTag = true;
              } else {
                colored += currentChar;
                token += currentChar;
              }
              break;
            default:
              if (token == '') {
                colored += "<span style='color:white'>";
                openedTag = true;
              }
              colored += currentChar;
              token += currentChar;
              break;
          }
          break;
        case "option":
          switch (currentChar) {
            case "=":
            case " ":
              parser.options.push({ name: token, argument: "" });
              currentOption = token;
              colored += "</span>" + currentChar;
              openedTag = false;
              token = "";
              context = "normal";
              break;


            default:
              colored += currentChar;
              token += currentChar;
              break;
          }
          break;
        case "abbreviated option":
          switch (currentChar) {
            case " ":
              context = "normal";
              colored += "</span> ";
              openedTag = false;
              break;
            default:
              parser.options.push({ name: currentChar, argument: "" });
              colored += currentChar;
              currentOption = currentChar;
              break;
          }
          break;
        case "quoted":
          switch (currentChar) {
            case '"':
              if (!escaped) {
                context = "normal";
                colored += "\"";
              } else {
                escaped = false;
                colored += "</span>";
                openedTag = false;
                token += currentChar;
              }
              break;
            case "\\":
              escaped = true;
              colored += "<span style='color:orange'>\\";
              openedTag = true;
              break;
            default:
              colored += currentChar;
              token += currentChar;
              break;
          }
        default:
          break;
      }
      i++;
    }
    if (openedTag) {
      colored += '</span>';
    }
    parser.options.isOption = function (str) {
      let opt = this.filter(
        options => options.name == str
      )[0] || [];
      return opt.length == 0 ? false : opt;
    }
    //console.log(parser);
    parser.arguments.isArgument = parser.options.isOption;
    return { parser, colored };
  }
  execute(str) {
    str = str.trim();
    if (str == "") return false;
    this.addHistory(str);
    let parser = this.parserCli(str).parser;
    console.log(this.parserCli(str).colored);
    // Display the command in the terminal

    this.info(str);

    let definition =
      terminalConfig.commands.filter(
        command => command.name == parser.command
      )[0] || [];

    let context = {};
    this.currentCommand = parser.command;
    if (definition.length == 0 && parser.command !== "help") {
      this.error(
        this.interpolation(terminalConfig.errors.unknown, context) ||
        "Command not found : " + parser.command
      );
      return false;
    }

    // Help management

    if (parser.command == "help") {
      definition =
        terminalConfig.commands.filter(
          command => command.name == parser.arguments[0]
        )[0] || [];
      if (parser.arguments[0] && definition.length == 0) {
        this.error(
          this.interpolation(
            terminalConfig.errors.helpUnknownCommand || "Command not found",
            parser
          )
        );
      } else if (definition.length == 0) {
        this.log(
          this.interpolation(terminalConfig.help || "No global help", context)
        );
      } else {
        this.log(this.explain(definition));
      }
      // this.log(this.explain(parser));
      // this.log(definition.help || "Sorry, no help defined for this command");
      return true;
    }

    // Check arguments

    let args = definition.args;
    let checkResult = true;
    args.forEach((arg, i) => {
      if (parser.arguments[i]) {
        switch (arg.type) {
          case "int":
            if (
              !Number.isInteger(parseFloat(arg)) &&
              !this.checkFilter(parser.arguments[i], arg.filter)
            ) {
              this.error(
                this.interpolation(arg.error, arg) || "Argument error"
              );
              checkResult = false;
            }

            break;
          case "string":
            if (!this.checkFilter(parser.arguments[i], arg.filter)) {
              this.error(
                this.interpolation(arg.error, arg) || "Argument error"
              );
              checkResult = false;
            }

            break;
          default:
            break;
        }
        if (arg.transform) {
          parser.arguments[i] = arg.transform(parser.arguments[i]);
        }
      } else {
        if (arg.default) {
          parser.arguments.push(arg.default);
        }
      }
    });
    if (!checkResult) return false;

    // Check Options

    let opts = definition.opts;
    parser.options.forEach((parsedOpt, index) => {
      let validOption = false;
      this.currentOption = parsedOpt.name;
      opts.forEach((opt, i) => {
        if (opt.name == parsedOpt.name || opt.abbr == parsedOpt.name) {
          parser.options[index].name = opt.name;
          if (opt.argument !== "") {
            // todo : check argument of the option
          }
          validOption = true;
        }
      });
      if (!validOption) {
        this.error(
          this.interpolation(terminalConfig.errors.invalidOption, parser) ||
          "Invalid option"
        );
      }
    });
    console.log(parser);
    this.log(this.interpolation(definition.info, parser) || "");
    let _this = this;
    // Call the user method with arguments and options
    let promise = new Promise(function (resolve, reject) {
      resolve(
        _this.commandsNamespace[definition.method](
          parser.arguments,
          parser.options
        )
      );
    });
    promise.then();
    console.log("in progress...");
    return true;
  }
  checkFilter(value, filter) {
    if (!filter) return true;
    if (
      Array.isArray(filter) &&
      filter.every(x => !isNaN(x)) &&
      filter.length == 2
    ) {
      return value >= filter[0] && value <= filter[1];
    } else if (filter instanceof RegExp) {
      return filter.test(value);
    }
    this.error("Filter <em>" + filter.toString() + "</em> not supported");
    return true;
  }
  humanizeFilter(filter) {
    if (
      Array.isArray(filter) &&
      filter.every(x => !isNaN(x)) &&
      filter.length == 2
    ) {
      return `between ${filter[0]} and ${filter[1]}`;
    } else if (filter instanceof RegExp) {
      return "matching the regular expression : " + filter.toString();
    }
    return "";
  }
  explain(definition) {
    console.log(definition);
    let str = "<dl>";
    str += "<dt>NAME</dt>";
    str +=
      "<dd>" +
      definition.name +
      " - " +
      (definition.shortDescription || "") +
      "</dd><br/>";
    str += "<dt>SYNOPSIS</dt>";
    str +=
      "<dd>" + definition.name + " " + this.synopsis(definition) + "</dd><br/>";
    str += "<dt>DESCRIPTION</dt>";
    str +=
      "<dd>" +
      (definition.description || "no description for this command") +
      "</dd><br/>";
    if (definition.opts) {
      str += "<dt>OPTIONS</dt>";
      (definition.args || []).forEach(x => {
        let name = x.name;
        if (x.default) name += "=" + x.default;
        str += "<dd>&lt;" + name + "&gt;</dd>";
        str += "<dd>&nbsp;&nbsp;&nbsp;&nbsp;" + x.info + "</dd>";
        str += "<br/>";
      });
      definition.opts.forEach(x => {
        let arg = "";
        if (x.arg) {
          arg = "=&lt;<u>" + x.arg.name + "</u>&gt;";
          if (!x.arg.mandatory) {
            arg = "[" + arg + "]";
          }
        }
        let options = [
          x.abbr ? "-" + x.abbr + arg.replace("=", " ") : "",
          "--" + x.name + arg
        ]
          .filter(a => a)
          .join(", ");
        str += "<dd>" + options + "</dd>";
        str += "<dd>&nbsp;&nbsp;&nbsp;&nbsp;" + x.info + "</dd>";
        str += "<br/>";
      });
    }

    str += "</dl>";
    return str;
  }
  synopsis(definition) {
    let str = [];
    (definition.args || []).forEach(x => {
      let name = x.name;
      if (x.default) name += "=" + x.default;
      str.push("&lt;" + name + "&gt;");
    });
    (definition.opts || []).forEach(x => {
      let arg = "";
      if (x.arg) {
        arg = "=&lt;<u>" + x.arg.name + "</u>&gt;";
        if (!x.arg.mandatory) {
          arg = "[" + arg + "]";
        }
      }
      str.push("[-" + (x.abbr || "-" + x.name) + arg + "]");
    });
    return str.join(" ");
  }
  error(str) {
    if (this.initialized) {
      let consoleElement = document.createElement("p");
      consoleElement.innerHTML = "! " + str;
      consoleElement.style.color = "red";
      this.DOMelement.appendChild(consoleElement);
      this.DOMelement.scrollTop =
        this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
    } else {
      console.error(str);
    }
  }
  info(str) {
    if (this.initialized) {
      let consoleElement = document.createElement("p");
      consoleElement.innerHTML = "> " + str;
      consoleElement.style.color = "green";
      this.DOMelement.appendChild(consoleElement);
      this.DOMelement.scrollTop =
        this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
    } else {
      console.log(str);
    }
  }
  log(str) {
    if (this.initialized) {
      let consoleElement = document.createElement("p");
      consoleElement.innerHTML = str;
      this.DOMelement.appendChild(consoleElement);
      this.DOMelement.scrollTop =
        this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
    } else {
      console.log(str);
    }
  }
}
export default Terminal;
