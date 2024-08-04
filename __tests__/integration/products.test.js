// __tests__/integration/products.test.js
const mongoose = require('mongoose');
const request = require('supertest');
const { app } = require('../../app');
const Product = require('../../src/models/product');

describe('POST /products', () => {
  it('should execute store function', async () => {
    // Configura el mock
    const storeMock = jest.spyOn(Product.prototype, 'save').mockImplementation(() => Promise.resolve());

    const productData = {
      name: 'Test Product',
      description: 'This is a test product',
      price: 10,
    };

    //await request(app)
      //.post('/products')
      //.send(productData)
      //.expect(201);

    //expect(storeMock).toHaveBeenCalled();
    //expect(storeMock).toHaveBeenCalledWith(expect.objectContaining(productData));

    storeMock.mockRestore(); // Restaura la implementación original después de la prueba
  });
  
  afterAll(async () => {
    await mongoose.connection.close(); // Cierra la conexión a la base de datos
  });
});
