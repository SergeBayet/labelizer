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
    //console.log(obj);
    for (let el in obj) {

      if (el === prop) {
        return obj[el];
      }
      if (typeof obj[el] === "object") {

        let res = this.getNestedObject(obj[el], prop);
        if (res !== false) return res;
      }
    }
    return false;
  }

  async getInfos() {
    let page = await this.getPage(this.word);

    const rPos = /^=+([^=]*)=+$/;
    let lines = page.split("\n");

    let count = 0;
    let newLines = [];
    while (count < lines.length) {
      if (/^[\w\|]/.test(lines[count]) && !rPos.test(lines[count - 1])) {
        newLines[newLines.length - 1] += lines[count];
      } else {
        newLines.push(lines[count]);
      }
      count++;
    }
    lines = newLines;

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
  getNestedObjects(obj, properties, data = []) {
    for (let el in obj) {

      if (properties.includes(el)) {
        data.push(obj[el]);
      }
      if (typeof obj[el] === 'object') {
        this.getNestedObjects(obj[el], properties, data);
      }
    }
    return data;
  }
  getDefinition(wikiObject) {
    const pos = ["Noun", "Adjective", "Verb", "Adverb", "Proper noun", "Conjunction"];
    console.log(wikiObject);
    let ret = this.getNestedObjects(wikiObject[this.lang], pos).map(x => x.content);


    let wp = new WikiParser(this.word);
    for (let i = 0; i < ret.length; i++) {
      ret[i] = ret[i].map((el, index) => {
        if (index == 0) {
          el = (i + 1).toString() + '. ' + el;
        }
        return wp.parse(el)
      });
    }

    //console.log('ici : ', ret);


    //    ret = [["{{quote-book|en|year=1851|author={{w|Nathaniel Hawthorne}}|chapter=Main Street|title={{w|The Snow-Image, and Other Twice-Told Tales}}|location=Boston|publisher=Ticknor, Reed,and Fields|year_published=1852|page=96|pgeurl=https://archive.org/stream/snowimageandothe00hawtrich#page/96|passage={{...}}but the blame must rest on the sombre spirit of our forefathers, who wove their '''web''' of life with hardly a single thread of rose-color or gold, and not on me, who have a tropic-love of sunshine, and would gladly gild all the world with it, if I knew where to find so much.}}"]];
    return ret;
  }
}
export default Wiktionary;
