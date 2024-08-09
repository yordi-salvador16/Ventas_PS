<<<<<<< HEAD
// __tests__/products.test.js
const request = require('supertest');
const { app } = require('../app'); // Verifica la ruta y la exportación

describe('POST /products', () => {
  it('should store a new product', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        price: 10,
      })
      //.expect('Content-Type', /json/)
      //.expect(201);

    // Aserciones adicionales pueden ir aquí
  });
});
=======
const request = require('supertest')
const { app } = require('../server')
const { Builder } = require('../builders/product-builder')
const { store } = require('../services/product-service')

jest.mock('../services/product-service.js')

beforeEach(() => {
  store.mockReset()
})

describe('POST /products', () => {
  test('should store a new product', async () => {
    const product = Builder.product()

    const response = await request(app)
      .post('/products')
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)

    expect(response.body).toEqual({
      ...product,
      _id: 'abc',
    })
  })

  test('should execute store function', async () => {
    const product = Builder.product()

    await request(app)
      .post('/products')
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)

    expect(store).toHaveBeenCalledWith(product)
  })
})
>>>>>>> 1ecd58c5451cd352fe307ed55576bace15517c13
