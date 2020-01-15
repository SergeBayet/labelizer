import carry from "./carry";
import { getCookie, setCookie } from "./cookies";
const version = "0.0.1";

export default class Labelizer {

  constructor(selector, options = {}) {
    this.selector = selector;
    this.el = document.querySelector(selector);
    this.o = options;
    this.indexToken = 0;
    this.consoleInitialized = false;
    this.language = 'fr';
    this.history = [];
    let h = getCookie("lbz_history");
    if (h != '') {
      this.history = JSON.parse(h);
    }
    this.historyCursor = this.history.length;
    this.init();
  }

  init() {

    let as = document.querySelectorAll(this.selector + ' a');
    as.forEach(a => {
      a.addEventListener("click", e => e.preventDefault());
    });
    this.console = document.querySelector(this.o.consoleSelector);
    if (this.console) {
      this.initConsole();
    }
    this.lastSelected = false;
    if (!(this.el)) {
      this.displayConsole("DOM selector must be provided!");
      return false;
    }

    this.indexToken = 0;
    this.repl(this.el);
    let css = '.token:hover{ background-color: ' + (this.o.tokenColorBgHover || '#00FF00') + ' ; color: ' + (this.o.tokenColorFgHover || '#FF00FF') + ' ; cursor:pointer ; -webkit-user-select: none ; -moz-user-select: none; -ms-user-select: none; user-select: none; } ';
    css += ' .token.selected { background-color : green }';
    let style = document.createElement('style');

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
    let tokensEl = document.querySelectorAll(this.selector + " .token");
    tokensEl.forEach(el => {

      el.addEventListener("click", e => {
        // this.displayConsole('id : ' + el.getAttribute('data-id'));
        if (window.event.ctrlKey) {

          if (!el.classList.contains("selected")) {
            el.classList = "token selected";
            this.lastSelected = el.getAttribute('data-id');
            this.displayConsole("'" + e.target.innerText + "' selected");
          }
          else {
            el.classList = "token";
            this.lastSelected = false;
            this.displayConsole("'" + e.target.innerText + "' unselected");
          }

        }
        else if (window.event.shiftKey) {
          let idSelected = el.getAttribute('data-id');
          if (!this.lastSelected) {
            el.classList = "token selected";
            this.displayConsole("'" + e.target.innerText + "' selected");
          }
          else if (this.lastSelected < idSelected) {
            let selectedText = [];
            for (let i = this.lastSelected; i <= idSelected; i++) {
              let t = document.querySelector('.token[data-id="' + i + '"]');

              t.classList = "token selected";
              selectedText.push(t.innerText);
            }
            this.displayConsole("'" + selectedText.join('') + "' selected");
          }
          else {
            let selectedText = [];
            for (let i = this.lastSelected; i >= idSelected; i--) {
              let t = document.querySelector('.token[data-id="' + i + '"]');

              t.classList = "token selected";
              selectedText.push(t.innerText);

            }
            this.displayConsole("'" + selectedText.reverse().join('') + "' selected");
          }
          this.lastSelected = idSelected;
        }
        else {
          if (!el.classList.contains('selected')) {
            tokensEl.forEach(x => {
              x.classList = "token";
            });
            el.classList = "token selected";
            this.lastSelected = el.getAttribute('data-id');
            this.displayConsole("'" + e.target.innerText + "' selected");
          }
          else {
            tokensEl.forEach(x => {
              x.classList = "token";
            });
            this.lastSelected = false;
            this.displayConsole("'" + e.target.innerText + "' unselected");
          }

        }

      });
    });
    this.displayConsole("Labelizer intialized.")
  }
  initConsole() {
    if (this.consoleInitialized) return false;
    this.consoleInitialized = true;
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
      if (e.keyCode == 13) {
        this.executeConsole(e.target.value);
        inputElement.value = '';
      }
      else if (e.keyCode == 38) {

        if (this.history.length > 0) {
          this.historyCursor--;
          if (this.historyCursor < 0) this.historyCursor = 0;
          e.target.value = this.history[this.historyCursor];
        }
      }
      else if (e.keyCode == 40) {
        if (this.history.length > 0) {
          this.historyCursor++;
          if (this.historyCursor > this.history.length - 1) this.historyCursor = this.history.length - 1;
          e.target.value = this.history[this.historyCursor];
        }
      }
      else {
        this.historyCursor = this.history.length;
      }
    });
    let screen = document.createElement('div');
    screen.setAttribute('class', 'context');
    this.console.appendChild(screen);

    this.console = screen;
    this.o.consoleSelector = this.o.consoleSelector + ' .context';
    console.log(this.o.consoleSelector)
    screen.parentNode.insertBefore(inputElement, screen.nextSibling);
    //this.console.appendChild(inputElement);

  }
  executeConsole(action) {
    this.history.push(action);
    this.history = [...new Set(this.history)];
    setCookie("lbz_history", JSON.stringify(this.history), 90);
    this.historyCursor = this.history.length;
    let params = this.consoleParser(action);
    console.log(params);
    this.displayConsole("> " + action);
    switch (params.command) {
      case 'clear':
        this.console.innerHTML = '';
        break;
      case 'load':
        this.loadHtml(params.arguments, params.options);
        break;
      case 'language':
        this.changeLanguage(params.arguments);
        break;
      case 'count':
        this.count(params.arguments, params.options);
        break;
      case 'freq':
        this.freq(params.arguments, params.options);
        break;
      case 'stem':
        this.stem(params.arguments, params.options);
        break;
      default:
        this.displayConsole('unknown command \'' + params.command + '\'');
        break;
    }
    //this.displayConsole(action);
  }
  displayConsole(...args) {
    if (this.console) {
      args.forEach(e => {
        let consoleElement = document.createElement('p');
        let consoleInstruction = document.createTextNode(e);
        if (e.charAt(0) == ">") {
          consoleElement.style.color = 'green';
        }
        else if (e.charAt(0) == "!") {
          consoleElement.style.color = 'red';
        }
        consoleElement.appendChild(consoleInstruction);
        this.console.appendChild(consoleElement);

      });

      this.console.scrollTop = this.console.scrollHeight - this.console.clientHeight;
    }
    else {
      console.log(...args);
    }
  }
  repl(node) {
    var nodes = node.childNodes;

    for (var i = 0, m = nodes.length; i < m; i++) {
      var n = nodes[i];
      if (n.nodeType == n.TEXT_NODE) {
        //console.log(n.textContent);
        let toks = n.textContent.split(/([A-zÀ-ù0-9]*)/gu).filter(x => x !== '');
        let newHTML = '';
        toks.forEach(el => {
          this.indexToken++;

          newHTML += '<span class="token" data-id="' + this.indexToken + '">' + el + '</span>';
        });
        // do some swappy text to html here?
        var replacementNode = document.createElement('span');

        replacementNode.innerHTML = newHTML;
        n.parentNode.insertBefore(replacementNode, n);
        n.parentNode.removeChild(n);
      } else {
        this.repl(n);
      }
    }
  }
  // Console parser

  consoleParser(str) {
    const regex = /"(.+)"|([A-zÀ-ù0-9\-]+)/gum;
    //const str = `load "slkj lkj" -f lkljl --serei mlk 12`;
    let m;
    let tokens = [];
    while ((m = regex.exec(str)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        //console.log(`Found match, group ${groupIndex}: ${match}`);
        if (groupIndex == 0) {
          tokens.push(match)
        }
      });
    }
    let parser = {};
    parser.command = tokens[0];
    parser.options = [];
    parser.arguments = [];
    for (let i = 1; i < tokens.length; i++) {
      if (/^--\w*$/u.test(tokens[i])) {
        console.log(tokens[i]);
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
    parser.options = [...new Set(parser.options)];
    return parser;
  }
  // Commands Console
  stem(args, opts) {
    let selector = " .token";
    let sensitive = true;
    let r = new RegExp("^[A-zÀ-ù0-9\-]+$");
    if (opts.includes("selection") || opts.includes("s")) {
      selector += ".selected";
    }
    let tokensEl = document.querySelectorAll(this.selector + selector);
    let wordsCount = 0;
    let words = [];
    tokensEl.forEach(e => {
      let token = sensitive ? e.innerText : e.innerText.toLowerCase();
      if (r.test(token)) {
        //console.log(token);
        wordsCount++;
        words.push(carry(token));
      }
    });
    console.log(words);
  }
  freq(args, opts) {

    let selector = " .token";
    let sensitive = true;
    let stem = false;

    let r = new RegExp("^[A-zÀ-ù0-9\-]+$");
    if (opts.includes("stem") || opts.includes("t")) {
      //console.log(opts);
      stem = true;
    }
    if (opts.includes("selection") || opts.includes("s")) {
      selector += ".selected";
    }
    if (opts.includes("insensitive") || opts.includes("i")) {
      sensitive = false;
    }
    let tokensEl = document.querySelectorAll(this.selector + selector);
    let wordsCount = 0;
    let words = {};
    tokensEl.forEach(e => {
      let token = sensitive ? e.innerText : e.innerText.toLowerCase();
      //console.log(stem);
      token = stem ? carry(token) : token;
      if (r.test(token)) {
        //console.log(token);
        wordsCount++;
        if (!words[token]) {
          words[token] = 1;
        }
        else {
          words[token]++;
        }
      }
    });
    words = Object.keys(words).map(key => [key, words[key]]);
    if (opts.includes("r") || opts.includes("rsort")) {
      words.sort((a, b) => a[1] > b[1]);
    }
    else {
      words.sort((a, b) => a[1] < b[1]);
    }

    if (opts.includes("p")) {
      this.displayConsole(words.map(x => x[0] + ' (' + this.digits2((x[1] / wordsCount) * 100) + '%)').join(" - "));
    }
    else {
      this.displayConsole(words.map(x => x[0] + ' (' + x[1] + ')').join(" - "));
    }
  }
  digits2(num) {
    return Math.round((num + 0.00001) * 100) / 100;
  }
  count(args, opts) {
    let selector = " .token";
    let r = new RegExp("^[A-zÀ-ù0-9\-]+$");
    if (opts.includes("selection") || opts.includes("s")) {
      selector += ".selected";
    }
    if (args.includes("numbers")) {
      r = new RegExp("^[0-9]+([,.][0-9]+)?$");
    }
    console.log(opts, selector);
    let tokensEl = document.querySelectorAll(this.selector + selector);
    let wordCounts = 0;
    let words = [];
    tokensEl.forEach(e => {
      let token = e.innerText;
      if (r.test(token)) {
        //console.log(token);
        words.push(token);
      }
    });
    if (opts.includes("distinct") || opts.includes("d")) {
      words = [...new Set(words)];
    }
    if (opts.includes("asort") || opts.includes("a")) {
      if (args.includes("numbers")) {
        words.sort((a, b) => parseFloat(a) > parseFloat(b));
      }
      else {
        words.sort((a, b) => a > b);
      }

    }
    else if (opts.includes("rsort") || opts.includes("r")) {
      if (args.includes("numbers")) {
        words.sort((a, b) => parseFloat(a) < parseFloat(b));
      }
      else {
        words.sort((a, b) => a < b);
      }
    }
    if (opts.includes("list") || opts.includes("l")) {
      this.displayConsole(words.join(" - "));
    }

    wordCounts = words.length;

    this.displayConsole("Words count : " + wordCounts);
    return;
  }
  changeLanguage(args) {
    let label = args[0].toLowerCase();
    if (!label) {
      this.displayConsole("! Argument 'language' is missing");
      return false;
    }
    if (!['en', 'fr', 'de', 'es', 'ja', 'ru', 'it', 'zh', 'pt', 'ar', 'fa', 'pl', 'nl', 'id', 'uk', 'he', 'sv', 'cs', 'ko', 'vi', 'ca'].includes(label)) {
      this.displayConsole("Language not supported");
      return false;
    }
    this.displayConsole("Environnement language set to '" + label + "'");
    this.language = label;
  }
  loadHtml(args, options = []) {
    //(e || window.event).preventDefault();
    let label = args[0];
    if (!label) {
      this.displayConsole("Argument 'url' is missing");
      return false;
    }
    this.displayConsole("Loading Wikipedia page '" + label + "'...");
    var myHeaders = new Headers();
    let el = this.el;
    myHeaders.append("Content-Type", "application/json");
    fetch("http://" + this.language + ".wikipedia.org/w/api.php?action=parse&page=" + label + "&format=json&redirects&origin=*", { headers: myHeaders })
      .then((response) => response.json())
      .then(text => {
        if (text.error) {
          this.displayConsole("! " + text.error.info);
        }
        else {
          console.log(text);
          this.displayConsole("Page loaded!");
          let html = text.parse.text['*'];
          el.innerHTML = html;
          this.init();
        }

      })

      .catch((error) => {
        this.displayConsole("! " + error);
        console.warn(error);
      });
  }
}

window.Labelizer = Labelizer;
