import { getCookie, setCookie } from "./cookies";
import terminalConfig from "./commands";

class Terminal {
  constructor(commandsNamespace, terminalSelector) {
    this.commandsNamespace = commandsNamespace;
    this.selector = terminalSelector;
    this.DOMelement = document.querySelector(this.selector);
    this.initialized = false;
    this.history = [];
    let cookie = getCookie("lbz_history");
    if (cookie != '') {
      this.history = JSON.parse(cookie);
    }
    this.historyCursor = this.history.length;
    this.init();
  }
  init() {
    if (this.initialized) return false;
    this.initialized = true;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('rows', '1');
    inputElement.setAttribute('type', 'text');
    inputElement.style.position = 'static';
    inputElement.style.bottom = '0px';
    inputElement.style.width = '100%';
    inputElement.style.backgroundColor = '#111';
    inputElement.style.color = '#EEE';
    inputElement.autofocus = true;
    inputElement.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 13:
          this.execute(e.target.value);
          inputElement.value = '';
          break;
        case 38:
          if (this.history.length > 0) {
            if (this.historyCursor == this.history.length) {
              this.history.push(e.target.value);
            }
            this.historyCursor--;
            if (this.historyCursor < 0) this.historyCursor = 0;

            e.target.value = this.history[this.historyCursor];
          }
          break;
        case 40:
          if (this.history.length > 0) {
            this.historyCursor++;
            if (this.historyCursor > this.history.length - 1) this.historyCursor = this.history.length - 1;
            e.target.value = this.history[this.historyCursor];
          }
          break;
        default:
          this.historyCursor = this.history.length;
      }
    });
    let screen = document.createElement('div');
    screen.setAttribute('class', 'context');
    this.DOMelement.appendChild(screen);

    this.DOMelement = screen;
    this.selector = this.selector + ' .context';

    screen.parentNode.insertBefore(inputElement, screen.nextSibling);
  }
  execute(str) {
    str = str.trim();
    if (str == '') return false;
    if (this.historyCursor < this.history.length) {
      this.history.splice(this.historyCursor, 1);
    }
    this.history.push(str);
    this.history = [...new Set(this.history)];
    setCookie("lbz_history", JSON.stringify(this.history), 90);
    this.historyCursor = this.history.length;
    const regex = /"(.+)"|([A-zÀ-ü0-9\-]+)/gum;
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
          tokens.push(match)
        }
      });
    }
    let parser = {};
    parser.command = tokens[0];
    let definition = terminalConfig.commands
      .filter(command => (command.name == parser.command))[0]
      || [];
    if (definition.length == 0) {
      this.error("Unknown command : " + parser.command);
      return false;
    }

    parser.options = [];
    parser.arguments = [];
    for (let i = 1; i < tokens.length; i++) {
      if (/^--\w*$/u.test(tokens[i])) {
        parser.options.push(tokens[i].substring(2));
      }
      else if (/^-\w*/u.test(tokens[i])) {
        let opt = tokens[i].substring(1).split('');
        parser.options = [...parser.options, ...opt];
      }
      else if (/^".*"$/u.test(tokens[i])) {
        parser.arguments.push(tokens[i].substring(1, tokens[i].length - 1));
      }
      else {
        parser.arguments.push(tokens[i]);
      }
    }

    // Filter unique options

    parser.options = [...new Set(parser.options)];

    // Check arguments
    console.log(definition);
    let args = definition.args;
    let checkResult = true;
    args.forEach((arg, i) => {
      console.log(arg);
      if (parser.arguments[i]) {
        switch (arg.type) {
          case 'int':
            if (!Number.isInteger(parseFloat(arg)) && !this.checkFilter(parser.arguments[i], arg.filter)) {
              this.error("argument <em>" + arg.name + " (" + arg.info + ")</em> must be an integer " + this.humanizeFilter(arg.filter));
              checkResult = false;
            }

            break;
          case 'string':

            if (!this.checkFilter(parser.arguments[i], arg.filter)) {
              this.error("argument <em>" + arg.name + " (" + arg.info + ")</em> must be a string " + this.humanizeFilter(arg.filter));
              checkResult = false;
            }

            break;
          default:
            break;
        }
        if (arg.transform) {
          parser.arguments[i] = arg.transform(parser.arguments[i]);
        }
      }
      else {
        if (arg.default) {
          parser.arguments.push(arg.default);
        }
      }
    })
    if (!checkResult) return false;
    this.log(definition.info.replace(/\$(\d)/, function (x, i) { return parser.arguments[i - 1] || '[undefined]' }));

    // Help manager

    if (parser.arguments && parser.arguments[0] == 'help') {
      this.log(this.explain(parser));
      this.log(definition.help || 'Sorry, no help defined for this command');
      return true;
    }

    // Call the user method with arguments and options

    this.commandsNamespace[definition.method](parser.arguments, parser.options);
    return true;
  }
  checkFilter(value, filter) {

    if (!filter) return true;
    if (Array.isArray(filter) && filter.every(x => !isNaN(x)) && filter.length == 2) {

      return value >= filter[0] && value <= filter[1];
    }
    else if (filter instanceof RegExp) {
      return filter.test(value);
    }
    this.error('Filter <em>' + filter.toString() + '</em> not supported');
    return true;
  }
  humanizeFilter(filter) {
    if (Array.isArray(filter) && filter.every(x => !isNaN(x)) && filter.length == 2) {
      return `between ${filter[0]} and ${filter[1]}`;
    }
    else if (filter instanceof RegExp) {
      return 'matching the regular expression : ' + filter.toString();
    }
    return '';
  }
  explain(parser) {
    let str = 'Usage : ' + parser.command + ' ';
    return str;
  }
  error(str) {
    if (this.initialized) {

      let consoleElement = document.createElement('p');
      consoleElement.innerHTML = str;
      consoleElement.style.color = 'red';
      this.DOMelement.appendChild(consoleElement);
      this.DOMelement.scrollTop = this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
    }
    else {
      console.error(str);
    }
  }
  info(str) {
    if (this.initialized) {

      let consoleElement = document.createElement('p');
      consoleElement.innerHTML = str;
      consoleElement.style.color = 'green';
      this.DOMelement.appendChild(consoleElement);
      this.DOMelement.scrollTop = this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
    }
    else {
      console.log(str);
    }
  }
  log(str) {
    if (this.initialized) {

      let consoleElement = document.createElement('p');
      consoleElement.innerHTML = str;
      this.DOMelement.appendChild(consoleElement);
      this.DOMelement.scrollTop = this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
    }
    else {
      console.log(str);
    }
  }
}
export default Terminal;