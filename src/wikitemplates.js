export const tools = {
  toSyllabicSpeech: word => {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let speech = 'vcccvcccvcccccvcccccvcccyc';
    return word.split('')
      .map((char, i) => {
        let pos = alph.indexOf(char.toLowerCase());
        if (pos == -1) {
          return ' ';
        }
        return speech.charAt(pos);
      }).join('');
  },
  ucfirst: word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
export const alias = {
  'label': 'lb',
  'lbl': 'lb',
  'syn': 'synonyms',
  'ant': 'antonyms',
  'quote-text': 'quote-book',
  'en-adjective': 'en-adj',
  'en-adj-more': 'en-adj',
  'quote': 'ux'
}
export const wikiTemplates = {
  "non-gloss definition": {
    info: "Use this template to apply the correct styling to a definition that is not a gloss. ",
    default: {
      definition: ""
    },
    params: [
      {
        name: "",
        action: value => {
          return { definition: value }
        }
      }
    ],
    humanize: obj => {
      return `<i>${obj.definition}</i>`;
    }
  },
  "en-comparative of": {
    info: "template comparative of",
    default: {
      term: ""
    },
    params: [
      {
        name: "",
        action: value => {
          return { term: value }
        }
      }
    ],
    humanize: obj => {
      return `<i>comparative form of</i> <strong>${obj.term}</strong>: more <a href="#" data-link="${obj.term}">${obj.term}</a>`;
    }
  },
  "head": {
    info: "This template is used to create a basic headword line.",
    default: {
      lang: "",
      pos: "",
      head: "${head}"
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          switch (index) {
            case 0:
              return { lang: value }
            case 1:
              return { pos: value }
          }
        }
      },
      {
        name: "head",
        action: (value) => {
          return { head: value }
        }
      }
    ],
    humanize: obj => {
      return '<strong>' + obj.head + '</strong> ' + tools.ucfirst(obj.pos);
    }
  },
  "qualifier": {
    info: "Use this template to provide a qualifier before or after a list item, e.g. to qualify a synonym with a region or register, or a type of usage, like {{qualifier|figurative}}.",
    default: {
      qualifier: []
    },
    params: [
      {
        name: "",
        action: value => {
          return ({ qualifier: value });
        }
      }
    ],
    humanize: obj => {
      console.log('ici : ', obj);
      return '(<i>' + obj.qualifier.join(', ') + '</i>)';
    }
  },
  "defdate": {
    info: "This template provides information about when a sense was first used, generally given to the nearest century. ",
    default: {
      'date': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          return ({ date: value });
        }
      }
    ],
    humanize: obj => {
      return '<span style="font-size: smaller">&#91;' + obj.date + '&#93</span>';
    }
  },
  "rfdatek": {
    info: "This is used to attempt to ease finding dates and other missing information for quotes.",
    default: {
      'lang': '',
      'author': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { 'lang': value }
            case 1:
              return { 'author': value }
          }
        }
      }
    ],
    humanize: obj => {
      return '<a href="#" data-link="' + obj.author.replace(' ', '_') + '">' + obj.author + '</a>';
    }
  },
  "rfdate": {
    info: "Can we date this quote?",
    default: {
      'lang': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { 'lang': value }
          }
        }
      }
    ],
    humanize: obj => {
      return '<i>No date of publication provided</i>';
    }
  },
  "antonyms": {
    info: "This template shows a line with antonyms.",
    default: {
      'lang': "en",
      'ant': [],
      'alt': [],
      'tr': [],
      'q': []
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          if (index == 0) {
            return { lang: value };
          }
          return { ant: value };
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str = obj.ant;
      return '<span style="font-size:smaller">Antonyms: </span>' + str.join(', ');
    }
  },
  "synonyms": {
    info: "This template shows a line with synonyms.",
    default: {
      'lang': "en",
      'syn': [],
      'alt': [],
      'tr': [],
      'q': []
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          if (index == 0) {
            return { lang: value };
          }
          return { syn: value };
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str = obj.syn;
      return '<span style="font-size:smaller">Synonyms: </span>' + str.join(', ');
    }
  },
  "ISBN": {
    info: "This template is used to indicate the International Standard Book Number (ISBN) of a work.",
    default: {
      'isbn': ''
    },
    params: [
      {
        name: "",
        action: value => ({ isbn: value })
      }
    ],
    humanize: obj => {
      return '<a href="#" data-link="https://en.wiktionary.org/wiki/Special:BookSources/' + obj.ibsn + '">→ISBN</a>';
    }
  },
  "ux": {
    info: "This is used to show usage examples (not quotations) following a definition line",
    default: {
      '1': "",
      '2': "",
      '3': "",
      'tr': "",
      'inline': "0",
      'q': [],
      'footer': '',
      'ref': '',
      'lit': '',
      'subst': '',
      'noenum': "false",
      'nocat': "false"
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          switch (index) {
            case 0:
              return { '1': value };
            case 1:
              return { '2': value };
            case 2:
              return { '3': value };
          }
        }
      },
      {
        name: "translation",
        action: value => ({ tr: value })
      },
      {
        name: "t",
        action: value => ({ tr: value })
      },
      {
        name: "transliteration",
        action: value => ({ tr: value })
      },
      {
        name: "q",
        action: value => ({ q: value })
      },
      {
        name: "qualifier",
        action: value => ({ q: value })
      }
    ],
    humanize: obj => {
      let str = [];
      str.push('<i>' + obj['2'] + '</i>');
      return str.join('');
    }
  },
  "w": {
    info: "This template is for having shorter links to an English Wikipedia article when the link is identical to its label.",
    default: {
      wikipage: "",
      display: "",
      lang: "en"
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          switch (index) {
            case 0:
              return { wikipage: value, display: value }
            case 1:
              return { display: value }
          }
        }
      }
    ],
    humanize: obj => {

      let str = '<a href="#" data-link="https://en.wikipedia.org/wiki/' + obj.lang + ':' +
        obj.wikipage.replace(" ", "_") +
        '">' +
        obj.display +
        "</a>";
      return str;
    }
  },
  "quote-journal": {
    info: "This template can be used in a dictionary entry to provide a quotation from a journal or other serial publication, including a magazine or a newspaper.",
    default: {
      '1': "",
      author: "",
      authorlink: "",
      coauthors: "",
      chapter: "",
      editor: "",
      title: "",
      journal: "",
      issn: "",
      url: "",
      archiveurl: "",
      archivedate: "",
      start_date: "",
      location: "",
      publisher: "",
      date: "",
      isbn: "",
      oclc: "",
      volume: "",
      issue: "",
      page: "",
      pages: "",
      pageurl: "",
      text: "",
      passage: "",
      t: "",
      tr: "",
      year: "",
      year_published: ""
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          switch (index) {
            case 0:
              return ({ '1': value });
            case 1:
              return ({ year: value });
            case 2:
              return ({ author: value });
            case 3:
              return ({ title: value });
            case 4:
              return ({ journal: value });
            case 5:
              return ({ url: value });
            case 6:
              return ({ page: value });
            case 7:
              return ({ text: value });
            case 8:
              return ({ tr: value });
            default:
              return ({});
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      if (obj.passage !== '') obj.text = obj.passage;
      str.push('<strong>' + (obj.year == '' ? obj.date : obj.year) + '</strong>');
      str.push(obj.month);

      str.push(obj.author);
      str.push('“' + obj.title + '”');
      str.push('in <i>' + (obj.journal == '' ? obj.work : obj.journal) + '</i>')
      str.push(obj.volume !== '' ? 'volume ' + obj.volume : '');
      str.push(obj.issue !== '' ? 'number ' + obj.issue : '');
      let publication = [];
      publication.push(obj.location);
      publication.push(obj.publisher);
      str.push(publication.filter(x => x).join(': '));
      str.push(obj.year_published !== '' ? 'published ' + obj.year_published : '');
      str.push(obj.oclc !== '' ? '<small>OCLC ' + obj.oclc + '</small>' : '');
      str.push(obj.isbn !== '' ? '<small>ISBN ' + obj.isbn + '</small>' : '');
      str.push(obj.page !== '' ? 'page ' + obj.page : '');
      str.push(obj.pages !== '' ? 'pages ' + obj.pages : '');

      str = str.filter(x => x);
      str[str.length - 1] += obj.text !== '' ? ': ' + '<dl><dd>' + obj.text + '</dd></dl>' : '';
      return str.filter(x => x).join(', ');
    }
  },
  "quote-book": {
    info: "This template can be used in a dictionary entry to provide a quotation from a book. ",
    default: {
      l: "",
      author: "",
      authorlink: "",
      chapter: "",
      editor: "",
      title: "",
      url: "",
      archiveurl: "",
      archivedate: "",
      edition: "",
      location: "",
      publisher: "",
      date: "",
      isbn: "",
      oclc: "",
      volume: "",
      section: "",
      sectionurl: "",
      page: "",
      pages: "",
      pageurl: "",
      text: "",
      passage: "",
      t: "",
      tr: "",
      year: "",
      year_published: ""
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return ({ l: value });
            case 1:
              return ({ year: value });
            case 2:
              return ({ author: value });
            case 3:
              return ({ title: value });
            case 4:
              return ({ url: value });
            case 5:
              return ({ page: value });
            case 6:
              return ({ text: value });
            case 7:
              return ({ tr: value });
            default:
              return ({});
          }
        }
      }
    ],
    humanize: obj => {

      let str = [];
      if (obj.passage !== '') obj.text = obj.passage;
      str.push('<strong>' + obj.year + '</strong>');
      str.push(obj.author);
      str.push('<i>' + obj.title + '</i>');
      let publication = [];
      publication.push(obj.location);
      publication.push(obj.publisher);
      str.push(publication.filter(x => x).join(': '));
      str.push(obj.year_published !== '' ? 'published ' + obj.year_published : '');
      str.push(obj.oclc !== '' ? '<small>OCLC ' + obj.oclc + '</small>' : '');
      str.push(obj.isbn !== '' ? '<small>ISBN ' + obj.isbn + '</small>' : '');
      str.push(obj.page !== '' ? 'page ' + obj.page : '');
      str.push(obj.pages !== '' ? 'pages ' + obj.pages : '');

      str = str.filter(x => x);
      str[str.length - 1] += obj.text !== '' ? ': ' + '<dl><dd>' + obj.text + '</dd></dl>' : '';
      return str.filter(x => x).join(', ');
    }
  },
  "lb": {
    info: "Used : 1. To label senses with restricted usage ; 2. To label senses with grammatical information, in addition to that in the part-of-speech heading and headword line",
    default: {
      languageCode: "",
      labels: []
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          if (index == 0) {
            return { languageCode: value };
          }
          else {
            return { labels: value };
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push('(<i>');
      for (let i = 0; i < obj.labels.length; i++) {
        if (i > 0) {
          switch (obj.labels[i]) {
            case 'and':
            case 'or':
              str.push(obj.labels[i])
              break;
            case '_':
              str.push(' ')
              break;
            default:
              str.push(', ' + obj.labels[i])
              break
          }
        }
        else {
          str.push(obj.labels[i]);
        }
      }
      str.push('</i>)');
      return str.join('');
    }
  },

  "en-verb": {
    info: "inflection template for most English verbs",
    default: {
      'canonical': "${head}",
      '3ps simple present': "${head}s",
      'past': "${head}ed",
      'present participle': "${head}ing"
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              switch (value) {
                default:
                  console.log(obj);
                  if (obj.canonical !== value) {

                  }
              }
              break;
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];

      str.push('<strong>' + obj.canonical + '</strong> Verb (<i>third-person singular simple present </i> <strong>' + obj['3ps simple present'] + '</strong>');
      str.push('<i>present participle </i><strong>' + obj['present participle'] + '</strong>');
      str.push('<i>simple past and past participle </i><strong>' + obj['past'] + '</strong>)');
      return str.join(', ');
    }
  },
  "en-adv": {
    info: "Use this template to show the headword line of an English adverb. It shows the headword in bold and its comparative and superlative inflections, if any.",
    default: {
      adverb: "${head}",
      comparative: ["more ${head}"],
      superlative: ["most ${head}"],
    },
    params: [
      {
        name: "sup",
        action: (value, index, obj) => {
          obj.superlative = [value];
        }
      },
      {
        name: "",
        action: (value, index, obj) => {
          if (index == 0) {
            obj.comparative = [];
            obj.superlative = [];
          }
          if (value == 'more') {
            return {
              comparative: "more ${head}",
              superlative: "most ${head}"
            };
          } else if (value == 'er') {
            if (tools.toSyllabicSpeech(obj.adverb) == 'cvc') {
              let letterToDouble = obj.adverb.slice(-1);
              return {
                comparative: obj.adverb + letterToDouble + 'er',
                superlative: obj.adverb + letterToDouble + 'est'
              }
            }
            else if (obj.adverb.slice(-1) == 'y') {
              return {
                comparative: obj.adverb.substring(0, obj.adverb.length - 1) + 'ier',
                superlative: obj.adverb.substring(0, obj.adverb.length - 1) + 'iest'
              }
            }
            return { comparative: "${head}er", superlative: "${head}est" }
          } else if (value.slice(-2) == 'er') {
            return {
              comparative: value,
              superlative: value.substring(0, value.length - 2) + 'est'
            }
          }
        }
      }
    ],
    humanize: obj => {

      let str = []
      str.push("<strong>" + obj.adverb + "</strong>");
      str.push("Adverb");
      let parenthesis = []

      parenthesis.push(obj.comparative.length > 0 ? '<i>comparative</i> ' + obj.comparative.map(x => '<strong>' + x + '</strong>').join(' <i>or</i> ') : '');
      parenthesis.push(obj.superlative.length > 0 ? '<i>superlative</i> ' + obj.superlative.map(x => '<strong>' + x + '</strong>').join(' <i>or</i> ') : '');
      parenthesis = parenthesis.filter(x => x).join(', ');
      str.push(parenthesis ? '(' + parenthesis + ')' : '(<i>not comparable)</i>');
      return str.filter(x => x).join(' ');
    }
  },
  "en-adj": {
    info: "Use this template to show the headword line of an English adjective. It shows the headword in bold and its comparative and superlative inflections, if any.",
    default: {
      adjective: "${head}",
      comparative: ["more ${head}"],
      superlative: ["most ${head}"],
    },
    params: [
      {
        name: "sup",
        action: (value, index, obj) => {
          obj.superlative = [value];
        }
      },
      {
        name: "",
        action: (value, index, obj) => {
          if (index == 0) {
            obj.comparative = [];
            obj.superlative = [];
          }
          if (value == 'more') {
            return {
              comparative: "more ${head}",
              superlative: "most ${head}"
            };
          } else if (value == 'er') {
            if (tools.toSyllabicSpeech(obj.adjective) == 'cvc') {
              let letterToDouble = obj.adjective.slice(-1);
              return {
                comparative: obj.adjective + letterToDouble + 'er',
                superlative: obj.adjective + letterToDouble + 'est'
              }
            }
            else if (obj.adjective.slice(-1) == 'y') {
              return {
                comparative: obj.adjective.substring(0, obj.adjective.length - 1) + 'ier',
                superlative: obj.adjective.substring(0, obj.adjective.length - 1) + 'iest'
              }
            }
            return { comparative: "${head}er", superlative: "${head}est" }
          } else if (value.slice(-2) == 'er') {
            return {
              comparative: value,
              superlative: value.substring(0, value.length - 2) + 'est'
            }
          }
        }
      }
    ],
    humanize: obj => {
      let str = []
      str.push("<strong>" + obj.adjective + "</strong>");
      str.push("Adjective");
      let parenthesis = []

      parenthesis.push(obj.comparative.length > 0 ? '<i>comparative</i> ' + obj.comparative.map(x => '<strong>' + x + '</strong>').join(' <i>or</i> ') : '');
      parenthesis.push(obj.superlative.length > 0 ? '<i>superlative</i> ' + obj.superlative.map(x => '<strong>' + x + '</strong>').join(' <i>or</i> ') : '');
      parenthesis = parenthesis.filter(x => x).join(', ');
      str.push(parenthesis ? '(' + parenthesis + ')' : '(<i>not comparable)</i>');
      return str.filter(x => x).join(' ');
    }
  },
  "en-noun": {
    info: "inflection template for most English nouns",
    default: {
      singular: "${head}",
      plural: ["${head}s"],
      properties: ["countable"],
      infos: []
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          switch (value) {
            case "s":
              return { plural: "${head}s" };
            case "es":
              return { plural: "${head}es" };
            case "-":
              return { plural: [], properties: "uncountable" };
            case "~":
              return { properties: ["countable", "uncountable"] };
            case "!":
              return { infos: "plural not attested" };
            case "?":
              return { infos: "unknown or uncertain plural" };
            default:
              return { plural: value };
          }
        }
      },
      {
        name: "head",
        action: value => {
          return { singular: value };
        }
      }
    ],
    humanize: obj => {
      let str = [];

      str.push("<strong>" + obj.singular + "</strong> ");
      str.push("Noun (");
      str.push("<i>");
      str.push(obj.properties.join(" and "));
      str.push("</i>");
      if (obj.properties.length > 0) str.push("; ");
      str.push(
        "<i>plural </i>" +
        obj.plural.map(x => '<a href="#">' + x + "</a>").join(" or ")
      );
      str.push(")");
      str = str.filter(x => x);
      return str.join("");
    }
  }
};
