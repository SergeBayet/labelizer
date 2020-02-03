import langCodes from './wikidata/langageCodes';
import accents from './wikidata/accentLabels';
import forms from './wikidata/formof';

const MD5 = function (d) { let result = M(V(Y(X(d), 8 * d.length))); return result.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ };
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
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

}
export const alias = {
  'der2': 'der',
  'der3': 'der',
  'der4': 'der',
  'der5': 'der',
  'col2': 'der',
  'col3': 'der',
  'col4': 'der',
  'col5': 'der',
  'rel2': 'der',
  'rel3': 'der',
  'rel4': 'der',
  'rel5': 'der',
  'rel-top2': 'rel-top',
  'rel-mid2': 'rel-mid',
  'rel-top3': 'rel-top',
  'rel-mid3': 'rel-mid',
  'top3': 'top2',
  'top4': 'top2',
  'mid3': 'mid2',
  'mid4': 'mid4',
  'en-proper-noun': 'en-proper noun',
  'a': 'accent',
  'label': 'lb',
  'lbl': 'lb',
  'syn': 'synonyms',
  'ant': 'antonyms',
  'quote-text': 'quote-book',
  'en-adjective': 'en-adj',
  'en-adj-more': 'en-adj',
  'quote': 'ux',
  't+': 't',
  't-check': 't',
  't+check': 't',
  't-needed': 't',
  'ttbc': 't',
  'q': 'qualifier',
  'inh': 'inherited',
  'der': 'derived',
  'm': 'mention',
  'bor': 'borrowed',
  'suf': 'suffix',
  'cog': 'cognate',
  'etyl': 'etymology language',
  'l': 'link',
  's': 'sense'
}
export const wikiTemplates = {
  "audio": {
    info: "Audio file",
    default: {
      language: '',
      file: '',
      text: ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value }
            case 1:
              return { file: value }
            case 2:
              return { text: value }
          }
        }
      },
      {
        name: "clip",
        action: value => ({ file: value })
      },
      {
        name: "context",
        action: value => ({ text: value })
      }
    ],
    humanize: obj => {
      let url = 'https://upload.wikimedia.org/wikipedia/commons/';
      let file = encodeURIComponent(tools.ucfirst(obj.file.replace(/ /g, '_')));
      let hash = MD5(file).substring(0, 2);
      hash = hash.substring(0, 1) + "/" + hash + "/";
      url += hash + file;
      let type = url.slice(-3);
      type = type == 'mp3' ? 'mpeg' : type;
      console.log(file);
      return ` <audio controls><source src="${url}" type="audio/${type}">Your browser does not support the audio element.</audio> `;
    }
  },
  "image": {
    info: "Template image",
    default: {
      file: '',
      format: 'borderless',
      width: '200',
      height: '',
      horizontalAlignement: 'left',
      caption: ""
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          if (index == 0) {
            let url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/';
            let file = value.substring(value.indexOf(':') + 1).replace(/ /g, '_');
            let hash = MD5(file).substring(0, 2);
            hash = hash.substring(0, 1) + "/" + hash + "/";
            return { file: url + hash + file + "/{size}-" + file }
          }
          switch (value) {
            case 'thumb':
              return { format: 'thumb', width: '200', horizontalAlignement: 'right' }
            case 'frame':
              return { format: 'frame' }
            case 'left':
            case 'right':
            case 'center':
            case 'none':
              return { horizontalAlignement: value }
            default:
              const regex = /^((\d*)x)?(\d*)px/;
              let m;
              if ((m = regex.exec(value)) !== null) {
                let height = m[2] ? m[3] : '';
                let width = m[2] ? m[2] : m[3];
                return { width: width, height: height }
              }
              else {
                return { caption: value };
              }
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      let src = obj.file.replace('{size}', obj.width + "px");
      str.push(`<img style="float:${obj.horizontalAlignement}" src="${src}"/>`);
      return str.join('');
    }
  },
  "glossary": {
    info: "This template provides a shorter way to link to the definitions of terms in Appendix:Glossary. ",
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
      return `<a href="#" data-link="${obj.term}">${obj.term}</a>`;
    }
  },
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
      head: "${head}",
      inflections: []
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
            default:
              return { inflections: value }
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
      let str = [];
      str.push('<strong>' + obj.head + '</strong> ' + tools.ucfirst(obj.pos));
      let parenthesis = [];
      for (let i = 0; i < obj.inflections.length; i += 2) {
        let added = '';
        if (obj.inflections[i + 1]) {
          added = ` <a href="#" data-link="${obj.inflections[i + 1]}">${obj.inflections[i + 1]}</a>`;
        }
        parenthesis.push(`<i>${obj.inflections[i]}</i>` + added);
      }
      str.push(parenthesis.length > 0 ? ' (' + parenthesis.join(', ') + ')' : '');
      return str.join('');
    }
  },
  "vern": {
    info: "This categorizes terms in Category:Entries missing English vernacular names of taxa. ",
    default: {
      term: '',
      plural: '',
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          switch (index) {
            case 0:
              return { term: value };
            case 1:
              return { plural: value };
          }
        }
      },
      {
        name: "pl",
        action: (value, index, obj) => {
          return { plural: obj.term + value }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push(`<a href="#" data-link="${obj.term}">${obj.term}</a>`);
      if (obj.plural !== '') {
        str.push(`(<i>plural</i> <a href="#" data-link="${obj.plural}">${obj.plural}</a>)`)
      }
      return str.join(' ');
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
      return '(<i>' + obj.qualifier.join(', ') + '</i>)';
    }
  },
  "sense": {
    info: "This template is used to specify a sense qualifier (a gloss) for a usage note, synonym, antonym or other -onym.",
    default: {
      sense: ''
    },
    params: [
      {
        name: "",
        action: value => {
          return ({ sense: value });
        }
      }
    ],
    humanize: obj => {
      return '(<i>' + obj.sense + '</i>): ';
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
  "quote-song": {
    info: "This template can be used in a dictionary entry to provide a quotation of lyrics from a song.",
    default: {
      '1': "",
      year: "",
      author: "",
      title: "",
      album: "",
      url: "",
      text: "",
      translation: ""
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { '1': value };
            case 1:
              return { year: value };
            case 2:
              return { author: value };
            case 3:
              return { title: value };
            case 4:
              return { album: value };
            case 5:
              return { url: value };
            case 6:
              return { text: value };
            case 7:
              return { translation: value };
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      if (obj.passage !== '') obj.text = obj.passage;
      str.push(obj.year ? '<strong>' + obj.year + '</strong>' : '');
      str.push(obj.author);
      str.push(obj.title ? '“' + obj.title + '”' : '');
      str.push(obj.album ? 'in <i>' + obj.album + '</i>' : '');
      str.push(obj.artist ? 'performed by ' + obj.artist : '');
      str.push(obj.note);
      str = str.filter(x => x);
      str[str.length - 1] += obj.text !== '' ? ': ' + '<dl><dd>' + obj.text + '</dd></dl>' : '';
      return str.filter(x => x).join(', ');
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
              str.push(' ' + obj.labels[i])
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
  "en-pron": {
    info: "Use this template on inflection lines for English pronouns. ",
    default: {
      'pron': '${head}',
      'desc': '',
      'info': []
    },
    params: [
      {
        name: "desc",
        action: value => ({ desc: value })
      },
      {
        name: "",
        action: (value, index, obj) => {
          return { info: value }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push('<strong>' + obj.pron + '</strong> Pronoun');
      str.push(obj.desc ? '<i>' + obj.desc + '</i>' : '');
      let parenthesis = [];
      for (let i = 0; i < obj.info.length - 1; i += 2) {
        parenthesis.push(`<i>${obj.info[i]}</i> <a href="#" data-link="${obj.info[i + 1]}">${obj.info[i + 1]}</a>`);
      }
      str.push(parenthesis.length > 0 ? '(' + parenthesis.join(', ') + ')' : '');
      return str.join(' ');
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
  },
  "en-proper noun": {
    info: "Use this template to show the inflection line of an English proper noun",
    default: {
      singular: "${head}",
      plural: [],
      properties: [],
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
      str.push("Proper Noun (");
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
  },
  "given name": {
    info: "This template is used in definitions for given names. ",
    default: {
      language: '',
      gender: '',
      or: '',
      from: '',
      fromt: '',
      fromalt: '',
      fromtr: '',
      frompos: '',
      fromlit: '',
      fromid: '',
      usage: '',
      meaning: '',
      dim: '',
      dimalt: '',
      dimtr: '',
      eq: '',
      eqalt: '',
      eqtr: '',
      xlit: '',
      xlitalt: '',
      var: '',
      varalt: '',
      vartr: '',
      m: '',
      malt: '',
      mtr: '',
      f: '',
      falt: '',
      ftr: '',
      A: ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { gender: value };
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push(`A ${obj.gender} given name`);
      str.push(obj.or ? 'or ' + obj.or : '');
      if (obj.from == 'surnames') {
        str.push('transferred from the surname')
      }
      else {
        str.push('from ' + obj.from);
      }
      return str.join(' ');
    }
  },
  "+obj": {
    info: "use with object",
    default: {
      lang: "en"
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          if (index == 0) {
            return { lang: value }
          }
        }
      }
    ],
    humanize: obj => {
      return '[+object]';
    }
  },
  "+preo": {
    info: "use with x + object",
    default: {
      lang: "en",
      expr: ""
    },
    params: [
      {
        name: "",
        action: (value, index) => {
          if (index == 0) {
            return { lang: value }
          }
          else {
            return { expr: value }
          }
        }
      }
    ],
    humanize: obj => {
      return `[+ <i><a href="#" data-link="${obj.expr}">${obj.expr}</a></i> object]`;
    }
  },
  "t": {
    info: "Translation information template",
    default: {
      'lang': '',
      'translation': '',
      'categories': [],
      'script': '',
      'transliteration': '',
      'alternateForm': '',
      'literal': '',
      'id': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { lang: value };
            case 1:
              return { translation: value };
            default:
              return { categories: value };
          }
        }
      },
      {
        name: "sc",
        action: value => { return { script: value } }
      },
      {
        name: "tr",
        action: value => { return { transliteration: value } }
      },
      {
        name: "alt",
        action: value => { return { alternateForm: value } }
      },
      {
        name: "lit",
        action: value => { return { literal: value } }
      },
      {
        name: "id",
        action: value => { return { id: value } }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push(`<a href="#" data-link="${obj.translation}">${obj.translation}</a>`);
      str.push([...obj.categories].join(', '));
      let parenthesis = [];
      parenthesis.push(obj.transliteration ? obj.transliteration : '');
      parenthesis.push(obj.literal ? obj.literal : '');
      parenthesis = parenthesis.filter(x => x).join(', ');
      str.push(parenthesis ? '(' + parenthesis + ')' : '')
      return str.filter(x => x).join(' ');
    }
  },
  "trans-mid": {
    info: "Separator of translation section",
    default: {},
    params: [],
    humanize: obj => ''
  },
  "trans-bottom": {
    info: "End of translation section",
    default: {},
    params: [],
    humanize: obj => ''
  },
  "checktrans-top": {
    info: "Translations to check",
    default: {},
    params: [],
    humanize: obj => '<strong>Translations to be checked</strong>'
  },
  "trans-top": {
    info: "Use this template to display a “Translations” section",
    default: {
      gloss: "",
      id: '',
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { gloss: value }
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push(obj.gloss ? '<strong>' + obj.gloss + '</strong>' : '');
      return str.join('');
    }
  },
  "der-top": {
    info: "Use this template to display a “Derived terms” section",
    default: {
      gloss: ""
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { gloss: value }
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push(obj.gloss ? '<strong>' + obj.gloss + '</strong>' : '<strong>Derived terms for ${head}</strong>');
      return str.join('');
    }
  },
  "top2": {
    info: "Top of section",
    default: {},
    params: [],
    humanize: obj => ''
  },
  "mid2": {
    info: "Separator of section",
    default: {},
    params: [],
    humanize: obj => ''
  },
  "bottom": {
    info: "End of section",
    default: {},
    params: [],
    humanize: obj => ''
  },
  "der-mid": {
    info: "Separator of derived terms section",
    default: {},
    params: [],
    humanize: obj => ''
  },
  "der-bottom": {
    info: "End of derived terms section",
    default: {},
    params: [],
    humanize: obj => ''
  },
  "rel-top": {
    info: "Use this template to display a “Related terms” section",
    default: {
      gloss: ""
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { gloss: value }
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push(obj.gloss ? '<strong>' + obj.gloss + '</strong>' : '');
      return str.join('');
    }
  },
  "rel-mid": {
    info: "Separator of related terms section",
    default: {},
    params: [],
    humanize: obj => ''
  },
  "rel-bottom": {
    info: "End of related terms section",
    default: {},
    params: [],
    humanize: obj => ''
  },
  "der": {
    info: "List of derived terms",
    default: {
      language: '',
      terms: [],
      title: '',
      sort: ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            default:
              return { terms: value };
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push(obj.title !== '' ? '<strong>' + obj.title + '</strong>' : '');
      obj.terms.sort((a, b) => a > b).map(el => {
        str.push(`<a href="#" data-link="${el}">${el}</a>`);
      })
      return str.join('<br/>');
    }
  },
  "inherited": {
    info: "This template is intended for terms that have an unbroken chain of inheritance from the source term in question.",
    default: {
      'language': '',
      'languageFrom': '',
      'term': '',
      'alternativeDisplay': '',
      'gloss': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { languageFrom: value };
            case 2:
              return { term: value };
            case 3:
              return { alternativeDisplay: value };
            case 4:
              return { gloss: value };

          }
        }
      },
      {
        name: "t",
        action: value => ({ gloss: value })
      }
    ],
    humanize: obj => {
      let str = [];
      let language = langCodes.filter(x => x.includes(obj.languageFrom))[0] || [];

      if (language.length > 0) {
        console.log(language);
        str.push(language[2]);
      }
      str.push(obj.term ? `<a href="#" data-link="${obj.term}"><i>${obj.term}</i></a>` : '');
      str.push(obj.gloss ? `(“${obj.gloss}”)` : '');
      return str.filter(x => x).join(' ')
    }
  },
  "borrowed": {
    info: "This template is used to format the etymology of borrowings and loanwords",
    default: {
      'language': '',
      'languageFrom': '',
      'term': '',
      'alternativeDisplay': '',
      'gloss': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { languageFrom: value };
            case 2:
              return { term: value };
            case 3:
              return { alternativeDisplay: value };
            case 4:
              return { gloss: value };

          }
        }
      },
      {
        name: "t",
        action: value => ({ gloss: value })
      }
    ],
    humanize: obj => {
      let str = [];
      let language = langCodes.filter(x => x.includes(obj.languageFrom))[0] || [];

      if (language.length > 0) {
        console.log(language);
        str.push(language[2]);
      }
      str.push(obj.term ? `<a href="#" data-link="${obj.term}"><i>${obj.term}</i></a>` : '');
      str.push(obj.gloss ? `(“${obj.gloss}”)` : '');
      return str.filter(x => x).join(' ')
    }
  },
  "inherited": {
    info: "This template is intended for terms that have an unbroken chain of inheritance from the source term in question.",
    default: {
      'language': '',
      'languageFrom': '',
      'term': '',
      'alternativeDisplay': '',
      'gloss': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { languageFrom: value };
            case 2:
              return { term: value };
            case 3:
              return { alternativeDisplay: value };
            case 4:
              return { gloss: value };

          }
        }
      },
      {
        name: "t",
        action: value => ({ gloss: value })
      }
    ],
    humanize: obj => {
      let str = [];
      let language = langCodes.filter(x => x.includes(obj.languageFrom))[0] || [];

      if (language.length > 0) {
        console.log(language);
        str.push(language[2]);
      }
      str.push(obj.term ? `<a href="#" data-link="${obj.term}"><i>${obj.term}</i></a>` : '');
      str.push(obj.gloss ? `(“${obj.gloss}”)` : '');
      return str.filter(x => x).join(' ')
    }
  },
  "cognate": {
    info: "This template is used to indicate cognacy with terms in other languages that are not ancestors of the given term (hence none of {{inherited}}, {{borrowed}}, and {{derived}} are applicable).",
    default: {
      'languageFrom': '',
      'term': '',
      'alternativeDisplay': '',
      'gloss': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { languageFrom: value };
            case 1:
              return { term: value };
            case 2:
              return { alternativeDisplay: value };
            case 3:
              return { gloss: value };

          }
        }
      },
      {
        name: "t",
        action: value => ({ gloss: value })
      }
    ],
    humanize: obj => {
      let str = [];
      let language = langCodes.filter(x => x.includes(obj.languageFrom))[0] || [];

      if (language.length > 0) {
        str.push(language[2]);
      }
      str.push(obj.term ? `<a href="#" data-link="${obj.term}"><i>${obj.term}</i></a>` : '');
      str.push(obj.gloss ? `(“${obj.gloss}”)` : '');
      return str.filter(x => x).join(' ')
    }
  },
  "mention": {
    info: "This template is used to format the etymology of terms derived from another language.",
    default: {
      'language': '',
      'pageName': '',
      'alternateText': '',
      'gloss': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { pageName: value, alternateText: value };
            case 2:
              return { alternateText: value };
            case 3:
              return { gloss: value };

          }
        }
      },
      {
        name: "t",
        action: value => ({ gloss: value })
      }
    ],
    humanize: obj => {
      let str = [];

      str.push(obj.alternateText ? `<a href="#" data-link="${obj.pageName}"><i>${obj.alternateText}</i></a>` : '');
      str.push(obj.gloss ? `(“${obj.gloss}”)` : '');
      return str.filter(x => x).join(' ')
    }
  },
  "link": {
    info: "Use this template outside running text, in sections that list entries, such as “Synonyms”, “Related terms” and “Descendants”.",
    default: {
      'language': '',
      'pageName': '',
      'alternateText': '',
      'gloss': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { pageName: value, alternateText: value };
            case 2:
              return { alternateText: value };
            case 3:
              return { gloss: value };

          }
        }
      },
      {
        name: "t",
        action: value => ({ gloss: value })
      }
    ],
    humanize: obj => {
      let str = [];

      str.push(obj.alternateText ? `<a href="#" data-link="${obj.pageName}">${obj.alternateText}</a>` : '');
      str.push(obj.gloss ? `(“${obj.gloss}”)` : '');
      return str.filter(x => x).join(' ')
    }
  },
  "derived": {
    info: "This template is used to format the etymology of terms derived from another language.",
    default: {
      'language': '',
      'languageFrom': '',
      'term': '',
      'alternativeDisplay': '',
      'gloss': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { languageFrom: value };
            case 2:
              return { term: value };
            case 3:
              return { alternativeDisplay: value };
            case 4:
              return { gloss: value };

          }
        }
      },
      {
        name: "t",
        action: value => ({ gloss: value })
      }
    ],
    humanize: obj => {
      let str = [];
      let language = langCodes.filter(x => x.includes(obj.languageFrom))[0] || [];

      if (language.length > 0) {
        console.log(language);
        str.push(language[2]);
      }
      str.push(obj.term ? `<a href="#" data-link="${obj.term}"><i>${obj.term}</i></a>` : '');
      str.push(obj.gloss ? `(“${obj.gloss}”)` : '');
      return str.filter(x => x).join(' ')
    }
  },
  "etymology language": {
    info: "This template should no longer be used directly in entries; it should be replaced by {{der}}, {{bor}}, {{inh}}, {{cog}} or {{noncog}}.",
    default: {
      'language': '',
      'languageFrom': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { languageFrom: value };
            case 1:
              return { language: value };
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      let language = langCodes.filter(x => x.includes(obj.languageFrom))[0] || [];

      if (language.length > 0) {
        str.push(language[2]);
      }

      return str.filter(x => x).join(' ')
    }
  },
  "PIE root": {
    info: "This template adds entries to a subcategory of Category:Terms derived from Proto-Indo-European roots. It should be placed at the top of the \"Etymology\" section, before the text. ",
    default: {
      language: '',
      roots: []
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            default:
              return { roots: value };
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push('Proto-Indo-European root : ');
      str.push(obj.roots.join(", "));
      return str.join('') + ". ";
    }
  },
  "prefix": {
    info: "This template is used in the etymology section",
    default: {
      language: '',
      root: '',
      prefix: ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { prefix: value };
            case 2:
              return { root: value };
          }
        }
      }
    ],
    humanize: obj => {
      return `<a href="#" data-link="${obj.prefix}"><i>${obj.prefix}-</i></a> + <a href="#" data-link="${obj.root}"><i>${obj.root}</i></a>`
    },

  },
  "affix": {
    info: "This template is used in the etymology section",
    default: {
      language: '',
      parts: []
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            default:
              return { parts: value };

          }
        }
      }
    ],
    humanize: obj => {

      return obj.parts.map(x => `<a href="#" data-link="${x}"><i>${x}</i></a>`).join(' + ');
    },

  },
  "suffix": {
    info: "This template is used in the etymology section",
    default: {
      language: '',
      root: '',
      suffix: ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { root: value };
            case 2:
              return { suffix: value };
          }
        }
      }
    ],
    humanize: obj => {
      return `<a href="#" data-link="${obj.root}"><i>${obj.root}</i></a> + <a href="#" data-link="${obj.suffix}"><i>${obj.suffix}</i></a>`
    },

  },
  "taxlink": {
    info: "This template categorizes entries with missing taxonomic names, so that the missing names can be added (if not spelling mistakes).",
    default: {
      taxon: '',
      level: '',
      alternativeDisplay: ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { taxon: value, alternativeDisplay: value };
            case 1:
              return { level: value };
            case 2:
              return { alternativeDisplay: value }
          }
        }
      }
    ],
    humanize: obj => {
      return `<a href="#" data-link="${obj.taxon}">${obj.alternativeDisplay}</a>`;
    }
  },
  "RQ": {
    info: "Quotation templates",
    default: {
      'uniform title': '',
      'book': '',
      'chapter': '',
      'page': '',
      'pages': '',
      'text': '',
      'para': '',
      'paras': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { 'uniform title': value };
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      if (obj.passage) obj.text = obj.passage;
      // To do : manage uniform titles
      str.push(obj['uniform title'] + ' : <dt><dd>' + obj.text + '</dd></dt>');
      return str.join('');
    }
  },
  "accent": {
    info: "Use this template to specify an accent qualifier for a pronunciation. ",
    default: {
      accents: []
    },
    params: [
      {
        name: "",
        action: value => {
          return { accents: value }
        }
      }
    ],
    humanize: obj => {
      console.log(obj);
      let str = [];
      for (let i = 0; i < obj.accents.length; i++) {
        if (accents.aliases[obj.accents[i]]) {
          obj.accents[i] = accents.labels[accents.aliases[obj.accents[i]]];
        }
        else {
          obj.accents[i] = accents.labels[obj.accents[i]] || obj.accents[i];
        }
        if (typeof obj.accents[i] == 'string') {
          str.push(`<i>${obj.accents[i]}</i>`)
        }
        else if (obj.accents[i].display) {
          str.push(`<a href="#" data-link="${obj.accents[i].link}"><i>${obj.accents[i].display}</i></a>`);
        }
        else {
          str.push(`<a href="#" data-link="${obj.accents[i].link}"><i>${obj.accents[i].link}</i></a>`);
        }
      }
      return '(' + str.join(', ') + ')';
    }
  },
  'IPA': {
    info: "This template adds the proper formatting and links to a pronunciation transcription in the International Phonetic Alphabet.",
    default: {
      'language': '',
      'transcriptions': []
    },
    params: [
      {
        name: '',
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value }
            default:
              return { transcriptions: value }
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push('IPA: ');
      str.push(obj.transcriptions.join(', '))
      return str.join('');
    }
  },
  'enPR': {
    info: "This template is for phonemic transcriptions in the Appendix:English pronunciation (enPR) system, for use in the pronunciation section of entries.",
    default: {
      'transcriptions': []
    },
    params: [
      {
        name: '',
        action: (value, index, obj) => {
          return { transcriptions: value }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      str.push('enPR: ');
      str.push(obj.transcriptions.join(', '))
      return str.join('');
    }
  },
  'inflection of': {
    info: "This template is used to create definition lines for inflected (non-lemma) forms of other terms.",
    default: {
      language: '',
      lemma: '',
      alternative: '',
      tags: [],
      gloss: '',
      transliteration: '',
      transcription: '',
      pos: ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { lemma: value };
            case 2:
              return { alternative: value };
            default:
              return { tags: value }
          }
        }
      }
    ],
    humanize: obj => {
      let str = [];
      let tags = [];
      obj.tags.forEach(el => {
        let short = forms.shortcuts[el];
        if (short) {

          if (Array.isArray(short)) {
            tags = [...tags, ...short];
          }
          else {
            let separated = short.split('//');
            if (separated.length > 1) {
              tags = [...tags, ...separated];
            }
            else {
              tags.push(short);
            }

          }
        }
        else if (forms.tags[el]) {
          tags.push(el);
        }
      })
      tags.forEach(el => {
        let short = forms.shortcuts[el];
        let tag;
        if (short) {
          tag = forms.tags[short];
          str.push(`<a href="#" data-link="${tag.glossary || short}">${short}</a>`)
        } else {
          tag = forms.tags[el];
          str.push(`<a href="#" data-link="${tag.glossary || el}">${el}</a>`)
        }
      })

      str.push(`<i>of </i><strong>${obj.lemma}</strong>`);
      return str.join(' ');
    }
  },
  'en-letter': {
    info: "This template should be added to all English letter entries. ",
    default: {
      'letter': '${head}',
      'upper': '',
      'lower': '',
      'mixed': ''
    },
    params: [],
    humanize: obj => {
      if (obj.letter == obj.upper) {
        return `<strong>${obj.letter}</strong> Letter (<i>upper case</i>, <i>lower case </i><a href="#" data-link="${obj.lower}">${obj.lower}</a>, <i>plural </i><a href="#" data-link="${obj.upper}'s">${obj.upper}'s</a>)`
      }
      else {
        return `<strong>${obj.letter}</strong> Letter (<i>lower case</i>, <i>upper case </i><a href="#" data-link="${obj.upper}">${obj.upper}</a>, <i>plural </i><a href="#" data-link="${obj.lower}'s">${obj.lower}'s</a>)`
      }
    }
  },
  'en-number': {
    info: "This template should be added to all English number entries. ",
    default: {
      'number': '${head}',
      'upper': '',
      'lower': '',
      'mixed': ''
    },
    params: [],
    humanize: obj => {
      if (obj.letter == obj.upper) {
        return `<strong>${obj.number}</strong> Numeral (<i>upper case</i> <i>lower case </i><a href="#" data-link="${obj.lower}">${obj.lower}</a>)`
      }
      else {
        return `<strong>${obj.number}</strong> Numeral (<i>lower case</i> <i>upper case </i><a href="#" data-link="${obj.upper}">${obj.upper}</a>)`
      }
    }
  },
  'en-prep': {
    info: "Preposition template",
    default: {
      prep: '${head}'
    },
    params: [],
    humanize: obj => {
      return `<strong>${obj.prep}</strong> Preposition`;
    }
  },
  'en-con': {
    info: "Conjunction template",
    default: {
      conj: '${head}'
    },
    params: [],
    humanize: obj => {
      return `<strong>${obj.conj}</strong> Conjunction`;
    }
  },
  'form of': {
    info: "This template creates a definition line for the form of a primary entry",
    default: {
      'displayed': '',
      'language': '',
      'term': '',
      'alt': '',
      'gloss': ''
    },
    params: [
      {
        name: "",
        action: (value, index, obj) => {
          switch (index) {
            case 0:
              return { language: value };
            case 1:
              return { term: value };
            case 2:
              return { alt: value };
            case 3:
              return { gloss: value };
          }
        }
      },
      {
        name: "t",
        action: value => ({ gloss: value })
      }
    ],
    humanize: obj => {
      let str = [];
      str.push('<i>' + obj.displayed + '</i>');
      str.push(`<a href="#" data-link="${obj.term}">${obj.alt !== '' ? obj.alt : obj.term}</a>`)
      str.push(obj.gloss ? `(${obj.gloss})` : '');
      return str.join(' ');
    }
  },
  "present participle of": {
    subTemplate: { template: "form of", displayed: "present participle of" }
  },
  "active participle of": {
    subTemplate: { template: "form of", displayed: "active participle of" }
  },
  "feminine plural past participle of": {
    subTemplate: { template: "form of", displayed: "feminine plural past participle of" }
  },
  "feminine singular past participle of": {
    subTemplate: { template: "form of", displayed: "feminine singular past participle of" }
  },
  "futur participle of": {
    subTemplate: { template: "form of", displayed: "futur participle of" }
  },
  "gerund of": {
    subTemplate: { template: "form of", displayed: "gerund of" }
  },
  "imperative of": {
    subTemplate: { template: "form of", displayed: "imperative of" }
  },
  "masculine plural past participle of": {
    subTemplate: { template: "form of", displayed: "masculine plural past participle of" }
  },
  "neuter singular past participle of": {
    subTemplate: { template: "form of", displayed: "neuter singular past participle of" }
  },
  "participle of": {
    subTemplate: { template: "form of", displayed: "participle of" }
  },
  "passive of": {
    subTemplate: { template: "form of", displayed: "passive of" }
  },
  "passive participle of": {
    subTemplate: { template: "form of", displayed: "passive participle of" }
  },
  "passive past tense of": {
    subTemplate: { template: "form of", displayed: "passive past tense of" }
  },
  "past active participle of": {
    subTemplate: { template: "form of", displayed: "past active participle of" }
  },
  "past participle of": {
    subTemplate: { template: "form of", displayed: "past participle of" }
  },
  "past passive participle of": {
    subTemplate: { template: "form of", displayed: "past passive participle of" }
  },
  "past tense of": {
    subTemplate: { template: "form of", displayed: "past tense of" }
  },
  "perfect participle of": {
    subTemplate: { template: "form of", displayed: "perfect participle of" }
  },
  "present active participle of": {
    subTemplate: { template: "form of", displayed: "present active participle of" }
  },
  "present tense of": {
    subTemplate: { template: "form of", displayed: "present tense of" }
  },
  "reflexive of": {
    subTemplate: { template: "form of", displayed: "reflexive of" }
  },
  "supine of": {
    subTemplate: { template: "form of", displayed: "supine of" }
  },
  "verbal noun of": {
    subTemplate: { template: "form of", displayed: "verbal noun of" }
  },
};
