// routes/productos.js
const express = require('express');
const router = express.Router();

// Ruta para la lista de productos
router.get('/', (req, res) => {
  res.render('productos', { title: 'Productos' });
});

module.exports = router;
