// test/condiciones.test.js

const { applyDiscount } = require('../src/descuentos');

describe('Pruebas de condiciones lógicas', () => {
  test('Debe aplicar el descuento cuando el código es válido', () => {
    const product = { price: 100 };
    const discountCode = { isValid: () => true, value: 10 };

    const result = applyDiscount(product, discountCode);
    expect(result.price).toBe(90);
  });

  test('Debe lanzar un error cuando el código de descuento es inválido', () => {
    const product = { price: 100 };
    const discountCode = { isValid: () => false, value: 10 };

    expect(() => applyDiscount(product, discountCode)).toThrow('Invalid discount code');
  });

  test('Debe lanzar un error cuando el código de descuento no está presente', () => {
    const product = { price: 100 };

    expect(() => applyDiscount(product)).toThrow('Discount code is required');
  });
});
