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
          cursor++;
      }
    }

    return { templates, parsed: str };
  }
  manageTemplate(str) {
    let template = {};
    let parsed = "";
    let params = str.split("|");
    let templateName = params[0];
    console.log(templateName);
    let wt = wikiTemplates[templateName];
    if (wt !== undefined) {
      for (let i = 1; i < params.length; i++) {
        let pair = params[i].split("="),
          paramName,
          value;
        if (pair.length == 2) {
          paramName = pair[0];
          value = pair[1];
        } else {
          paramName = "";
          value = pair[0];
        }
        let param = wt.params.filter(x => x.name == paramName)[0] || undefined;
        if (param) {
          let object = param.action(value);
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
    console.log(str);
    if (Array.isArray(str)) {
      str = str.map(x => this.parseParameter(x));
    } else {
      str = str.replace("${head}", this.head);
    }
    return str;
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
}
export default WikiParser;
