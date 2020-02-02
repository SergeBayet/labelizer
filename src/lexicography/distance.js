const keyboardLayout = [
  ["²&é\"'(§è!çà)-", "³1234567890°_"],
  [" azertyuiop^$ ", ' AZERTYUIOP"*'],
  [" qsdfghjklmùµ ", " QSDFGHJKLM%£"],
  ["<wxcvbn,;:=   ", ">WXCVBN?./+  "]
];
const distance = {
  kb: (word, list) => {
    word.split("").map(char => {});
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
