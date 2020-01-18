import { getCookie, setCookie } from "./cookies";
import terminalConfig from "./config";

const ARROW_DOWN = 40;
const ARROW_UP = 38;
const ENTER = 13;

class Terminal {
  constructor(commandsNamespace, terminalSelector) {
    this.commandsNamespace = commandsNamespace;
    this.selector = terminalSelector;
    this.DOMelement = document.querySelector(this.selector);
    this.initialized = false;
    this.history = [];
    this.historyCursor = 0;
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
    let command = element.target.value;
    if (this.history.length > 0) {
      if (this.historyCursor == this.history.length) {
        this.history.push(command);
      }
      this.historyCursor--;
      if (this.historyCursor < 0) this.historyCursor = 0;
      element.target.value = this.history[this.historyCursor];
    }
  }
  downHistory(element) {
    if (this.history.length > 0) {
      this.historyCursor++;
      if (this.historyCursor > this.history.length - 1)
        this.historyCursor = this.history.length - 1;
      element.target.value = this.history[this.historyCursor];
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

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    if (terminalConfig.css.input) {
      const rules = Object.entries(terminalConfig.css.input);
      for (const [property, value] of rules) {
        inputElement.style[property] = value;
      }
    }
    inputElement.autofocus = true;

    // Managing keyboard events

    inputElement.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case ENTER:
          this.execute(e.target.value);
          inputElement.value = "";
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
  interpolation(str, context) {
    if (str == undefined) return false;
    let _this = this;
    let parsed = str.replace(/(\$\{command\})/, function(x, i) {
      return _this.history[_this.history.length - 1] || "[command undefined]";
    });
    parsed = parsed.replace(/(\$\{info\})/, function(x, i) {
      return context.info || "[info undefined]";
    });
    parsed = parsed.replace(/\$\{args\[(\d+)\]\}/, function(x, i) {
      return context.arguments[i - 1] || "[argument undefined]";
    });
    return parsed;
  }
  execute(str) {
    str = str.trim();
    if (str == "") return false;
    this.addHistory(str);
    const regex = /"(.+)"|([A-zÀ-ü0-9\-]+)/gmu;
    // Display the command in the terminal

    this.info(str);
    let m;
    let tokens = [];
    while ((m = regex.exec(str)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      m.forEach((match, groupIndex) => {
        if (groupIndex == 0) {
          tokens.push(match);
        }
      });
    }
    let parser = {};
    parser.command = tokens[0];
    let definition =
      terminalConfig.commands.filter(
        command => command.name == parser.command
      )[0] || [];

    let context = {};
    if (definition.length == 0 && parser.command !== "help") {
      this.error(
        this.interpolation(terminalConfig.errors.unknown, context) ||
          "Command not found : " + parser.command
      );
      return false;
    }

    parser.options = [];
    parser.arguments = [];
    for (let i = 1; i < tokens.length; i++) {
      if (/^--\w*$/u.test(tokens[i])) {
        parser.options.push(tokens[i].substring(2));
      } else if (/^-\w*/u.test(tokens[i])) {
        let opt = tokens[i].substring(1).split("");
        parser.options = [...parser.options, ...opt];
      } else if (/^".*"$/u.test(tokens[i])) {
        parser.arguments.push(tokens[i].substring(1, tokens[i].length - 1));
      } else {
        parser.arguments.push(tokens[i]);
      }
    }

    // Filter unique options

    parser.options = [...new Set(parser.options)];

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
        this.log(
          this.interpolation(
            definition.help ||
              terminalConfig.noHelp ||
              "No help for this command",
            context
          )
        );
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
    this.log(this.interpolation(definition.info, parser) || "");

    // Call the user method with arguments and options

    this.commandsNamespace[definition.method](parser.arguments, parser.options);
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
  explain(parser) {
    let str = "Usage : " + parser.command + " ";
    return str;
  }
  error(str) {
    if (this.initialized) {
      let consoleElement = document.createElement("p");
      consoleElement.innerHTML = str;
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
      consoleElement.innerHTML = str;
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
