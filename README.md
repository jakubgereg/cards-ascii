# Cards Ascii

Displays all cards in ascii.

## Install

```shell
yarn add cards-ascii

or

npm install cards-ascii
```

## Usage

```js
let cardsAscii = require("cards-ascii");
```

## API

### getAll(width)

#### Example

```js
let cards = cardsAscii.getAll().map(({ graphic }) => {
    return graphic;
});
  
console.log(cards.join('\n'));

//console.log:
// ┌─────────┐
// |A        │
// |         |
// |         |
// |    ♠    |
// |         |
// |         |
// │        A│
// └─────────┘
// ┌─────────┐
// |2        │
// |         |
// |         |
// |    ♠    |
// |         |
// |         |
// │        2│
// └─────────┘
// and more ...
```

#### Custom card width

```js
let cards = cardsAscii.getAll(5).map(({ graphic }) => {
    return graphic;
});
  
console.log(cards.join('\n'));

//console.log:
// ┌───┐
// |K  │
// |   |
// |   |
// | ♣ |
// |   |
// |   |
// │  K│
// └───┘
// and more ...
```


### getAllBySuit(suit)

#### Example

```js
let cards = cardsAscii.getAllBySuit("heart").map(({ graphic }) => {
    return graphic;
});
  
console.log(cards.join('\n'));

// console.log:
// ┌─────────┐
// |A        │
// |         |
// |         |
// |    ♥    |
// |         |
// |         |
// │        A│
// └─────────┘
// ┌─────────┐
// |2        │
// |         |
// |         |
// |    ♥    |
// |         |
// |         |
// │        2│
// └─────────┘
// ┌─────────┐
// |3        │
// |         |
// |         |
// |    ♥    |
// |         |
// |         |
// │        3│
// └─────────┘
```

### getById(cardId)

#### Example

```js
let card = cardsAscii.getById(52).graphic;

console.log(card);

// console.log:
// ┌─────────┐
// |K        │
// |         |
// |         |
// |    ♣    |
// |         |
// |         |
// │        K│
// └─────────┘
```

### getAllByNumber(number)

#### Example

```js
let cards = cardsAscii.getAllByNumber("J").map(({ graphic }) => {
  return graphic;
});

console.log(cards.join("\n"));

// console.log:
// ┌─────────┐
// |J        │
// |         |
// |         |
// |    ♠    |
// |         |
// |         |
// │        J│
// └─────────┘
// ┌─────────┐
// |J        │
// |         |
// |         |
// |    ♥    |
// |         |
// |         |
// │        J│
// └─────────┘
// ┌─────────┐
// |J        │
// |         |
// |         |
// |    ♦    |
// |         |
// |         |
// │        J│
// └─────────┘
// ┌─────────┐
// |J        │
// |         |
// |         |
// |    ♣    |
// |         |
// |         |
// │        J│
// └─────────┘
```

### getByNumberAndSuit(number, suit)

#### Example

```js
let card = cardsAscii.getByNumberAndSuit(3,"heart").graphic;

console.log(card);

// console.log:
// ┌─────────┐
// |3        │
// |         |
// |         |
// |    ♥    |
// |         |
// |         |
// │        3│
// └─────────┘
```