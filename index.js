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

module.exports = {
  getAll,
};
