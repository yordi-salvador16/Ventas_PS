// test/bucles.test.js

const { calculateTotal } = require('../src/carrito');

describe('Pruebas de bucles', () => {
  test('Debe calcular el total para varios artículos en el carrito', () => {
    const cartItems = [
      { price: 50, quantity: 2 },
      { price: 30, quantity: 1 },
    ];

    const result = calculateTotal(cartItems);
    expect(result).toBe(130);
  });

  test('Debe calcular el total como 0 para un carrito vacío', () => {
    const cartItems = [];

    const result = calculateTotal(cartItems);
    expect(result).toBe(0);
  });

  test('Debe calcular el total para un carrito con un solo artículo', () => {
    const cartItems = [{ price: 100, quantity: 1 }];

    const result = calculateTotal(cartItems);
    expect(result).toBe(100);
  });
});
