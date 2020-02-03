import { isStopWord } from './stopwords';

const particules = ['am', 'an', 'auf', 'auf der', 'aus der', 'im', 'von', 'von der', 'von und zu', 'zu', 'zum', 'zur',
  'de', 'den', 'op de', 'op den', 't', 'ten', 'ter', 'te', 'van', 'vanden', 'van den', 'vander', 'van der',
  'af', 'av', 'von', 'de', 'del', 'de la', 'de los', 'de las', 'y', 'a', 'da', 'das', 'de', 'do', 'dos', 'of', 'de', 'la', 'des', 'd', "'"];
const entities = {
  findSentences: (tokens) => {

  },
  findNames: (tokens) => {
    // Object with id and token

    let names = [];
    let cursor = 0;
    let currentEntity = [];
    let startSentence = true;
    while (cursor < tokens.length) {
      if (entities.isUcFirst(tokens[cursor].token)) {
        if (!(startSentence && isStopWord(tokens[cursor].token, 'en'))) {
          currentEntity.push({ token: tokens[cursor].token, id: tokens[cursor].id, cursor, type: 'uc', startSentence });
        }
        startSentence = false;
      }
      else if ((entities.isParticule(tokens[cursor].token)
        || entities.isBlank(tokens[cursor].token))
        && currentEntity.length) {

        currentEntity.push({ token: tokens[cursor].token, id: tokens[cursor].id, cursor, type: 'sep', startSentence });
      }
      else {

        if (currentEntity.length) {
          let trimmedEntity = entities.trim(currentEntity);
          if (!(trimmedEntity.length == 1 && trimmedEntity[0].startSentence)) {
            names.push(trimmedEntity);
          }
        }
        currentEntity = [];
      }

      if (tokens[cursor].id == '-1' || entities.isFinalPunctuation(tokens[cursor].token)) {
        startSentence = true;
      }

      cursor++;
    }
    return names;
  },
  isUcFirst: token => {
    return /^[A-Z].*$/.test(token);
  },
  isFinalPunctuation: token => {
    return /^[.!?]$/.test(token)
  },
  isBlank: token => {
    return /^[\s]$/.test(token)
  },
  isParticule: token => {
    return particules.includes(token.toLowerCase());
  },
  trim: entity => {

    let cursor = entity.length - 1;
    let newEntity;
    while (entity[cursor].type !== 'uc') {
      cursor--;
    }
    newEntity = entity.slice(0, cursor + 1);
    for (let i = 1; i < newEntity.length; i++) {
      if (+newEntity[i].id !== +newEntity[i - 1].id + 1) {
        console.log(newEntity);
        return [];
      }
    }
    return newEntity;
  }
}

export default entities;