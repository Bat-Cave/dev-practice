const flavors = ["Chocolate", "Strawberry", "Banana", "Cherry"];

function makeIceCream(flavor) {
  return flavor + " Ice Cream";
}

const iceCreamFlavors = flavors.map(makeIceCream);

console.log(iceCreamFlavors);
