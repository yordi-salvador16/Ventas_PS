<<<<<<< HEAD
// app.js
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const dbURI = 'mongodb://localhost:27017/ventas-ps';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Definición de rutas y middleware

module.exports = { app };

=======
const express = require('express')
const { store } = require('./services/product-service')

const app = express()

app.use(express.json())

app.post('/products', async (req, res) => {
  const { name, description, price } = req.body
  const _id = 'abc'

  await store({ name, description, price })

  res.status(201).json({ name, description, price, _id })
})

module.exports.app = app
>>>>>>> 1ecd58c5451cd352fe307ed55576bace15517c13
