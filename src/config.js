const terminalConfig = {
  history: {
    cookies: true,
    cookieName: "lbz_history",
    expire: 90
  },
  dym: {
    max: 5,
    triggerScore: 0.3
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
  commands: [
    {
      name: "trans",
      method: "getTranslation",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ],
      opts: [
        {
          name: "language",
          abbr: "l",
          info: "Language of translation.",
          arg: {
            name: "Language",
            type: "string",
            mandatory: true
          }
        }
      ]
    },
    {
      name: "def",
      method: "getDefinition",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ]
    },
    {
      name: "derived",
      method: "getDerivedTerms",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ]
    },
    {
      name: "related",
      method: "getRelatedTerms",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ]
    },
    {
      name: "syn",
      method: "getSynonyms",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ]
    },
    {
      name: "ant",
      method: "getAntonyms",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ]
    },
    {
      name: "hyper",
      method: "getHypernyms",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ]
    },
    {
      name: "hypo",
      method: "getHyponyms",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ]
    },
    {
      name: "further",
      method: "getFurtherReading",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ]
    },
    {
      name: "pronunce",
      method: "getPronunciation",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ]
    },
    {
      name: "etymo",
      method: "getEtymology",
      args: [
        {
          name: "word",
          info: "written form of the word (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiktionary"
          },
          error: "word (${info}) must be a string"
        }
      ]
    },
    {
      name: "ngrams",
      method: "ngrams",
      args: [
        {
          name: "N",
          info: "number of contiguous items",
          type: "int",
          filter: [1, 15],
          default: 3,
          error: "n (${info}) must be an integer between 1 and 15"
        }
      ],
      opts: [
        {
          name: "minNgram",
          abbr: "m",
          info:
            "When recursive option is on, stop at 'minNgram'. Must be less than 'n' argument.",
          arg: {
            name: "NUM",
            type: "int",
            filter: [1, 14],
            mandatory: true
          }
        },
        {
          name: "selection",
          abbr: "s",
          info: "Retrieve ngrams only in the selection"
        },
        {
          name: "recursive",
          abbr: "R",
          info: "Find all the n-grams from n to 1 recursively"
        },
        {
          name: "insensitive",
          abbr: "i",
          info: "Case insensitive"
        },
        {
          name: "stemming",
          abbr: "t",
          info: "Group ngrams by stemming tokens"
        },
        {
          name: "rsort",
          abbr: "r",
          info: "Reverse sorting"
        },
        {
          name: "asort",
          abbr: "a",
          info: "Ascendant sorting"
        }
      ],
      info: "Retrieving ngrams...",
      shortDescription: "Retrieve n-grams",
      description: `In the fields of computational linguistics and probability, an n-gram is a contiguous sequence of n items from a given sample of text or speech. The items can be phonemes, syllables, letters, words or base pairs according to the application. The n-grams typically are collected from a text or speech corpus. When the items are words, n-grams may also be called shingles`
    },
    {
      name: "loadwiki",
      method: "loadHtml",

      args: [
        {
          name: "wikipage",
          info: "name of Wikipedia page (case sensitive)",
          type: "string",
          filter: {
            callbackMethod: "autocompleteWiki"
          },
          transform: str => str.replace(" ", "_"),
          error: "wikipage (${info}) must be a string"
        }
      ],
      info: "Retrieving wikipedia page '${args[1]}'..."
    }
  ]
};

export default terminalConfig;
