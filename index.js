//Meu cesto de frutas 🍎 🍓 🥭
const fruitBasket = ['maça', 'banana', 'morango', 'manga', 'maça'];

function verifyFruitBasket(fruit) {
  const verify = fruitBasket.some((item) => fruit === item);
  return verify;
}

// verifyFruitBasket("banana")
// True

function replaceFruit(fruitToBeReplaced, fruitToReplace) {
  const newFruit = fruitBasket.map((fruit) => fruitToBeReplaced === fruit ? fruitToReplace : fruit)
  return newFruit;
}