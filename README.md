# Cards Ascii

Displays all cards in ascii.

## Install

```shell
yarn add cards-ascii

or

npm install cards-ascii
```

## Example

```js
let cardsAscii = require("cards-ascii");

cardsAscii.getAll().map(({ graphic }) => {
  console.log(graphic);
});

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
```
