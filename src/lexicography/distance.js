const keyboardLayout = [
  "²&é\"'(§è!çà)- ³1234567890°_",
  ' azertyuiop^$  AZERTYUIOP"*',
  " qsdfghjklmùµ  QSDFGHJKLM%£",
  "<wxcvbn,;:=   >WXCVBN?./+  "
];
const distance = {
  kb: (word, list, triggerScore = 10, max = 5) => {
    let masks = [...list];
    let scores = [];
    for (let i = 0; i < list.length; i++) {
      scores.push({ word: list[i], score: 0 });
    }
    list.forEach((wordToCompare, index) => {
      console.log(wordToCompare);
      let score = 0;
      word.split("").forEach((char1, ind1) => {
        let currentRes = 1000;
        wordToCompare.split("").forEach((char2, ind2) => {
          let res = calc(char1, char2) + (ind1 - ind2 == 0 ? 0 : 0.1);
          if (res < currentRes) {
            currentRes = res;
          }
        });
        //console.log(currentRes);
        score += currentRes;
      });

      scores[index].score = score;
    });
    scores = scores
      .filter(x => x.score < triggerScore)
      .sort((a, b) => a.score > b.score);
    if (scores.length > 0) {
      scores = scores.slice(0, max);
    }
    return scores;
    function calc(char1, char2) {
      let x1, y1, x2, y2;
      for (let i = 0; i < keyboardLayout.length; i++) {
        const ind1 = keyboardLayout[i].indexOf(char1);
        if (~ind1) {
          x1 = ind1 % 14;
          y1 = i;
        }
        const ind2 = keyboardLayout[i].indexOf(char2);
        if (~ind2) {
          x2 = ind2 % 14;
          y2 = i;
        }
      }
      if (x1 && y1) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      }
      return false;
    }
  },
  dym: (word, list, triggerScore = 0.5, max = 5) => {
    let masks = [...list];
    let scores = [];
    for (let i = 0; i < list.length; i++) {
      scores.push({ word: list[i], score: 0 });
    }
    word
      .toLowerCase()
      .split("")
      .filter(x => x)
      .forEach(char => {
        masks = masks.map((el, nEl) => {
          let i = el.indexOf(char);
          if (i !== -1) {
            el = el.substring(0, i) + "$" + el.substring(i + 1);
            scores[nEl].score += 1 / el.length;
            return el;
          }
          return el;
        });
      });
    scores = scores
      .filter(x => x.score > triggerScore)
      .sort((a, b) => a.score < b.score);
    if (scores.length > 0) {
      scores = scores.slice(0, max);
    }
    return scores;
  }
};

export default distance;
