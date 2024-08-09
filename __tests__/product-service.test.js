const mockingoose = require('mockingoose');
const { store } = require('../services/product-service');
const Product = require('../src/models/product'); // Asegúrate de que la ruta es correcta

describe('Product Service', () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  test('should store a product in the database', async () => {
    const productData = {
      name: 'Test Product',
      description: 'This is a test product', // Asegúrate de incluir el campo description
      price: 100,
    };

    const mockProduct = new Product(productData);
    mockingoose(Product).toReturn(mockProduct, 'save');

    const result = await store(productData);
    expect(result).toEqual(mockProduct);
  });
});
