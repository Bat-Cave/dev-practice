## Array.prototype.map()

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): "The `.map()` method creates a new array populated with the results of calling a provided function on every element in the calling array."

For Example:

```
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1); 
// expected output: [2, 8, 18, 32]
```

The example MDN gives can be a bit difficult to understand at first, especially for beginner programmers. Here are some main points to understand about `.map()`:

1. `.map()` wants you to give it a function.
    - Max expects you to give it a function. `.map()` will then call that function for each item in the array it is mapping over.
    - This function is commonly called a callback function.

2. `.map()` will run the function you give it for each element in the array.
    - If the array has 5 items in it, the function you give `.map()` will run 5 times.

3. Each time `.map()` calls the function you give, it passes 3 paramenters to the function you gave it: 
    1. the `currentElement`
    2. the `index` of the `currentElement`
    3. the `array` the `.map()` was used on.

    **Most of the time, you don't need all 3 parameters, but `.map()` provides them if you do need them.*

---
### Example Time: Ice Cream Flavors

Let's say we have an array of flavors:

```
let flavors = ["Chocolate", "Strawberry", "Banana", "Cherry"]
```

Now that we have our flavors, we realise that we want to make a list of ice cream flavors. Since we already have a list of flavors, we can use `.map()` on our list of flavors to make our ice cream list. We want `'Chocolate'` to become `'Chocolate Ice Cream'`.

First, let's make the function we will give to `.map()`:

```
  function makeIceCream() {
    return;
  }

  // you could also write this as an arrow function like so:
  // const makeIceCream = () => null
```

Right now, our function isn't doing much. Let's make it work. Now that we have created the function, remember what `.map()` is going to call our function 4 times (one for each flavor) and give our function 3 things:
  - the flavor (`currentElement`)
  - the index of the flavor (`index` of `currentElement`)
  - and the original list of flavors (the array `.map()` was used on)

We only need the flavor in this example, so we can update our function to accept the flavor as a parameter:

```
  function makeIceCream(flavor) {
    return;
  }

  // arrow function example
  // const makeIceCream = (flavor) => null
```

---

Now that we have access to the `flavor`, we can manipulate it how we need. In this case, we just need to add `" Ice Cream"` to each flavor:

```
  function makeIceCream(flavor) {
    return flavor + " Ice Cream";
  }

  // arrow function example
  // const makeIceCream = (flavor) => flavor + " Ice Cream"
```

---

Our function is ready! It's time to use `.map()` on our list of flavors and give it our function:


```
  let flavors = ["Chocolate", "Strawberry", "Banana", "Cherry"]

  function makeIceCream(flavor) {
    return flavor + " Ice Cream";
  }

  let iceCreamFlavors = flavors.map(makeIceCream);

  // expected output
  // ["Chocolate Ice Cream", "Strawberry Ice Cream",
  //  "Banana Ice Cream", "Cherry Ice Cream"]
```

Many times you will see that other developers just write the function they want to give to `.map()` direction in the map (between the prenthesis). This is totally fine and normal. If we were to do this with our above example, it would look something like this:

```
  let flavors = ["Chocolate", "Strawberry", "Banana", "Cherry"]

  let iceCreamFlavors = flavors.map((flavor) => flavor + " Ice Cream");
```