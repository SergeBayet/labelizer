import wikiTemplates from "./wikitemplates";

class WikiParser {
  constructor(head = "") {
    this.head = head;
    this.orderedList = 0;
    this.depthList = 0;
    this.context = "";
  }

  parse(str) {
    let obj = {};

    let ret = this.getTemplates(str);
    ret.parsed = this.wikiFormat(ret.parsed);
    return ret.parsed;
  }
  wikiFormat(str) {
    str = str.replace(/'''''(.+?)'''''/gm, "<i><strong>$1</strong></i>");
    str = str.replace(/'''(.+?)'''/gm, "<strong>$1</strong>");
    str = str.replace(/''(.+?)''/gm, "<i>$1</i>");
    str = str.replace(/(^[#\*:]+)(.*)/gm, (matched, symbols, original) => {
      let depth = symbols.length - 1;
      original = original.replace(/^: (.*)/gm);
      return "<div style='padding-left:" + depth + "em'>" + original + "</div>";
    });

    return str;
  }
  getTemplates(str) {
    let cursor = 0;
    let lastAnchor = null;
    let type = null;
    let templates = [];
    while (cursor < str.length - 1) {
      let anchor = str.substring(cursor, cursor + 2);

      switch (anchor) {
        case "{{":
          type = "accolade";
          cursor += 2;
          lastAnchor = cursor;
          break;
        case "}}":
          if (type == "accolade" && lastAnchor !== null) {
            let inside = this.manageTemplate(str.substring(lastAnchor, cursor));
            //console.log(inside);
            templates.push(inside.template);
            str =
              str.substring(0, lastAnchor - 2) +
              inside.parsed +
              str.substring(cursor + 2);

            lastAnchor = null;
            type = null;
            cursor = 0;
          } else {
            return { templates, parsed: str };
          }

          break;
        case "[[":
          type = "bracket";
          cursor += 2;
          lastAnchor = cursor;
          break;
        case "]]":
          if (type == "bracket" && lastAnchor !== null) {
            let blend = str.substr(cursor + 2).replace(/^(\w*).*/gm, "$1");
            let inside = this.manageLink(
              str.substring(lastAnchor, cursor),
              blend
            );
            templates.push(inside);
            str =
              str.substring(0, lastAnchor - 2) +
              inside +
              str.substring(cursor + 2 + blend.length);

            lastAnchor = null;
            type = null;
            cursor = 0;
          } else {
            return { templates, parsed: str };
          }
          break;
        default:
          switch (anchor.substring(0, 1)) {
            case '[':
              type = "simpleBracket";
              cursor += 2;
              lastAnchor = cursor;
              break;
            case ']':
              if (type == "simpleBracket") {
                let inside = this.manageSimpleLink(str.substring(lastAnchor - 1, cursor));
                console.log(inside);
                str =
                  str.substring(0, lastAnchor - 2) +
                  inside +
                  str.substring(cursor + 1);
                lastAnchor = null;
                type = null;
                cursor = 0;
              }
              break;
            default:
              cursor++;
          }

      }
    }

    return { templates, parsed: str };
  }
  manageTemplate(str) {
    let template = {};
    let parsed = "";
    let params = str.split("|").map(x => x.trim());
    let templateName = params[0];
    let wt = wikiTemplates[templateName];
    if (wt !== undefined) {
      let index = -1;
      for (let i = 1; i < params.length; i++) {
        let pair = params[i].split(/=(.+)/).filter(x => x),
          paramName,
          value;
        if (pair.length == 2) {
          paramName = pair[0];
          value = pair[1];
        } else {
          paramName = "";
          value = pair[0];
          index++;
        }
        let param = wt.params.filter(x => x.name == paramName)[0] || undefined;
        if (param) {
          let object = param.action(value, index);
          for (let key in object) {
            if (Array.isArray(wt.default[key])) {
              if (template.hasOwnProperty(key)) {
                template[key] = Array.isArray(object[key])
                  ? [...template[key], ...object[key]]
                  : [...template[key], object[key]];
              } else {
                template[key] = Array.isArray(object[key])
                  ? [...object[key]]
                  : [object[key]];
              }
            } else {
              template[key] = object[key];
            }
          }
        }
        else if (paramName !== '') {
          template[paramName] = value;
        }
      }
      if (wt.default !== undefined) {
        for (let key in wt.default) {
          if (!template.hasOwnProperty(key)) {
            template[key] = this.parseParameter(wt.default[key]);
          }
        }
      }
      for (let key in template) {
        template[key] = this.parseParameter(template[key]);
      }
      str = wt.humanize(template);
    }
    return { template: template, parsed: str };
  }
  parseParameter(str) {
    if (Array.isArray(str)) {
      str = str.map(x => this.parseParameter(x));
    } else {
      str = str.replace("${head}", this.head);
    }
    return str;
  }
  manageSimpleLink(str) {


    let pair = str.split(/ (.+)/).filter(x => x),
      url,
      display;
    if (this.isUrl(pair[0])) {
      url = pair[0];
      console.log('simple link : ' + url);
    }
    else {
      return '&#91;' + str + '&#93;';
    }
    if (pair.length == 2) {
      display = pair[1];
      return (
        '<a href="#" data-link="' +
        url +
        '">' +
        display +
        "</a>"
      );
    } else {
      return (
        '<a href="#" data-link="' +
        url +
        '">&#91;*&#93;</a>'
      );
    }
  }
  manageLink(str, blend = "") {
    let params = str.split("|");
    if (params.length == 1) {
      return (
        '<a href="#" data-link="' +
        params[0].replace(" ", "_") +
        '">' +
        params[0] +
        blend +
        "</a>"
      );
    } else if (params.length == 2) {
      if (params[1] == "") {
        let transform = params[0].replace(/^(\w*:)?([^\()]*)(\(.*\))?/gm, "$2");

        return (
          '<a href="#" data-link="' +
          params[0].replace(" ", "_") +
          '">' +
          transform +
          blend +
          "</a>"
        );
      } else {
        return (
          '<a href="#" data-link="' +
          params[0].replace(" ", "_") +
          '">' +
          params[1] +
          blend +
          "</a>"
        );
      }
    }
    return str;
  }
  isUrl(str) {
    return /(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/img.test(str);
  }
}
export default WikiParser;
