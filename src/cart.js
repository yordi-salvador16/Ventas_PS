// src/cart.js

let cart = [];

function addToCart(product, size) {
  cart.push({ product, size });
  return 'Product added to cart';
}

function removeFromCart(product, size) {
  const index = cart.findIndex(item => item.product === product && item.size === size);
  if (index !== -1) {
    cart.splice(index, 1);
    return 'Product removed from cart';
  }
  return 'Product not found in cart'; // Puedes manejar el caso en el que el producto no se encuentra
}

function proceedToCheckout() {
  cart = []; // Vaciar el carrito
  return 'Checkout successful';
}

function getCartItems() {
  return cart;
}

function getCartQuantity() {
  return cart.length;
}

module.exports = { addToCart, removeFromCart, proceedToCheckout, getCartItems, getCartQuantity };
