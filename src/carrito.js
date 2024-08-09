// src/carrito.js

function calculateTotal(cartItems) {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
    }
    return total;
  }
  
  module.exports = { calculateTotal };
  