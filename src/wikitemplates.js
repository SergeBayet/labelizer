const wikiTemplates = {
  "en-noun": {
    info: "inflection template for most English nouns",
    default: {
      singular: word,
      plural: word => word + "s",
      properties: ["countable"]
    },
    params: {
      s: {
        plural: word => word + "s"
      },
      es: {
        plural: word => word + "es"
      },
      "-": {
        properties: ["uncountable"]
      },
      "~": {
        properties: ["countable", "uncountable"]
      },
      "*": {
        plural: "*"
      }
    }
  }
};
