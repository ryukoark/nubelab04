// routes/productos.js
const express = require('express');
const router = express.Router();

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
  // Lógica para obtener productos
  res.send('Lista de productos');
});

// Ruta para agregar un nuevo producto
router.post('/', (req, res) => {
  // Lógica para agregar un producto
  res.send('Producto agregado');
});

// Ruta para obtener un producto por ID
router.get('/:id', (req, res) => {
  const productoId = req.params.id;
  // Lógica para obtener un producto por ID
  res.send(`Detalles del producto con ID: ${productoId}`);
});

module.exports = router;
