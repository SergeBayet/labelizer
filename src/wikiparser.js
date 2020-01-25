class WikiParser {
  constructor(head = "") {
    this.head = head;
  }

  parse(str) {
    let obj = {};
    let ret = this.getTemplates(str);
    console.log(ret);
    return ret;
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
            let inside = this.manageLink(str.substring(lastAnchor, cursor));
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
        default:
          cursor++;
      }
    }
    console.log(str);
    return str;
  }
  manageTemplate(str) {
    return str;
  }
  manageLink(str) {
    let params = str.split("|");
    if (params.length == 1) {
      return (
        '<span data-link="' +
        params[0].replace(" ", "_") +
        '">' +
        params[0] +
        "</span>"
      );
    } else if (params.length == 2) {
      return (
        '<span data-link="' +
        params[0].replace(" ", "_") +
        '">' +
        params[1] +
        "</span>"
      );
    }
    return str;
  }
}
export default WikiParser;
