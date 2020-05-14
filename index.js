let helper = require("./helper");
let cardsUnicode = require("cards-unicode");

function getAll(width = 11) {
  return cardsUnicode
    .getAll()
    .map(({ id, cardName, cardDisplay, suitSymbol, cardNumber }) => {
      return {
        id,
        cardName,
        cardDisplay,
        graphic: helper.cardManufacture(cardNumber, suitSymbol, width),
      };
    });
}

function getAllByNumber(number, width = 11) {
  return cardsUnicode
    .getAllByNumber(number)
    .map(({ id, cardName, cardDisplay, suitSymbol, cardNumber }) => {
      return {
        id,
        cardName,
        cardDisplay,
        graphic: helper.cardManufacture(cardNumber, suitSymbol, width),
      };
    });
}

function getAllBySuit(suit, width = 11) {
  return cardsUnicode
    .getAllBySuit(suit)
    .map(({ id, cardName, cardDisplay, suitSymbol, cardNumber }) => {
      return {
        id,
        cardName,
        cardDisplay,
        graphic: helper.cardManufacture(cardNumber, suitSymbol, width),
      };
    });
}

function getById(cardId, width = 11) {
  let card = cardsUnicode.getById(cardId);

  return {
    ...card,
    graphic: helper.cardManufacture(card.cardNumber, card.suitSymbol, width),
  };
}

function getByNumberAndSuit(number, suit, width = 11) {
  let card = cardsUnicode.getByNumberAndSuit(number, suit);

  return {
    ...card,
    graphic: helper.cardManufacture(card.cardNumber, card.suitSymbol, width),
  };
}

module.exports = {
  getAll,
  getAllByNumber,
  getAllBySuit,
  getById,
  getByNumberAndSuit,
};
