const { addToCart, removeFromCart, proceedToCheckout, getCartItems, getCartQuantity } = require('../src/cart');

describe('Shopping Cart', () => {
  test('should add product to cart', () => {
    const result = addToCart('Casaca Hombre Jacob Negro', 'XL');
    expect(result).toBe('Product added to cart');
    const cartItems = getCartItems();
    expect(cartItems).toContainEqual({ product: 'Casaca Hombre Jacob Negro', size: 'XL' });
  });

  test('should proceed to checkout', () => {
    addToCart('Casaca Hombre Jacob Negro', 'XL');
    const result = proceedToCheckout();
    expect(result).toBe('Checkout successful');
    const cartQuantity = getCartQuantity();
    expect(cartQuantity).toBe(0);
  });

  test('should remove product from cart', () => {
    addToCart('Casaca Hombre Jacob Negro', 'XL');
    const result = removeFromCart('Casaca Hombre Jacob Negro', 'XL');
    expect(result).toBe('Product removed from cart');
    const cartItems = getCartItems();
    expect(cartItems).not.toContainEqual({ product: 'Casaca Hombre Jacob Negro', size: 'XL' });
  });

  test('should verify product quantity in cart', () => {
    addToCart('Casaca Hombre Jacob Negro', 'XL');
    addToCart('Otro Producto', 'L');
    removeFromCart('Casaca Hombre Jacob Negro', 'XL');
    const cartQuantity = getCartQuantity();
    expect(cartQuantity).toBe(1);
    const cartItems = getCartItems();
    expect(cartItems).toContainEqual({ product: 'Otro Producto', size: 'L' });
    expect(cartItems).not.toContainEqual({ product: 'Casaca Hombre Jacob Negro', size: 'XL' });
  });
});
