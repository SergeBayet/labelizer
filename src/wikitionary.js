import WikiParser from "./wikiparser";

class Wiktionary {
  constructor(word, langDestination = "French") {
    this.lang = langDestination;
    this.word = word;
  }
  getPage(word) {
    return new Promise(resolve => {
      var myHeaders = new Headers();
      word = encodeURIComponent(word);
      myHeaders.append("Content-Type", "application/json");
      fetch(
        `https://en.wiktionary.org/w/api.php?action=query&titles=${word}&rvslots=main&prop=revisions&rvprop=content&format=json&origin=*`,

        { headers: myHeaders }
      )
        .then(response => response.json())
        .then(json => {
          if (json.error) {
          } else {
            let page = this.getNestedObject(json, "*");
            resolve(page);
          }
        });
    });
  }
  getNestedObject(obj, prop) {
    for (let el in obj) {
      if (el == prop) {
        return obj[el];
      }
      if (typeof obj[el] == "object") {
        return this.getNestedObject(obj[el], prop);
      }
    }
    return false;
  }

  async getInfos() {
    let page = await this.getPage(this.word);
    const rPos = /^=+([^=]*)=+$/;
    let lines = page.split("\n");
    let stack = [];
    let object = {};
    let currentSection = "";
    let currentDepth = -1;
    let cursor;
    lines.forEach(element => {
      if (rPos.test(element)) {
        let depth = element.replace(/(^=+).*/, "$1").length - 2;

        currentSection = element.replace(rPos, "$1");
        if (depth > currentDepth) {
          stack.push(currentSection);
        } else if (depth < currentDepth) {
          for (let i = 0; i <= currentDepth - depth; i++) {
            stack.pop();
          }
          stack.push(currentSection);
        } else {
          stack.pop();
          stack.push(currentSection);
        }
        cursor = object;
        for (let i = 0; i < stack.length; i++) {
          if (cursor[stack[i]] === undefined) {
            cursor[stack[i]] = { content: [] };
          }
          cursor = cursor[stack[i]];
        }
        currentDepth = depth;
      } else {
        if (currentSection !== "" && element !== "") {
          cursor.content.push(element);
        }
      }
    });

    return object;
  }
  getDefinition(wikiObject) {
    const pos = ["Noun", "Adjective", "Verb"];
    let ret = [];

    pos.forEach(p => {
      if (wikiObject[this.lang].hasOwnProperty(p)) {
        ret.push(wikiObject[this.lang][p].content);
      }
    });

    // ret = [
    //   [
    //     "San Francisco also has [[public transport]]ation. Examples include [[bus]]es, [[taxicab]]s, and [[tram]]s.",
    //     "[[kingdom (biology)|]]",
    //     "[[Wikipedia:Village pump|]]",
    //     "[[Wikipedia:Manual of Style (headings)|]]"
    //   ]
    // ];
    let wp = new WikiParser(this.word);
    for (let i = 0; i < ret.length; i++) {
      ret[i] = ret[i].map(el => wp.parse(el));
    }

    console.log(ret);
    return ret;
  }
}
export default Wiktionary;
