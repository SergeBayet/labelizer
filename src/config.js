const terminalConfig = {
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
          filter: new RegExp("^.*$"),
          transform: str => str.replace(" ", "_"),
          error: "wikipage (${info}) must be a string"
        }
      ],
      info: "Retrieving wikipedia page '${args[1]}'..."
    }
  ]
};

export default terminalConfig;
