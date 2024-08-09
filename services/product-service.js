<<<<<<< HEAD
// services/product-service.js
const Product = require('../src/models/product');

async function store(productData) {
  const product = new Product(productData);
  return await product.save();
}

module.exports = { store };
=======
module.exports.store = async () => {}
>>>>>>> 1ecd58c5451cd352fe307ed55576bace15517c13
