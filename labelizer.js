/*!
 * Copyright (c) 2019 Serge Bayet
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.labelizer = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /**
   * Talisman stemmers/french/carry
   * ===============================
   *
   * The Carry stemmer for the French language.
   *
   * [Reference]:
   * http://www.otlet-institute.org/docs/Carry.pdf
   *
   * [Article]:
   * Carry, un algorithme de désuffixation pour le français. M. Paternostre,
   * P. Francq, J. Lamoral, D. Wartel et M. Saerens. 2002
   *
   * [Note]:
   * This algorithm has been edited to handle some more cases and is thus
   * lightly different from the original paper (modifications by Guillaume
   * Plique).
   */

  /**
   * Constants.
   */
  var VOWELS = 'aeiouyâàëéêèïîôûùœæ',
      V = "[".concat(VOWELS, "]"),
      C = "[^".concat(VOWELS, "]");
  var LC = new RegExp("^".concat(C, "+")),
      TV = new RegExp("".concat(V, "+$")),
      M = new RegExp("(".concat(V, "+").concat(C, "+)"));
  /**
   * Helpers.
   */

  function computeM(string) {
    // Removing leading consonants
    string = string.replace(LC, '').replace(TV, '');
    return (string.match(M) || []).length;
  }
  /**
   * Rules.
   */


  var STEP1 = [[0, 'issaient'], [0, 'ellement', 'el'], [0, 'issement'], [0, 'alement', 'al'], [0, 'eraient'], [0, 'iraient'], [0, 'eassent'], [0, 'ussent'], [0, 'amment'], [0, 'emment'], [0, 'issant'], [0, 'issent'], [0, 'assent'], [0, 'eaient'], [0, 'issait'], [0, 'èrent'], [0, 'erent'], [0, 'irent'], [0, 'erait'], [0, 'irait'], [0, 'iront'], [0, 'eront'], [0, 'ement'], [0, 'aient'], [0, 'îrent'], [0, 'eont'], [0, 'eant'], [0, 'eait'], [0, 'ient'], [0, 'ent'], [0, 'ont'], [0, 'ant'], [0, 'eât'], [0, 'ait'], [0, 'at'], [0, 'ât'], [0, 'it'], [0, 'ît'], [0, 't'], [0, 'uction'], [1, 'ication'], [1, 'iation'], [1, 'ation'], [0, 'ition'], [0, 'tion'], [1, 'ateur'], [1, 'teur'], [0, 'eur'], [0, 'ier'], [0, 'er'], [0, 'ir'], [0, 'r'], [0, 'eassiez'], [0, 'issiez'], [0, 'assiez'], [0, 'ussiez'], [0, 'issez'], [0, 'assez'], [0, 'eriez'], [0, 'iriez'], [0, 'erez'], [0, 'irez'], [0, 'iez'], [0, 'ez'], [0, 'erai'], [0, 'irai'], [0, 'eai'], [0, 'ai'], [0, 'i'], [0, 'ira'], [0, 'era'], [0, 'ea'], [0, 'a'], [0, 'f', 'v'], [0, 'yeux', 'oeil'], [0, 'eux'], [0, 'aux', 'al'], [0, 'x'], [0, 'issante'], [1, 'atrice'], // Added
  [0, 'eresse'], [0, 'eante'], [0, 'easse'], [0, 'eure'], [0, 'esse'], [0, 'asse'], [0, 'ance'], [0, 'ence'], [0, 'aise'], [0, 'euse'], [0, 'oise', 'o'], [0, 'isse'], [0, 'ante'], [0, 'ouse', 'ou'], [0, 'ière'], [0, 'ete'], [0, 'ète'], [0, 'iere'], [0, 'aire'], [1, 'ure'], [0, 'erie'], [0, 'étude'], [0, 'etude'], [0, 'itude'], [0, 'ade'], [0, 'isme'], [0, 'age'], [0, 'trice'], [0, 'cque', 'c'], [0, 'que', 'c'], [0, 'eille', 'eil'], [0, 'elle'], [0, 'able'], [0, 'iste'], [0, 'ulle', 'ul'], [0, 'gue', 'g'], [0, 'ette'], [0, 'nne', 'n'], [0, 'itée'], [0, 'ité'], [0, 'té'], [0, 'ée'], [0, 'é'], [0, 'usse'], [0, 'aise'], [0, 'ate'], [0, 'ite'], [0, 'ee'], [0, 'e'], [0, 'issements'], [0, 'issantes'], [1, 'ications'], [0, 'eassions'], [0, 'eresses'], [0, 'issions'], [0, 'assions'], [1, 'atrices'], // Added
  [1, 'iations'], [0, 'issants'], [0, 'ussions'], [0, 'ements'], [0, 'eantes'], [0, 'issons'], [0, 'assons'], [0, 'easses'], [0, 'études'], [0, 'etudes'], [0, 'itudes'], [0, 'issais'], [0, 'trices'], [0, 'eilles', 'eil'], [0, 'irions'], [0, 'erions'], [1, 'ateurs'], [1, 'ations'], [0, 'usses'], [0, 'tions'], [0, 'ances'], [0, 'entes'], [1, 'teurs'], [0, 'eants'], [0, 'ables'], [0, 'irons'], [0, 'irais'], [0, 'ences'], [0, 'ients'], [0, 'ieres'], [0, 'eures'], [0, 'aires'], [0, 'erons'], [0, 'esses'], [0, 'euses'], [0, 'ulles', 'ul'], [0, 'cques', 'c'], [0, 'elles'], [0, 'ables'], [0, 'istes'], [0, 'aises'], [0, 'asses'], [0, 'isses'], [0, 'oises', 'o'], [0, 'tions'], [0, 'ouses', 'ou'], [0, 'ières'], [0, 'eries'], [0, 'antes'], [0, 'ismes'], [0, 'erais'], [0, 'eâtes'], [0, 'eâmes'], [0, 'itées'], [0, 'ettes'], [0, 'ages'], [0, 'eurs'], [0, 'ents'], [0, 'ètes'], [0, 'etes'], [0, 'ions'], [0, 'ités'], [0, 'ites'], [0, 'ates'], [0, 'âtes'], [0, 'îtes'], [0, 'eurs'], [0, 'iers'], [0, 'iras'], [0, 'eras'], [1, 'ures'], [0, 'ants'], [0, 'îmes'], [0, 'ûmes'], [0, 'âmes'], [0, 'ades'], [0, 'eais'], [0, 'eons'], [0, 'ques', 'c'], [0, 'gues', 'g'], [0, 'nnes', 'n'], [0, 'ttes'], [0, 'îtes'], [0, 'tés'], [0, 'ons'], [0, 'ais'], [0, 'ées'], [0, 'ees'], [0, 'ats'], [0, 'eas'], [0, 'ts'], [0, 'rs'], [0, 'as'], [0, 'es'], [0, 'fs', 'v'], [0, 'és'], [0, 'is'], [0, 's'], [0, 'eau'], [0, 'au']];
  var STEP2 = [[1, 'ation'], [1, 'ition'], [1, 'tion'], [1, 'ent'], [1, 'el'], [0, 'i']];
  var STEP3 = [[0, 'll', 'l'], [0, 'mm', 'm'], [0, 'nn', 'n'], [0, 'pp', 'p'], [0, 'tt', 't'], [0, 'ss', 's'], [0, 'y'], [0, 't'], [0, 'qu', 'c']];
  /**
   * Function used to apply a set of rules to the current stem.
   *
   * @param  {string} stem - Target stem.
   * @return {string}      - The resulting stem.
   */

  function applyRules(rules, stem) {
    for (var i = 0, l = rules.length; i < l; i++) {
      var _rules$i = _slicedToArray(rules[i], 3),
          min = _rules$i[0],
          pattern = _rules$i[1],
          _rules$i$ = _rules$i[2],
          replacement = _rules$i$ === void 0 ? '' : _rules$i$;

      if (stem.slice(-pattern.length) === pattern) {
        var newStem = stem.slice(0, -pattern.length) + replacement,
            m = computeM(newStem);
        if (m <= min) continue;
        return newStem;
      }
    }

    return stem;
  }
  /**
   * Function stemming the given world using the Carry algorithm for the French
   * language.
   *
   * @param  {string} word - The word to stem.
   * @return {string}      - The resulting stem.
   */


  function carry(word) {
    var stem = word.toLowerCase();
    stem = applyRules(STEP1, stem);
    stem = applyRules(STEP2, stem);
    stem = applyRules(STEP3, stem);
    return stem;
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  }

  var Labelizer =
  /*#__PURE__*/
  function () {
    function Labelizer(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Labelizer);

      this.selector = selector;
      this.el = document.querySelector(selector);
      this.o = options;
      this.indexToken = 0;
      this.consoleInitialized = false;
      this.language = 'fr';
      this.history = [];
      var h = getCookie("lbz_history");

      if (h != '') {
        this.history = JSON.parse(h);
      }

      this.historyCursor = this.history.length;
      this.init();
    }

    _createClass(Labelizer, [{
      key: "init",
      value: function init() {
        var _this = this;

        var as = document.querySelectorAll(this.selector + ' a');
        as.forEach(function (a) {
          a.addEventListener("click", function (e) {
            return e.preventDefault();
          });
        });
        this.console = document.querySelector(this.o.consoleSelector);

        if (this.console) {
          this.initConsole();
        }

        this.lastSelected = false;

        if (!this.el) {
          this.displayConsole("DOM selector must be provided!");
          return false;
        }

        this.indexToken = 0;
        this.repl(this.el);
        var css = '.token:hover{ background-color: ' + (this.o.tokenColorBgHover || '#00FF00') + ' ; color: ' + (this.o.tokenColorFgHover || '#FF00FF') + ' ; cursor:pointer ; -webkit-user-select: none ; -moz-user-select: none; -ms-user-select: none; user-select: none; } ';
        css += ' .token.selected { background-color : green }';
        var style = document.createElement('style');

        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.getElementsByTagName('head')[0].appendChild(style);
        var tokensEl = document.querySelectorAll(this.selector + " .token");
        tokensEl.forEach(function (el) {
          el.addEventListener("click", function (e) {
            // this.displayConsole('id : ' + el.getAttribute('data-id'));
            if (window.event.ctrlKey) {
              if (!el.classList.contains("selected")) {
                el.classList = "token selected";
                _this.lastSelected = el.getAttribute('data-id');

                _this.displayConsole("'" + e.target.innerText + "' selected");
              } else {
                el.classList = "token";
                _this.lastSelected = false;

                _this.displayConsole("'" + e.target.innerText + "' unselected");
              }
            } else if (window.event.shiftKey) {
              var idSelected = el.getAttribute('data-id');

              if (!_this.lastSelected) {
                el.classList = "token selected";

                _this.displayConsole("'" + e.target.innerText + "' selected");
              } else if (_this.lastSelected < idSelected) {
                var selectedText = [];

                for (var i = _this.lastSelected; i <= idSelected; i++) {
                  var t = document.querySelector('.token[data-id="' + i + '"]');
                  t.classList = "token selected";
                  selectedText.push(t.innerText);
                }

                _this.displayConsole("'" + selectedText.join('') + "' selected");
              } else {
                var _selectedText = [];

                for (var _i = _this.lastSelected; _i >= idSelected; _i--) {
                  var _t = document.querySelector('.token[data-id="' + _i + '"]');

                  _t.classList = "token selected";

                  _selectedText.push(_t.innerText);
                }

                _this.displayConsole("'" + _selectedText.reverse().join('') + "' selected");
              }

              _this.lastSelected = idSelected;
            } else {
              if (!el.classList.contains('selected')) {
                tokensEl.forEach(function (x) {
                  x.classList = "token";
                });
                el.classList = "token selected";
                _this.lastSelected = el.getAttribute('data-id');

                _this.displayConsole("'" + e.target.innerText + "' selected");
              } else {
                tokensEl.forEach(function (x) {
                  x.classList = "token";
                });
                _this.lastSelected = false;

                _this.displayConsole("'" + e.target.innerText + "' unselected");
              }
            }
          });
        });
        this.displayConsole("Labelizer intialized.");
      }
    }, {
      key: "initConsole",
      value: function initConsole() {
        var _this2 = this;

        if (this.consoleInitialized) return false;
        this.consoleInitialized = true;
        var inputElement = document.createElement('input');
        inputElement.setAttribute('rows', '1');
        inputElement.setAttribute('type', 'text');
        inputElement.style.position = 'static';
        inputElement.style.bottom = '0px';
        inputElement.style.width = '100%';
        inputElement.style.backgroundColor = '#111';
        inputElement.style.color = '#EEE';
        inputElement.autofocus = true;
        inputElement.addEventListener('keydown', function (e) {
          if (e.keyCode == 13) {
            _this2.executeConsole(e.target.value);

            inputElement.value = '';
          } else if (e.keyCode == 38) {
            if (_this2.history.length > 0) {
              _this2.historyCursor--;
              if (_this2.historyCursor < 0) _this2.historyCursor = 0;
              e.target.value = _this2.history[_this2.historyCursor];
            }
          } else if (e.keyCode == 40) {
            if (_this2.history.length > 0) {
              _this2.historyCursor++;
              if (_this2.historyCursor > _this2.history.length - 1) _this2.historyCursor = _this2.history.length - 1;
              e.target.value = _this2.history[_this2.historyCursor];
            }
          } else {
            _this2.historyCursor = _this2.history.length;
          }
        });
        var screen = document.createElement('div');
        screen.setAttribute('class', 'context');
        this.console.appendChild(screen);
        this.console = screen;
        this.o.consoleSelector = this.o.consoleSelector + ' .context';
        console.log(this.o.consoleSelector);
        screen.parentNode.insertBefore(inputElement, screen.nextSibling); //this.console.appendChild(inputElement);
      }
    }, {
      key: "executeConsole",
      value: function executeConsole(action) {
        this.history.push(action);
        this.history = _toConsumableArray(new Set(this.history));
        setCookie("lbz_history", JSON.stringify(this.history), 90);
        this.historyCursor = this.history.length;
        var params = this.consoleParser(action);
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
        } //this.displayConsole(action);

      }
    }, {
      key: "displayConsole",
      value: function displayConsole() {
        var _this3 = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (this.console) {
          args.forEach(function (e) {
            var consoleElement = document.createElement('p');
            var consoleInstruction = document.createTextNode(e);

            if (e.charAt(0) == ">") {
              consoleElement.style.color = 'green';
            } else if (e.charAt(0) == "!") {
              consoleElement.style.color = 'red';
            }

            consoleElement.appendChild(consoleInstruction);

            _this3.console.appendChild(consoleElement);
          });
          this.console.scrollTop = this.console.scrollHeight - this.console.clientHeight;
        } else {
          var _console;

          (_console = console).log.apply(_console, args);
        }
      }
    }, {
      key: "repl",
      value: function repl(node) {
        var _this4 = this;

        var nodes = node.childNodes;

        for (var i = 0, m = nodes.length; i < m; i++) {
          var n = nodes[i];

          if (n.nodeType == n.TEXT_NODE) {
            //console.log(n.textContent);
            var toks = n.textContent.split(/([0-9A-z\xC0-\xF9]*)/g).filter(function (x) {
              return x !== '';
            });
            var newHTML = '';
            toks.forEach(function (el) {
              _this4.indexToken++;
              newHTML += '<span class="token" data-id="' + _this4.indexToken + '">' + el + '</span>';
            }); // do some swappy text to html here?

            var replacementNode = document.createElement('span');
            replacementNode.innerHTML = newHTML;
            n.parentNode.insertBefore(replacementNode, n);
            n.parentNode.removeChild(n);
          } else {
            this.repl(n);
          }
        }
      } // Console parser

    }, {
      key: "consoleParser",
      value: function consoleParser(str) {
        var regex = /"((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)"|([\x2D0-9A-z\xC0-\xF9]+)/gm; //const str = `load "slkj lkj" -f lkljl --serei mlk 12`;

        var m;
        var tokens = [];

        while ((m = regex.exec(str)) !== null) {
          // This is necessary to avoid infinite loops with zero-width matches
          if (m.index === regex.lastIndex) {
            regex.lastIndex++;
          } // The result can be accessed through the `m`-variable.


          m.forEach(function (match, groupIndex) {
            //console.log(`Found match, group ${groupIndex}: ${match}`);
            if (groupIndex == 0) {
              tokens.push(match);
            }
          });
        }

        var parser = {};
        parser.command = tokens[0];
        parser.options = [];
        parser.arguments = [];

        for (var i = 1; i < tokens.length; i++) {
          if (/^\x2D\x2D[0-9A-Z_a-z]*$/.test(tokens[i])) {
            console.log(tokens[i]);
            parser.options.push(tokens[i].substring(2));
          } else if (/^\x2D[0-9A-Z_a-z]*/.test(tokens[i])) {
            var opt = tokens[i].substring(1).split('');
            parser.options = [].concat(_toConsumableArray(parser.options), _toConsumableArray(opt));
          } else if (/^"(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*"$/.test(tokens[i])) {
            parser.arguments.push(tokens[i].substring(1, tokens[i].length - 1));
          } else {
            parser.arguments.push(tokens[i]);
          }
        }

        parser.options = _toConsumableArray(new Set(parser.options));
        return parser;
      } // Commands Console

    }, {
      key: "stem",
      value: function stem(args, opts) {
        var selector = " .token";
        var r = new RegExp("^[A-zÀ-ù0-9\-]+$");

        if (opts.includes("selection") || opts.includes("s")) {
          selector += ".selected";
        }

        var tokensEl = document.querySelectorAll(this.selector + selector);
        var words = [];
        tokensEl.forEach(function (e) {
          var token =  e.innerText ;

          if (r.test(token)) {
            words.push(carry(token));
          }
        });
        console.log(words);
      }
    }, {
      key: "freq",
      value: function freq(args, opts) {
        var _this5 = this;

        var selector = " .token";
        var sensitive = true;
        var stem = false;
        var r = new RegExp("^[A-zÀ-ù0-9\-]+$");

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

        var tokensEl = document.querySelectorAll(this.selector + selector);
        var wordsCount = 0;
        var words = {};
        tokensEl.forEach(function (e) {
          var token = sensitive ? e.innerText : e.innerText.toLowerCase(); //console.log(stem);

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
        words = Object.keys(words).map(function (key) {
          return [key, words[key]];
        });

        if (opts.includes("r") || opts.includes("rsort")) {
          words.sort(function (a, b) {
            return a[1] > b[1];
          });
        } else {
          words.sort(function (a, b) {
            return a[1] < b[1];
          });
        }

        if (opts.includes("p")) {
          this.displayConsole(words.map(function (x) {
            return x[0] + ' (' + _this5.digits2(x[1] / wordsCount * 100) + '%)';
          }).join(" - "));
        } else {
          this.displayConsole(words.map(function (x) {
            return x[0] + ' (' + x[1] + ')';
          }).join(" - "));
        }
      }
    }, {
      key: "digits2",
      value: function digits2(num) {
        return Math.round((num + 0.00001) * 100) / 100;
      }
    }, {
      key: "count",
      value: function count(args, opts) {
        var selector = " .token";
        var r = new RegExp("^[A-zÀ-ù0-9\-]+$");

        if (opts.includes("selection") || opts.includes("s")) {
          selector += ".selected";
        }

        if (args.includes("numbers")) {
          r = new RegExp("^[0-9]+([,.][0-9]+)?$");
        }

        console.log(opts, selector);
        var tokensEl = document.querySelectorAll(this.selector + selector);
        var wordCounts = 0;
        var words = [];
        tokensEl.forEach(function (e) {
          var token = e.innerText;

          if (r.test(token)) {
            //console.log(token);
            words.push(token);
          }
        });

        if (opts.includes("distinct") || opts.includes("d")) {
          words = _toConsumableArray(new Set(words));
        }

        if (opts.includes("asort") || opts.includes("a")) {
          if (args.includes("numbers")) {
            words.sort(function (a, b) {
              return parseFloat(a) > parseFloat(b);
            });
          } else {
            words.sort(function (a, b) {
              return a > b;
            });
          }
        } else if (opts.includes("rsort") || opts.includes("r")) {
          if (args.includes("numbers")) {
            words.sort(function (a, b) {
              return parseFloat(a) < parseFloat(b);
            });
          } else {
            words.sort(function (a, b) {
              return a < b;
            });
          }
        }

        if (opts.includes("list") || opts.includes("l")) {
          this.displayConsole(words.join(" - "));
        }

        wordCounts = words.length;
        this.displayConsole("Words count : " + wordCounts);
        return;
      }
    }, {
      key: "changeLanguage",
      value: function changeLanguage(args) {
        var label = args[0].toLowerCase();

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
    }, {
      key: "loadHtml",
      value: function loadHtml(args) {
        var _this6 = this;
        //(e || window.event).preventDefault();
        var label = args[0];

        if (!label) {
          this.displayConsole("Argument 'url' is missing");
          return false;
        }

        this.displayConsole("Loading Wikipedia page '" + label + "'...");
        var myHeaders = new Headers();
        var el = this.el;
        myHeaders.append("Content-Type", "application/json");
        fetch("http://" + this.language + ".wikipedia.org/w/api.php?action=parse&page=" + label + "&format=json&redirects&origin=*", {
          headers: myHeaders
        }).then(function (response) {
          return response.json();
        }).then(function (text) {
          if (text.error) {
            _this6.displayConsole("! " + text.error.info);
          } else {
            console.log(text);

            _this6.displayConsole("Page loaded!");

            var html = text.parse.text['*'];
            el.innerHTML = html;

            _this6.init();
          }
        })["catch"](function (error) {
          _this6.displayConsole("! " + error);

          console.warn(error);
        });
      }
    }]);

    return Labelizer;
  }();
  window.Labelizer = Labelizer;

  return Labelizer;

})));
