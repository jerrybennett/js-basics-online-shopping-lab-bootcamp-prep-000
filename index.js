var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
<<<<<<< HEAD

  function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  cart.push({ [item]: randomPrice(1, 100) })

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  var cartItems = []
  var inYourCart = `In your cart, you have `

  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  }

  function threePlus(arr) {
    return arr.slice(0, -2).join(`, `) +
      (arr.slice(0, -2).length ? `, ` : '') +
      arr.slice(-2).join(`, and `) + `.`
  }

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      if (cart.length >= 3) {
        cartItems.push(`${item} at $${cart[i][item]}`)
        console.log(inYourCart + threePlus(cartItems))
      } else if (cart.length === 2) {
        cartItems.push(`${item} at $${cart[i][item]}`)
        console.log(inYourCart + cartItems.join(` and `) + `.`)
=======
  function randomPrice(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
  }
 cart.push({ [item]: randomPrice(1, 100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var inYourCart = `In your cart, you have `
  var cartStuff = []

  if(cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  }
  function threePlus(arr) {
    return arr.slice(0, -2).join(`, `) +
      (arr.slice(0, -2).length ? `, `: '') +
      arr.slice(-2).join(`, and `) + `.`
  }
  for(var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      if(cart.length >= 3) {
        cartStuff.push(`${item} at $${cart[i][item]}`)
        console.log(inYourCart + threePlus(cartStuff))
      } else if(cart.length === 2) {
        cartStuff.push(`${item} at $${cart[i][item]}`)
        console.log(inYourCart + cartStuff.join(` and `) + `.`)
>>>>>>> 23a4b6ef72f5dbcd94d45497b4ed1bc18f89ac25
      } else {
        console.log(inYourCart + `${item} at $${cart[i][item]}.`)
      }
    }
  }
}

function total() {
  var amount = 0
<<<<<<< HEAD

  for (var i = 0; i < cart.length; i++) {
    for (var price in cart[i]) {
      amount += cart[i][price]
    }
  }

=======
  for(var i = 0; i < cart.length; i++) {
    for(var price in cart[i]) {
      amount += cart[i][price]
    }
  }
>>>>>>> 23a4b6ef72f5dbcd94d45497b4ed1bc18f89ac25
  return amount
}

// var buz = {
//   fog: 'stack'
// };
//
// for (var name in buz) {
//   if (buz.hasOwnProperty(name)) {
//     console.log('this is fog (' +
//       name + ') for sure. Value: ' + buz[name]);
//   }
//   else {
//     console.log(name); // toString or something else
//   }
// }
// VM8340:7 this is fog (fog) for sure. Value: stack

function removeFromCart(item) {
<<<<<<< HEAD
  if (item !== cart.find(x => x.item)) {
    console.log(`That item is not in your cart.`)
  }

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
    }
  }

  return cart
=======
  for(var i = 0; i < cart.length; i++) {
    for(var key in cart[i]) {
      if(cart[i].hasOwnProperty(key)) {
        if(cart[i][key] != item) {
          console.log(`That item is not in your cart.`)
          return cart
        }
      }
    }
  }
>>>>>>> 23a4b6ef72f5dbcd94d45497b4ed1bc18f89ac25
}

function placeOrder(cardNumber) {
  var cardNumber = cardNumber

  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }

  return cart = []
}
