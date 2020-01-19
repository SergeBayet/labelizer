import carry from "./carry";
import { getCookie, setCookie } from "./cookies";
import { isStopWord } from "./stopwords";
import Terminal from "./terminal";
const version = "0.0.1";

export default class Labelizer {
  constructor(selector, options = {}) {
    this.terminal = new Terminal(this, options.consoleSelector);

    this.selector = selector;
    this.el = document.querySelector(selector);
    this.o = options;
    this.indexToken = 0;
    this.consoleInitialized = false;
    this.language = "fr";

    this.init();
  }

  init() {
    let as = document.querySelectorAll(this.selector + " a");
    as.forEach(a => {
      a.addEventListener("click", e => e.preventDefault());
    });

    this.lastSelected = false;
    if (!this.el) {
      this.terminal.log("DOM selector must be provided!");
      return false;
    }

    this.indexToken = 0;
    this.repl(this.el);
    let css =
      ".token:hover{ background-color: " +
      (this.o.tokenColorBgHover || "#00FF00") +
      " ; color: " +
      (this.o.tokenColorFgHover || "#FF00FF") +
      " ; cursor:pointer ; -webkit-user-select: none ; -moz-user-select: none; -ms-user-select: none; user-select: none; } ";
    css += " .token.selected { background-color : green }";
    let style = document.createElement("style");

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName("head")[0].appendChild(style);
    let tokensEl = document.querySelectorAll(this.selector + " .token");
    tokensEl.forEach(el => {
      el.addEventListener("click", e => {
        // this.terminal.log('id : ' + el.getAttribute('data-id'));
        if (window.event.ctrlKey) {
          if (!el.classList.contains("selected")) {
            el.classList = "token selected";
            this.lastSelected = el.getAttribute("data-id");
            this.terminal.log("'" + e.target.innerText + "' selected");
          } else {
            el.classList = "token";
            this.lastSelected = false;
            this.terminal.log("'" + e.target.innerText + "' unselected");
          }
        } else if (window.event.shiftKey) {
          let idSelected = el.getAttribute("data-id");
          if (!this.lastSelected) {
            el.classList = "token selected";
            this.terminal.log("'" + e.target.innerText + "' selected");
          } else if (this.lastSelected < idSelected) {
            let selectedText = [];
            for (let i = this.lastSelected; i <= idSelected; i++) {
              let t = document.querySelector('.token[data-id="' + i + '"]');

              t.classList = "token selected";
              selectedText.push(t.innerText);
            }
            this.terminal.log("'" + selectedText.join("") + "' selected");
          } else {
            let selectedText = [];
            for (let i = this.lastSelected; i >= idSelected; i--) {
              let t = document.querySelector('.token[data-id="' + i + '"]');

              t.classList = "token selected";
              selectedText.push(t.innerText);
            }
            this.terminal.log(
              "'" + selectedText.reverse().join("") + "' selected"
            );
          }
          this.lastSelected = idSelected;
        } else {
          if (!el.classList.contains("selected")) {
            tokensEl.forEach(x => {
              x.classList = "token";
            });
            el.classList = "token selected";
            this.lastSelected = el.getAttribute("data-id");
            this.terminal.log("'" + e.target.innerText + "' selected");
          } else {
            tokensEl.forEach(x => {
              x.classList = "token";
            });
            this.lastSelected = false;
            this.terminal.log("'" + e.target.innerText + "' unselected");
          }
        }
      });
    });
    this.terminal.info("Labelizer initialized.");
  }

  repl(node) {
    if (
      node.className === undefined ||
      node.nodeName == "CODE" ||
      node.nodeName == "PRE"
    )
      return;

    let classNames = node.className.split(" ");

    if (
      classNames.includes("mw-editsection") ||
      classNames.includes("plainlinks") ||
      classNames.includes("references-small")
    )
      return;
    var nodes = node.childNodes;

    for (var i = 0, m = nodes.length; i < m; i++) {
      var n = nodes[i];

      if (n.nodeType == n.TEXT_NODE) {
        let toks = n.textContent.split(/([A-zÀ-ü0-9\-\.]*)/gu).filter(x => x);
        let i = 0;
        while (toks[i]) {
          if (/^[^\.]*\.$/gm.test(toks[i])) {
            toks[i] = toks[i].substring(0, toks[i].length - 1);
            toks.splice(i + 1, 0, ".");
            i++;
          }
          i++;
        }

        //console.log(toks);
        let newHTML = "";
        toks.forEach(el => {
          this.indexToken++;

          newHTML +=
            '<span class="token" data-id="' +
            this.indexToken +
            '">' +
            el +
            "</span>";
        });

        // do some swappy text to html here?
        var replacementNode = document.createElement("span");

        replacementNode.innerHTML = newHTML;
        n.parentNode.insertBefore(replacementNode, n);
        n.parentNode.removeChild(n);
      } else {
        this.repl(n);
      }
    }
  }

