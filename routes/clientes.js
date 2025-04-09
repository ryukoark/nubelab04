// routes/clientes.js
const express = require('express');
const router = express.Router();

// Ruta para la lista de clientes
router.get('/', (req, res) => {
  res.render('clientes', { title: 'Clientes' });
});

module.exports = router;
