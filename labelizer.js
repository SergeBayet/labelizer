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

  var stop = {
    "fr": ["un", "une", "se", "cette", "oui", "non", "on", "aux", "n", "plus", "moins", "alors", "a", "à", "au", "aucuns", "aussi", "autre", "avant", "avec", "avoir", "bon", "car", "ce", "cela", "ces", "ceux", "chaque", "ci", "comme", "comment", "dans", "de", "d", "des", "du", "dedans", "dehors", "depuis", "devrait", "doit", "donc", "dos", "début", "elle", "elles", "en", "encore", "essai", "est", "et", "eu", "fait", "faites", "fois", "font", "hors", "ici", "il", "ils", "je", "juste", "l", "la", "le", "les", "leur", "là", "ma", "maintenant", "mais", "mes", "mine", "moins", "mon", "mot", "même", "ni", "nommés", "notre", "nous", "ou", "où", "par", "parce", "pas", "peut", "peu", "plupart", "pour", "pourquoi", "quand", "qu", "que", "quel", "quelle", "quelles", "quels", "qui", "sa", "sans", "ses", "seulement", "s", "si", "sien", "son", "sont", "sous", "soyez", "sujet", "sur", "ta", "tandis", "tellement", "tels", "tes", "ton", "tous", "tout", "trop", "très", "t", "tu", "voient", "vont", "votre", "vous", "vu", "ça", "étaient", "état", "étions", "été", "être", "soit"],
    "en": ["a", "able", "about", "above", "abst", "accordance", "according", "accordingly", "across", "act", "actually", "added", "adj", "affected", "affecting", "affects", "after", "afterwards", "again", "against", "ah", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "announce", "another", "any", "anybody", "anyhow", "anymore", "anyone", "anything", "anyway", "anyways", "anywhere", "apparently", "approximately", "are", "aren", "arent", "arise", "around", "as", "aside", "ask", "asking", "at", "auth", "available", "away", "awfully", "b", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "begin", "beginning", "beginnings", "begins", "behind", "being", "believe", "below", "beside", "besides", "between", "beyond", "biol", "both", "brief", "briefly", "but", "by", "c", "ca", "came", "can", "cannot", "can't", "cause", "causes", "certain", "certainly", "co", "com", "come", "comes", "contain", "containing", "contains", "could", "couldnt", "d", "date", "did", "didn't", "different", "do", "does", "doesn't", "doing", "done", "don't", "down", "downwards", "due", "during", "e", "each", "ed", "edu", "effect", "eg", "eight", "eighty", "either", "else", "elsewhere", "end", "ending", "enough", "especially", "et", "et-al", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "except", "f", "far", "few", "ff", "fifth", "first", "five", "fix", "followed", "following", "follows", "for", "former", "formerly", "forth", "found", "four", "from", "further", "furthermore", "g", "gave", "get", "gets", "getting", "give", "given", "gives", "giving", "go", "goes", "gone", "got", "gotten", "h", "had", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "hed", "hence", "her", "here", "hereafter", "hereby", "herein", "heres", "hereupon", "hers", "herself", "hes", "hi", "hid", "him", "himself", "his", "hither", "home", "how", "howbeit", "however", "hundred", "i", "id", "ie", "if", "i'll", "im", "immediate", "immediately", "importance", "important", "in", "inc", "indeed", "index", "information", "instead", "into", "invention", "inward", "is", "isn't", "it", "itd", "it'll", "its", "itself", "i've", "j", "just", "k", "keep \tkeeps", "kept", "kg", "km", "know", "known", "knows", "l", "largely", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "lets", "like", "liked", "likely", "line", "little", "'ll", "look", "looking", "looks", "ltd", "m", "made", "mainly", "make", "makes", "many", "may", "maybe", "me", "mean", "means", "meantime", "meanwhile", "merely", "mg", "might", "million", "miss", "ml", "more", "moreover", "most", "mostly", "mr", "mrs", "much", "mug", "must", "my", "myself", "n", "na", "name", "namely", "nay", "nd", "near", "nearly", "necessarily", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "ninety", "no", "nobody", "non", "none", "nonetheless", "noone", "nor", "normally", "nos", "not", "noted", "nothing", "now", "nowhere", "o", "obtain", "obtained", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "omitted", "on", "once", "one", "ones", "only", "onto", "or", "ord", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "owing", "own", "p", "page", "pages", "part", "particular", "particularly", "past", "per", "perhaps", "placed", "please", "plus", "poorly", "possible", "possibly", "potentially", "pp", "predominantly", "present", "previously", "primarily", "probably", "promptly", "proud", "provides", "put", "q", "que", "quickly", "quite", "qv", "r", "ran", "rather", "rd", "re", "readily", "really", "recent", "recently", "ref", "refs", "regarding", "regardless", "regards", "related", "relatively", "research", "respectively", "resulted", "resulting", "results", "right", "run", "s", "said", "same", "saw", "say", "saying", "says", "sec", "section", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sent", "seven", "several", "shall", "she", "shed", "she'll", "shes", "should", "shouldn't", "show", "showed", "shown", "showns", "shows", "significant", "significantly", "similar", "similarly", "since", "six", "slightly", "so", "some", "somebody", "somehow", "someone", "somethan", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specifically", "specified", "specify", "specifying", "still", "stop", "strongly", "sub", "substantially", "successfully", "such", "sufficiently", "suggest", "sup", "sure \tt", "take", "taken", "taking", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "that'll", "thats", "that've", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "thered", "therefore", "therein", "there'll", "thereof", "therere", "theres", "thereto", "thereupon", "there've", "these", "they", "theyd", "they'll", "theyre", "they've", "think", "this", "those", "thou", "though", "thoughh", "thousand", "throug", "through", "throughout", "thru", "thus", "til", "tip", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "ts", "twice", "two", "u", "un", "under", "unfortunately", "unless", "unlike", "unlikely", "until", "unto", "up", "upon", "ups", "us", "use", "used", "useful", "usefully", "usefulness", "uses", "using", "usually", "v", "value", "various", "'ve", "very", "via", "viz", "vol", "vols", "vs", "w", "want", "wants", "was", "wasnt", "way", "we", "wed", "welcome", "we'll", "went", "were", "werent", "we've", "what", "whatever", "what'll", "whats", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "wheres", "whereupon", "wherever", "whether", "which", "while", "whim", "whither", "who", "whod", "whoever", "whole", "who'll", "whom", "whomever", "whos", "whose", "why", "widely", "willing", "wish", "with", "within", "without", "wont", "words", "world", "would", "wouldnt", "www", "x", "y", "yes", "yet", "you", "youd", "you'll", "your", "youre", "yours", "yourself", "yourselves", "you've", "z", "zero"]
  };
  function isStopWord(word) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "fr";
    return stop[lang].includes(word.toLowerCase());
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

  var terminalConfig = {
    history: {
      cookies: true,
      cookieName: "lbz_history",
      expire: 90
    },
    css: {
      input: {
        position: "static",
        height: "30px",
        border: "1px solid white",
        bottom: "0px",
        width: "100%",
        backgroundColor: "#111",
        color: "#EEE"
      },
      highlight: {
        command: "aqua",
        argument: "lime",
        option: "fuchsia",
        string: "yellow",
        optionArgument: "olive",
        operator: "white",
        autocomplete: "grey"
      }
    },
    errors: {
      unknown: "unknown command '${command}'",
      helpUnknownCommand: "unknown command '${args[1]}'",
      noHelp: "No help defined for this command '${command}'",
      invalidOption: "Invalid option '${option}'"
    },
    help: "Some global help here!",
    commands: [{
      name: "loadpage"
    }, {
      name: "nprint"
    }, {
      name: "ngrams",
      method: "ngrams",
      args: [{
        name: "N",
        info: "number of contiguous items",
        type: "int",
        filter: [1, 15],
        "default": 3,
        error: "n (${info}) must be an integer between 1 and 15"
      }],
      opts: [{
        name: "minNgram",
        abbr: "m",
        info: "When recursive option is on, stop at 'minNgram'. Must be less than 'n' argument.",
        arg: {
          name: "NUM",
          type: "int",
          filter: [1, 14],
          mandatory: true
        }
      }, {
        name: "selection",
        abbr: "s",
        info: "Retrieve ngrams only in the selection"
      }, {
        name: "recursive",
        abbr: "R",
        info: "Find all the n-grams from n to 1 recursively"
      }, {
        name: "insensitive",
        abbr: "i",
        info: "Case insensitive"
      }, {
        name: "stemming",
        abbr: "t",
        info: "Group ngrams by stemming tokens"
      }, {
        name: "rsort",
        abbr: "r",
        info: "Reverse sorting"
      }, {
        name: "asort",
        abbr: "a",
        info: "Ascendant sorting"
      }],
      info: "Retrieving ngrams...",
      shortDescription: "Retrieve n-grams",
      description: "In the fields of computational linguistics and probability, an n-gram is a contiguous sequence of n items from a given sample of text or speech. The items can be phonemes, syllables, letters, words or base pairs according to the application. The n-grams typically are collected from a text or speech corpus. When the items are words, n-grams may also be called shingles"
    }, {
      name: "loadwiki",
      method: "loadHtml",
      args: [{
        name: "wikipage",
        info: "name of Wikipedia page (case sensitive)",
        type: "string",
        filter: new RegExp("^.*$"),
        transform: function transform(str) {
          return str.replace(" ", "_");
        },
        error: "wikipage (${info}) must be a string"
      }],
      info: "Retrieving wikipedia page '${args[1]}'..."
    }]
  };

  var Editable =
  /*#__PURE__*/
  function () {
    function Editable(element, syntaxHighlightCallback, context) {
      _classCallCheck(this, Editable);

      this.element = element;
      this.callback = syntaxHighlightCallback;
      this.oldAnchor = null;
      this.oldFocus = null;
      this.context = context;

      var _this = this;

      this.element.addEventListener('input', function () {
        _this.updateEditor();
      });
      this.updateEditor();
    }

    _createClass(Editable, [{
      key: "getTextSegments",
      value: function getTextSegments(element) {
        var _this2 = this;

        var textSegments = []; //console.log(Array.from(this.element.childNodes));

        Array.from(element.childNodes).forEach(function (node) {
          switch (node.nodeType) {
            case node.TEXT_NODE:
              textSegments.push({
                text: node.nodeValue,
                node: node
              });
              break;

            case node.ELEMENT_NODE:
              textSegments.splice.apply(textSegments, [textSegments.length, 0].concat(_toConsumableArray(_this2.getTextSegments(node))));
              break;

            default:
              throw new Error("Unexpected node type: ".concat(node.nodeType));
          }
        }); //console.log(textSegments);

        return textSegments;
      }
    }, {
      key: "updateEditor",
      value: function updateEditor() {
        var sel = window.getSelection();
        var textSegments = this.getTextSegments(this.element);
        var textContent = textSegments.map(function (_ref) {
          var text = _ref.text;
          return text;
        }).join('');
        var anchorIndex = null;
        var focusIndex = null;
        var currentIndex = 0;
        textSegments.forEach(function (_ref2) {
          var text = _ref2.text,
              node = _ref2.node;

          if (node === sel.anchorNode) {
            anchorIndex = currentIndex + sel.anchorOffset;
          }

          if (node === sel.focusNode) {
            focusIndex = currentIndex + sel.focusOffset;
          }

          currentIndex += text.length;
        }); //console.log("'" + textContent + "'");

        this.element.innerHTML = this.callback(textContent, this.context);
        this.restoreSelection(anchorIndex, focusIndex);
      }
    }, {
      key: "restoreSelection",
      value: function restoreSelection(absoluteAnchorIndex, absoluteFocusIndex) {
        if (absoluteAnchorIndex == null) {
          // Correcting a bug with window.getSelection...
          this.placeCaretAtEnd(this.element);
          return;
        }

        var sel = window.getSelection();
        var textSegments = this.getTextSegments(this.element);
        var anchorNode = this.element;
        var anchorIndex = 0;
        var focusNode = this.element;
        var focusIndex = 0;
        var currentIndex = 0;
        textSegments.forEach(function (_ref3) {
          var text = _ref3.text,
              node = _ref3.node;
          var startIndexOfNode = currentIndex;
          var endIndexOfNode = startIndexOfNode + text.length;

          if (startIndexOfNode <= absoluteAnchorIndex && absoluteAnchorIndex <= endIndexOfNode) {
            anchorNode = node;
            anchorIndex = absoluteAnchorIndex - startIndexOfNode;
          }

          if (startIndexOfNode <= absoluteFocusIndex && absoluteFocusIndex <= endIndexOfNode) {
            focusNode = node;
            focusIndex = absoluteFocusIndex - startIndexOfNode;
          }

          currentIndex += text.length;
        });
        sel.setBaseAndExtent(anchorNode, anchorIndex, focusNode, focusIndex);
      }
    }, {
      key: "placeCaretAtEnd",
      value: function placeCaretAtEnd(el) {
        el.focus();

        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
          var range = document.createRange();
          range.selectNodeContents(el);
          range.collapse(false);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
          var textRange = document.body.createTextRange();
          textRange.moveToElementText(el);
          textRange.collapse(false);
          textRange.select();
        }
      }
    }]);

    return Editable;
  }();

  var Autocomplete =
  /*#__PURE__*/
  function () {
    function Autocomplete(element) {
      _classCallCheck(this, Autocomplete);

      this.hidden = true;
      this.items = [];
      this.element = element;
      this.div = document.createElement("div");
      this.div.setAttribute('class', 'autocomplete-items');
      this.div.setAttribute('display', 'none');
      this.element.parentNode.appendChild(this.div);
    }

    _createClass(Autocomplete, [{
      key: "show",
      value: function show() {
        this.hidden = false;
        this.div.setAttribute('display', 'block');
      }
    }, {
      key: "update",
      value: function update(data) {
        var _this2 = this;

        var b, i;
        console.log(data);
        this.div.innerHTML = "";

        var _loop = function _loop() {
          /*check if the item starts with the same letters as the text field value:*/

          /*create a DIV element for each matching element:*/
          b = document.createElement("div");
          /*make the matching letters bold:*/

          b.innerHTML = data[i].name;
          console.log(data[i].name);
          /*insert a input field that will hold the current array item's value:*/

          b.innerHTML += "<input type='hidden' value='" + data[i].name + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/

          var _this = _this2;
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            _this.element.innerText = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
          });

          _this2.div.appendChild(b);
        };

        for (i = 0; i < data.length; i++) {
          _loop();
        }

        this.show();
      }
    }]);

    return Autocomplete;
  }();

  var ARROW_DOWN = 40;
  var ARROW_UP = 38;
  var ARROW_RIGHT = 39;
  var ENTER = 13;

  var Terminal =
  /*#__PURE__*/
  function () {
    function Terminal(commandsNamespace, terminalSelector) {
      _classCallCheck(this, Terminal);

      this.commandsNamespace = commandsNamespace;
      this.selector = terminalSelector;
      this.DOMelement = document.querySelector(this.selector);
      this.initialized = false;
      this.currentOption = "";
      this.currentCommand = "";
      this.history = [];
      this.historyCursor = 0;
      this.searchField = "";
      this.initHistory();
      this.init();
    }

    _createClass(Terminal, [{
      key: "initHistory",
      value: function initHistory() {
        // If cookies are enabled in config.js, retrieve history
        if (terminalConfig.history.cookies) {
          var cookie = getCookie(terminalConfig.history.cookieName || "terminalCookie");

          if (cookie != "") {
            this.history = JSON.parse(cookie);
          }
        } // Initialize cursor at the end of the history.


        this.historyCursor = this.history.length;
      }
    }, {
      key: "upHistory",
      value: function upHistory(element) {
        var command = element.target.innerText.trim();

        if (this.history.length > 0) {
          if (this.historyCursor == this.history.length) {
            this.searchField = command;
            this.history.push(command);
          }

          if (this.searchField == "") {
            this.historyCursor--;
            if (this.historyCursor < 0) this.historyCursor = 0;
          } else {
            var i = this.historyCursor - 1;

            while (i >= 0) {
              if (~this.history[i].indexOf(this.searchField)) {
                this.historyCursor = i;
                break;
              }

              i--;
            }
          }

          element.target.innerHTML = this.renderText(this.history[this.historyCursor], this);
        }
      }
    }, {
      key: "downHistory",
      value: function downHistory(element) {
        if (this.history.length > 0) {
          if (this.searchField == "") {
            this.historyCursor++;
            if (this.historyCursor > this.history.length - 1) this.historyCursor = this.history.length - 1;
          } else {
            var i = this.historyCursor + 1;

            while (i < this.history.length) {
              if (~this.history[i].indexOf(this.searchField)) {
                this.historyCursor = i;
                break;
              }

              i++;
            }
          }

          element.target.innerHTML = this.renderText(this.history[this.historyCursor], this);
        }
      }
    }, {
      key: "addHistory",
      value: function addHistory(str) {
        if (str.trim() == "") return false;

        if (this.historyCursor < this.history.length) {
          this.history.splice(this.historyCursor, 1);
        }

        if (this.history[this.history.length - 1] !== str) {
          this.history.push(str);
        }

        this.history = this.history.filter(function (x) {
          return x;
        });
        setCookie(terminalConfig.history.cookieName || "terminalCookie", JSON.stringify(this.history), terminalConfig.history.expire || 30);
        this.historyCursor = this.history.length;
      }
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;

        // Initialize terminal only one time
        if (this.initialized) return false;
        this.initialized = true; // Create input element for the terminal with css rules from "config.js"

        var inputElement = document.createElement("div");
        inputElement.setAttribute("contenteditable", "true");
        inputElement.setAttribute("spellcheck", "false");
        inputElement.style.whiteSpace = "pre"; // white-space: pre-wrap;       /* css-3 */
        // white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        // white-space: -pre-wrap;      /* Opera 4-6 */
        // white-space: -o-pre-wrap;    /* Opera 7 */
        // word-wrap: break-word;       /* Internet Explorer 5.5+ */

        if (terminalConfig.css.input) {
          var rules = Object.entries(terminalConfig.css.input);

          for (var _i = 0, _rules = rules; _i < _rules.length; _i++) {
            var _rules$_i = _slicedToArray(_rules[_i], 2),
                property = _rules$_i[0],
                value = _rules$_i[1];

            inputElement.style[property] = value;
          }
        }

        inputElement.autofocus = true;
        var editable = new Editable(inputElement, this.renderText, this); // Managing keyboard events
        // Add input element in the DOM

        var screen = document.createElement("div");
        screen.setAttribute("class", "context");
        this.DOMelement.appendChild(screen);
        this.DOMelement = screen;
        this.selector = this.selector + " .context";
        var div = document.createElement("div");
        screen.parentNode.insertBefore(div, screen.nextSibling);
        div.appendChild(inputElement);
        div.style.position = 'relative';
        var ac = new Autocomplete(inputElement);
        inputElement.addEventListener("keyup", function (e) {
          switch (e.keyCode) {
            case ENTER:
              e.preventDefault();

              _this2.execute(e.target.innerText.trim());

              inputElement.innerHTML = "";
              break;

            case ARROW_UP:
              _this2.upHistory(e);

              break;

            case ARROW_DOWN:
              _this2.downHistory(e);

              break;

            case ARROW_RIGHT:
              e.preventDefault();
              e.target.innerHTML = _this2.renderText(e.target.innerText, _this2);
              editable.placeCaretAtEnd(e.target);
              break;

            default:
              ac.update([{
                'name': 'serge'
              }, {
                'name': 'bayet'
              }]);
              _this2.historyCursor = _this2.history.length;
          }
        });
      }
    }, {
      key: "renderText",
      value: function renderText(text, context) {
        var ret = context.parserCli(text).highlighted;
        return ret;
      }
    }, {
      key: "interpolation",
      value: function interpolation(str, context) {
        if (str == undefined) return false;

        var _this = this;

        var parsed = str.replace(/(\$\{command\})/, function (x, i) {
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
    }, {
      key: "autocomplete",
      value: function autocomplete(source, str) {
        var ac = terminalConfig[source].filter(function (command) {
          return command.name.startsWith(str);
        }).map(function (x) {
          return {
            name: x.name,
            remaining: x.name.substring(str.length)
          };
        }).filter(function (x) {
          return x.remaining;
        });
        return ac;
      }
    }, {
      key: "unquote",
      value: function unquote(str) {
        return str.replace(/^"(.*)"$/, "$1").replace(/\\/g, "");
      }
    }, {
      key: "parserCli",
      value: function parserCli(str) {
        var parser = {
          command: "",
          arguments: [],
          options: [],
          highlighted: "",
          autocomplete: ""
        };
        str = str.replace(/>/g, "&gt;").replace(/</g, "&lt;");
        var regSeparator = new RegExp("^\\s+");
        var regCommand = /^\s*\S+/;
        var regString = new RegExp("^\"([^\\\\\"]|\\\\\")*\"?");
        var regOption = /^(-{1,2})([^=\s]+)((=("([^\\"]|\\")*"?))|(=(\S+)))?/;
        var index = 0;
        var currentOption = '';
        var m = regCommand.exec(str);

        while (m !== null) {
          if (index == 0) // command
            {
              parser.command = m[0].trim();
              parser.highlighted += this.highlight(m[0], terminalConfig.css.highlight.command);
              parser.autocomplete = this.autocomplete("commands", parser.command);
            } else {
            var token = m[0].trim();

            if (token == '') // separator
              {
                parser.highlighted += m[0];
              } else if (m.length <= 2) // argument
              {
                if (currentOption !== '') {
                  parser.options[parser.options.length - 1].arguments.push(token);
                  parser.highlighted += this.highlight(m[0], terminalConfig.css.highlight.optionArgument);
                } else {
                  parser.arguments.push(this.unquote(token.trim()));
                  parser.highlighted += this.highlight(m[0], terminalConfig.css.highlight.argument);
                }
              } else {
              // option
              if (m[1] == "-") // abbreviated option
                {
                  m[2].split("").map(function (opt) {
                    parser.options.push({
                      name: opt,
                      arguments: []
                    });
                    currentOption = opt;
                  });
                  parser.highlighted += this.highlight('-', terminalConfig.css.highlight.operator);
                  parser.highlighted += this.highlight(m[2], terminalConfig.css.highlight.option);
                } else if (m[1] == "--") // long option
                {
                  parser.highlighted += this.highlight('--', terminalConfig.css.highlight.operator);
                  var arg = m[8] ? m[8] : m[5] ? m[5] : "";
                  parser.options.push({
                    name: m[2],
                    arguments: [this.unquote(arg)]
                  });
                  parser.highlighted += this.highlight(m[2], terminalConfig.css.highlight.option);

                  if (m[8]) {
                    parser.highlighted += this.highlight('=', terminalConfig.css.highlight.operator);
                    parser.highlighted += this.highlight(m[8], terminalConfig.css.highlight.optionArgument);
                  } else if (m[5]) {
                    parser.highlighted += this.highlight('=', terminalConfig.css.highlight.operator);
                    parser.highlighted += this.highlight(m[5], terminalConfig.css.highlight.optionArgument);
                  }
                }
            }
          }

          str = str.substring(m[0].length);
          m = regSeparator.exec(str) || regString.exec(str) || regOption.exec(str) || regCommand.exec(str);
          index++;
        }

        parser.options.isOption = function (str) {
          var opt = this.filter(function (options) {
            return options.name == str;
          })[0] || [];
          return opt.length == 0 ? false : opt;
        };

        parser.arguments.isArgument = parser.options.isOption;
        console.log(parser.autocomplete);
        return parser;
      }
    }, {
      key: "highlight",
      value: function highlight(str, color) {
        return "<span style=\"color:".concat(color, "\">").concat(str, "</span>");
      }
    }, {
      key: "execute",
      value: function execute(str) {
        var _this3 = this;

        str = str.trim();
        if (str == "") return false;
        this.addHistory(str);
        var parser = this.parserCli(str); // Display the command in the terminal

        this.info(str);
        var definition = terminalConfig.commands.filter(function (command) {
          return command.name == parser.command;
        })[0] || [];
        var context = {};
        this.currentCommand = parser.command;

        if (definition.length == 0 && parser.command !== "help") {
          this.error(this.interpolation(terminalConfig.errors.unknown, context) || "Command not found : " + parser.command);
          return false;
        } // Help management


        if (parser.command == "help") {
          definition = terminalConfig.commands.filter(function (command) {
            return command.name == parser.arguments[0];
          })[0] || [];

          if (parser.arguments[0] && definition.length == 0) {
            this.error(this.interpolation(terminalConfig.errors.helpUnknownCommand || "Command not found", parser));
          } else if (definition.length == 0) {
            this.log(this.interpolation(terminalConfig.help || "No global help", context));
          } else {
            this.log(this.explain(definition));
          } // this.log(this.explain(parser));
          // this.log(definition.help || "Sorry, no help defined for this command");


          return true;
        } // Check arguments


        var args = definition.args;
        var checkResult = true;
        args.forEach(function (arg, i) {
          if (parser.arguments[i]) {
            switch (arg.type) {
              case "int":
                if (!Number.isInteger(parseFloat(arg)) && !_this3.checkFilter(parser.arguments[i], arg.filter)) {
                  _this3.error(_this3.interpolation(arg.error, arg) || "Argument error");

                  checkResult = false;
                }

                break;

              case "string":
                if (!_this3.checkFilter(parser.arguments[i], arg.filter)) {
                  _this3.error(_this3.interpolation(arg.error, arg) || "Argument error");

                  checkResult = false;
                }

                break;
            }

            if (arg.transform) {
              parser.arguments[i] = arg.transform(parser.arguments[i]);
            }
          } else {
            if (arg["default"]) {
              parser.arguments.push(arg["default"]);
            }
          }
        });
        if (!checkResult) return false; // Check Options

        var opts = definition.opts;
        parser.options.forEach(function (parsedOpt, index) {
          var validOption = false;
          _this3.currentOption = parsedOpt.name;
          opts.forEach(function (opt, i) {
            if (opt.name == parsedOpt.name || opt.abbr == parsedOpt.name) {
              parser.options[index].name = opt.name;

              if (opt.argument !== "") ;

              validOption = true;
            }
          });

          if (!validOption) {
            _this3.error(_this3.interpolation(terminalConfig.errors.invalidOption, parser) || "Invalid option");
          }
        });
        this.log(this.interpolation(definition.info, parser) || "");

        var _this = this; // Call the user method with arguments and options


        var promise = new Promise(function (resolve, reject) {
          resolve(_this.commandsNamespace[definition.method](parser.arguments, parser.options));
        });
        promise.then();
        return true;
      }
    }, {
      key: "checkFilter",
      value: function checkFilter(value, filter) {
        if (!filter) return true;

        if (Array.isArray(filter) && filter.every(function (x) {
          return !isNaN(x);
        }) && filter.length == 2) {
          return value >= filter[0] && value <= filter[1];
        } else if (filter instanceof RegExp) {
          return filter.test(value);
        }

        this.error("Filter <em>" + filter.toString() + "</em> not supported");
        return true;
      }
    }, {
      key: "humanizeFilter",
      value: function humanizeFilter(filter) {
        if (Array.isArray(filter) && filter.every(function (x) {
          return !isNaN(x);
        }) && filter.length == 2) {
          return "between ".concat(filter[0], " and ").concat(filter[1]);
        } else if (filter instanceof RegExp) {
          return "matching the regular expression : " + filter.toString();
        }

        return "";
      }
    }, {
      key: "explain",
      value: function explain(definition) {
        var str = "<dl>";
        str += "<dt>NAME</dt>";
        str += "<dd>" + definition.name + " - " + (definition.shortDescription || "") + "</dd><br/>";
        str += "<dt>SYNOPSIS</dt>";
        str += "<dd>" + definition.name + " " + this.synopsis(definition) + "</dd><br/>";
        str += "<dt>DESCRIPTION</dt>";
        str += "<dd>" + (definition.description || "no description for this command") + "</dd><br/>";

        if (definition.opts) {
          str += "<dt>OPTIONS</dt>";
          (definition.args || []).forEach(function (x) {
            var name = x.name;
            if (x["default"]) name += "=" + x["default"];
            str += "<dd>&lt;" + name + "&gt;</dd>";
            str += "<dd>&nbsp;&nbsp;&nbsp;&nbsp;" + x.info + "</dd>";
            str += "<br/>";
          });
          definition.opts.forEach(function (x) {
            var arg = "";

            if (x.arg) {
              arg = "=&lt;<u>" + x.arg.name + "</u>&gt;";

              if (!x.arg.mandatory) {
                arg = "[" + arg + "]";
              }
            }

            var options = [x.abbr ? "-" + x.abbr + arg.replace("=", " ") : "", "--" + x.name + arg].filter(function (a) {
              return a;
            }).join(", ");
            str += "<dd>" + options + "</dd>";
            str += "<dd>&nbsp;&nbsp;&nbsp;&nbsp;" + x.info + "</dd>";
            str += "<br/>";
          });
        }

        str += "</dl>";
        return str;
      }
    }, {
      key: "synopsis",
      value: function synopsis(definition) {
        var str = [];
        (definition.args || []).forEach(function (x) {
          var name = x.name;
          if (x["default"]) name += "=" + x["default"];
          str.push("&lt;" + name + "&gt;");
        });
        (definition.opts || []).forEach(function (x) {
          var arg = "";

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
    }, {
      key: "error",
      value: function error(str) {
        if (this.initialized) {
          var consoleElement = document.createElement("p");
          consoleElement.innerHTML = "! " + str;
          consoleElement.style.color = "red";
          this.DOMelement.appendChild(consoleElement);
          this.DOMelement.scrollTop = this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
        } else {
          console.error(str);
        }
      }
    }, {
      key: "info",
      value: function info(str) {
        if (this.initialized) {
          var consoleElement = document.createElement("p");
          consoleElement.innerHTML = "> " + str;
          consoleElement.style.color = "green";
          this.DOMelement.appendChild(consoleElement);
          this.DOMelement.scrollTop = this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
        } else {
          console.log(str);
        }
      }
    }, {
      key: "log",
      value: function log(str) {
        if (this.initialized) {
          var consoleElement = document.createElement("p");
          consoleElement.innerHTML = str;
          this.DOMelement.appendChild(consoleElement);
          this.DOMelement.scrollTop = this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
        } else {
          console.log(str);
        }
      }
    }]);

    return Terminal;
  }();

  var Labelizer =
  /*#__PURE__*/
  function () {
    function Labelizer(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Labelizer);

      this.terminal = new Terminal(this, options.consoleSelector);
      this.selector = selector;
      this.el = document.querySelector(selector);
      this.o = options;
      this.indexToken = 0;
      this.consoleInitialized = false;
      this.language = "fr";
      this.init();
    }

    _createClass(Labelizer, [{
      key: "init",
      value: function init() {
        var _this = this;

        var as = document.querySelectorAll(this.selector + " a");
        as.forEach(function (a) {
          a.addEventListener("click", function (e) {
            return e.preventDefault();
          });
        });
        this.lastSelected = false;

        if (!this.el) {
          this.terminal.log("DOM selector must be provided!");
          return false;
        }

        this.indexToken = 0;
        this.repl(this.el);
        var css = ".token:hover{ background-color: " + (this.o.tokenColorBgHover || "#00FF00") + " ; color: " + (this.o.tokenColorFgHover || "#FF00FF") + " ; cursor:pointer ; -webkit-user-select: none ; -moz-user-select: none; -ms-user-select: none; user-select: none; } ";
        css += " .token.selected { background-color : green }";
        var style = document.createElement("style");

        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.getElementsByTagName("head")[0].appendChild(style);
        var tokensEl = document.querySelectorAll(this.selector + " .token");
        tokensEl.forEach(function (el) {
          el.addEventListener("click", function (e) {
            // this.terminal.log('id : ' + el.getAttribute('data-id'));
            if (window.event.ctrlKey) {
              if (!el.classList.contains("selected")) {
                el.classList = "token selected";
                _this.lastSelected = el.getAttribute("data-id");

                _this.terminal.log("'" + e.target.innerText + "' selected");
              } else {
                el.classList = "token";
                _this.lastSelected = false;

                _this.terminal.log("'" + e.target.innerText + "' unselected");
              }
            } else if (window.event.shiftKey) {
              var idSelected = el.getAttribute("data-id");

              if (!_this.lastSelected) {
                el.classList = "token selected";

                _this.terminal.log("'" + e.target.innerText + "' selected");
              } else if (_this.lastSelected < idSelected) {
                var selectedText = [];

                for (var i = _this.lastSelected; i <= idSelected; i++) {
                  var t = document.querySelector('.token[data-id="' + i + '"]');
                  t.classList = "token selected";
                  selectedText.push(t.innerText);
                }

                _this.terminal.log("'" + selectedText.join("") + "' selected");
              } else {
                var _selectedText = [];

                for (var _i = _this.lastSelected; _i >= idSelected; _i--) {
                  var _t = document.querySelector('.token[data-id="' + _i + '"]');

                  _t.classList = "token selected";

                  _selectedText.push(_t.innerText);
                }

                _this.terminal.log("'" + _selectedText.reverse().join("") + "' selected");
              }

              _this.lastSelected = idSelected;
            } else {
              if (!el.classList.contains("selected")) {
                tokensEl.forEach(function (x) {
                  x.classList = "token";
                });
                el.classList = "token selected";
                _this.lastSelected = el.getAttribute("data-id");

                _this.terminal.log("'" + e.target.innerText + "' selected");
              } else {
                tokensEl.forEach(function (x) {
                  x.classList = "token";
                });
                _this.lastSelected = false;

                _this.terminal.log("'" + e.target.innerText + "' unselected");
              }
            }
          });
        });
        this.terminal.info("Labelizer initialized.");
      }
    }, {
      key: "repl",
      value: function repl(node) {
        var _this2 = this;

        if (node.className === undefined || node.nodeName == "CODE" || node.nodeName == "PRE") return;
        var classNames = node.className.split(" ");
        if (classNames.includes("mw-editsection") || classNames.includes("plainlinks") || classNames.includes("references-small")) return;
        var nodes = node.childNodes;

        for (var i = 0, m = nodes.length; i < m; i++) {
          var n = nodes[i];

          if (n.nodeType == n.TEXT_NODE) {
            var toks = n.textContent.split(/([\x2D\.0-9A-z\xC0-\xFC]*)/g).filter(function (x) {
              return x;
            });
            var _i2 = 0;

            while (toks[_i2]) {
              if (/^[^\.]*\.$/gm.test(toks[_i2])) {
                toks[_i2] = toks[_i2].substring(0, toks[_i2].length - 1);
                toks.splice(_i2 + 1, 0, ".");
                _i2++;
              }

              _i2++;
            } //console.log(toks);


            var newHTML = "";
            toks.forEach(function (el) {
              _this2.indexToken++;
              newHTML += '<span class="token" data-id="' + _this2.indexToken + '">' + el + "</span>";
            }); // do some swappy text to html here?

            var replacementNode = document.createElement("span");
            replacementNode.innerHTML = newHTML;
            n.parentNode.insertBefore(replacementNode, n);
            n.parentNode.removeChild(n);
          } else {
            this.repl(n);
          }
        }
      } // Commands Console

    }, {
      key: "ngrams",
      value: function ngrams(args, opts) {
        var selector = " .token";
        var r = new RegExp("^[A-zÀ-ü0-9-]+$");

        if (opts.isOption("selection")) {
          selector += ".selected";
        }

        var n = parseInt(args[0]);
        var ngrams = {};
        var tokensEl = document.querySelectorAll(this.selector + selector);
        var mask = Array(tokensEl.length).fill(true);
        var insensitive = false;
        var recursive = n;
        var minimumLength = 3;
        var stem = false;

        if (opts.isOption("recursive")) {
          recursive = 1;

          if (opts.isOption("minNgram")) {
            recursive = opts.isOption("minNgram").argument;
          }
        }

        if (opts.isOption("insensitive")) {
          insensitive = true;
        }

        if (opts.isOption("stemming")) {
          stem = true;
        }

        while (n >= recursive) {
          var i = 0,
              lastIndex = 0;

          while (tokensEl[i]) {
            //console.log(tokensEl[i].innerText);
            if (r.test(tokensEl[i].innerText)) {
              lastIndex = i;
              var ng = "";
              var ngStemmed = "";
              var cursor = 1;

              while (cursor <= n && tokensEl[i]) {
                if (!mask[i]) break;
                var text = tokensEl[i].innerText;

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
                    ngrams[ngStemmed] = {
                      weight: 1,
                      forms: new Set([ng])
                    };
                  } else {
                    ngrams[ngStemmed].weight += n;
                    ngrams[ngStemmed].forms.add(ng);

                    for (var x = i; x <= i + n; x++) {
                      mask[x] = false;
                    }
                  }
                } else {
                  if (!ngrams[ng]) {
                    ngrams[ng] = {
                      weight: 1
                    };
                  } else {
                    ngrams[ng].weight += n;

                    for (var _x = i; _x <= i + n; _x++) {
                      mask[_x] = false;
                    }
                  }
                }
              }
            }

            i++;
          }

          n--;
        }

        ngrams = Object.keys(ngrams).map(function (key) {
          return [key, ngrams[key].weight, ngrams[key].forms];
        });

        if (opts.isOption("rsort")) {
          ngrams.sort(function (a, b) {
            return a[1] > b[1];
          });
        } else {
          ngrams.sort(function (a, b) {
            return a[1] < b[1];
          });
        }

        this.terminal.log(ngrams.filter(function (x) {
          return x[1] > 1 && x[0].length >= minimumLength;
        }).map(function (x) {
          if (x[2]) {
            return Array.from(x[2]).join("/") + " (" + x[1] + ")";
          } else {
            return x[0] + " (" + x[1] + ")";
          }
        }).join("<br/>")); //console.log(ngrams);
      }
    }, {
      key: "stem",
      value: function stem(args, opts) {
        var selector = " .token";
        var r = new RegExp("^[A-zÀ-ü0-9-]+$");

        if (opts.isOption("selection") || opts.isOption("s")) {
          selector += ".selected";
        }

        var tokensEl = document.querySelectorAll(this.selector + selector);
        var words = [];
        tokensEl.forEach(function (e) {
          var token =  e.innerText ;

          if (r.test(token)) {
            words.push(carry(token));
          }
        }); //console.log(words);
      }
    }, {
      key: "freq",
      value: function freq(args, opts) {
        var _this3 = this;

        var selector = " .token";
        var sensitive = true;
        var stem = false;
        var r = new RegExp("^[A-zÀ-ü0-9-]+$");

        if (opts.isOption("stem")) {
          //console.log(opts);
          stem = true;
        }

        if (opts.isOption("selection")) {
          selector += ".selected";
        }

        if (opts.isOption("insensitive")) {
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

        if (opts.isOption("r") || opts.isOption("rsort")) {
          words.sort(function (a, b) {
            return a[1] > b[1];
          });
        } else {
          words.sort(function (a, b) {
            return a[1] < b[1];
          });
        }

        if (opts.isOption("p")) {
          this.terminal.log(words.map(function (x) {
            return x[0] + " (" + _this3.digits2(x[1] / wordsCount * 100) + "%)";
          }).join(" - "));
        } else {
          this.terminal.log(words.map(function (x) {
            return x[0] + " (" + x[1] + ")";
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
        var r = new RegExp("^[A-zÀ-ü0-9-]+$");

        if (opts.isOption("selection") || opts.isOption("s")) {
          selector += ".selected";
        }

        if (args.isArgument("numbers")) {
          r = new RegExp("^[0-9]+([,.][0-9]+)?$");
        }

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

        if (opts.isOption("distinct")) {
          words = _toConsumableArray(new Set(words));
        }

        if (opts.isOption("asort") || opts.isOption("a")) {
          if (args.isArgument("numbers")) {
            words.sort(function (a, b) {
              return parseFloat(a) > parseFloat(b);
            });
          } else {
            words.sort(function (a, b) {
              return a > b;
            });
          }
        } else if (opts.isOption("rsort")) {
          if (args.isArgument("numbers")) {
            words.sort(function (a, b) {
              return parseFloat(a) < parseFloat(b);
            });
          } else {
            words.sort(function (a, b) {
              return a < b;
            });
          }
        }

        if (opts.isOption("list")) {
          this.terminal.log(words.join(" - "));
        }

        wordCounts = words.length;
        this.terminal.log("Words count : " + wordCounts);
        return;
      }
    }, {
      key: "changeLanguage",
      value: function changeLanguage(args) {
        var label = args[0].toLowerCase();

        if (!label) {
          this.terminal.error("Argument 'language' is missing");
          return false;
        }

        if (!["en", "fr", "de", "es", "ja", "ru", "it", "zh", "pt", "ar", "fa", "pl", "nl", "id", "uk", "he", "sv", "cs", "ko", "vi", "ca"].includes(label)) {
          this.terminal.error("Language not supported");
          return false;
        }

        this.terminal.log("Environnement language set to '" + label + "'");
        this.language = label;
      }
    }, {
      key: "loadHtml",
      value: function loadHtml(args) {
        var _this4 = this;
        //(e || window.event).preventDefault();
        var label = args[0];

        if (!label) {
          this.terminal.log("Argument 'url' is missing");
          return false;
        }

        this.terminal.log("Loading Wikipedia page '" + label + "'...");
        var myHeaders = new Headers();
        var el = this.el;
        myHeaders.append("Content-Type", "application/json");
        fetch("http://" + this.language + ".wikipedia.org/w/api.php?action=parse&page=" + label + "&format=json&redirects&origin=*", {
          headers: myHeaders
        }).then(function (response) {
          return response.json();
        }).then(function (text) {
          if (text.error) {
            _this4.terminal.error(text.error.info);
          } else {
            _this4.terminal.log("Page loaded!");

            var html = text.parse.text["*"];
            el.innerHTML = html;

            _this4.init();
          }
        })["catch"](function (error) {
          _this4.terminal.error("! " + error);
        });
      }
    }]);

    return Labelizer;
  }();
  window.Labelizer = Labelizer;

  return Labelizer;

})));