  // Commands Console
  ngrams(args, opts) {
    let selector = " .token";
    let r = new RegExp("^[A-zÀ-ü0-9-]+$");
    if (opts.includes("selection")) {
      selector += ".selected";
    }
    let n = parseInt(args[0]); // || '3');      // Default ngrams(3)
    let ngrams = {};
    let tokensEl = document.querySelectorAll(this.selector + selector);
    let mask = Array(tokensEl.length).fill(true);
    let insensitive = false;
    let recursive = n;
    let minimumLength = 3;
    let stem = false;
    if (opts.includes("recursive")) {
      recursive = 1;
      if (opts.includes("minNgram")) {
        console.log(opts["minGram"]);
        //recursive =
      }
    }
    if (opts.includes("insensitive")) {
      insensitive = true;
    }
    if (opts.includes("stemming")) {
      stem = true;
    }
    while (n >= recursive) {
      let i = 0,
        lastIndex = 0;
      while (tokensEl[i]) {
        //console.log(tokensEl[i].innerText);
        if (r.test(tokensEl[i].innerText)) {
          lastIndex = i;
          let ng = "";
          let ngStemmed = "";
          let cursor = 1;

          while (cursor <= n && tokensEl[i]) {
            if (!mask[i]) break;
            let text = tokensEl[i].innerText;
            if (/^[\,\.\(\)\;\:\[\]\|·\(\)]$/.test(text)) {
              break;
            }
            if (isStopWord(text, this.language)) {
              if (cursor == 1 || cursor == n) break;
            }

            if (r.test(text)) {
              if (cursor > 1 && ng.substring(ng.length - 1) !== " ") {
                break;
              }
              cursor++;
            }
            ngStemmed += carry(text);
            ng += text;
            i++;
          }
          i = lastIndex;
          if (cursor == n + 1) {
            if (insensitive) {
              ng = ng.toLowerCase();
              ngStemmed = ngStemmed.toLowerCase();
            }
            if (stem) {
              if (!ngrams[ngStemmed]) {
                ngrams[ngStemmed] = { weight: 1, forms: new Set([ng]) };
              } else {
                ngrams[ngStemmed].weight += n;
                ngrams[ngStemmed].forms.add(ng);
                for (let x = i; x <= i + n; x++) {
                  mask[x] = false;
                }
              }
            } else {
              if (!ngrams[ng]) {
                ngrams[ng] = { weight: 1 };
              } else {
                ngrams[ng].weight += n;
                for (let x = i; x <= i + n; x++) {
                  mask[x] = false;
                }
              }
            }
          }
        }

        i++;
      }

      n--;
    }

    ngrams = Object.keys(ngrams).map(key => [
      key,
      ngrams[key].weight,
      ngrams[key].forms
    ]);

    if (opts.includes("rsort")) {
      ngrams.sort((a, b) => a[1] > b[1]);
    } else {
      ngrams.sort((a, b) => a[1] < b[1]);
    }

    this.terminal.log(
      ngrams
        .filter(x => x[1] > 1 && x[0].length >= minimumLength)
        .map(x => {
          if (x[2]) {
            return Array.from(x[2]).join("/") + " (" + x[1] + ")";
          } else {
            return x[0] + " (" + x[1] + ")";
          }
        })
        .join("<br/>")
    );
    //console.log(ngrams);
  }
  stem(args, opts) {
    let selector = " .token";
    let sensitive = true;
    let r = new RegExp("^[A-zÀ-ü0-9-]+$");
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

    let r = new RegExp("^[A-zÀ-ü0-9-]+$");
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
        } else {
          words[token]++;
        }
      }
    });
    words = Object.keys(words).map(key => [key, words[key]]);
    if (opts.includes("r") || opts.includes("rsort")) {
      words.sort((a, b) => a[1] > b[1]);
    } else {
      words.sort((a, b) => a[1] < b[1]);
    }

    if (opts.includes("p")) {
      this.terminal.log(
        words
          .map(
            x => x[0] + " (" + this.digits2((x[1] / wordsCount) * 100) + "%)"
          )
          .join(" - ")
      );
    } else {
      this.terminal.log(words.map(x => x[0] + " (" + x[1] + ")").join(" - "));
    }
  }
  digits2(num) {
    return Math.round((num + 0.00001) * 100) / 100;
  }
  count(args, opts) {
    let selector = " .token";
    let r = new RegExp("^[A-zÀ-ü0-9-]+$");
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
      } else {
        words.sort((a, b) => a > b);
      }
    } else if (opts.includes("rsort") || opts.includes("r")) {
      if (args.includes("numbers")) {
        words.sort((a, b) => parseFloat(a) < parseFloat(b));
      } else {
        words.sort((a, b) => a < b);
      }
    }
    if (opts.includes("list") || opts.includes("l")) {
      this.terminal.log(words.join(" - "));
    }

    wordCounts = words.length;

    this.terminal.log("Words count : " + wordCounts);
    return;
  }
  changeLanguage(args) {
    let label = args[0].toLowerCase();
    if (!label) {
      this.terminal.error("Argument 'language' is missing");
      return false;
    }
    if (
      ![
        "en",
        "fr",
        "de",
        "es",
        "ja",
        "ru",
        "it",
        "zh",
        "pt",
        "ar",
        "fa",
        "pl",
        "nl",
        "id",
        "uk",
        "he",
        "sv",
        "cs",
        "ko",
        "vi",
        "ca"
      ].includes(label)
    ) {
      this.terminal.error("Language not supported");
      return false;
    }
    this.terminal.log("Environnement language set to '" + label + "'");
    this.language = label;
  }
  loadHtml(args, options = []) {
    //(e || window.event).preventDefault();
    let label = args[0];
    if (!label) {
      this.terminal.log("Argument 'url' is missing");
      return false;
    }
    this.terminal.log("Loading Wikipedia page '" + label + "'...");
    var myHeaders = new Headers();
    let el = this.el;
    myHeaders.append("Content-Type", "application/json");
    fetch(
      "http://" +
        this.language +
        ".wikipedia.org/w/api.php?action=parse&page=" +
        label +
        "&format=json&redirects&origin=*",
      { headers: myHeaders }
    )
      .then(response => response.json())
      .then(text => {
        if (text.error) {
          this.terminal.error(text.error.info);
        } else {
          console.log(text);
          this.terminal.log("Page loaded!");
          let html = text.parse.text["*"];
          el.innerHTML = html;
          this.init();
        }
      })

      .catch(error => {
        this.terminal.log("! " + error);
        console.warn(error);
      });
  }
}

window.Labelizer = Labelizer;
