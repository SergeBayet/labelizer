export const alias = {
  'label': 'lb',
  'lbl': 'lb',
  'syn': 'synonyms',
  'ant': 'antonyms',
  'quote-text': 'quote-book'
}
export const wikiTemplates = {
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
        action: (value, index) => {
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
      console.log(obj);
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
