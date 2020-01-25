class WikiParser {
  constructor(head = "") {
    this.head = head;
  }

  parse(str) {
    let obj = {};
    let ret = this.getTemplates(str);
    console.log(ret);
    ret.parsed = this.wikiFormat(ret.parsed);
    return ret.parsed;
  }
  wikiFormat(str) {
    str = str.replace(/'''''([^'{5}]*)'''''/gm, "<i><strong>$1</strong></i>");
    str = str.replace(/'''([^'{3}]*)'''/gm, "<strong>$1</strong>");
    str = str.replace(/''([^'{2}]*)''/gm, "<i>$1</i>");
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
            templates.push(inside);
            str =
              str.substring(0, lastAnchor - 2) +
              inside +
              str.substring(cursor + 2);

            lastAnchor = null;
            type = null;
            cursor = 0;
          } else {
            return str;
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
            return str;
          }
          break;
        default:
          cursor++;
      }
    }

    return { templates, parsed: str };
  }
  manageTemplate(str) {
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
