//Meu cesto de frutas 🍎 🍓 🥭
const fruitBasket = ['maça', 'banana', 'morango', 'manga', 'maça'];

function verifyFruitBasket(fruit) {
  const verify = fruitBasket.some((item) => fruit === item);
  return verify;
}

// verifyFruitBasket("banana")
// True
