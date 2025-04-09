// routes/clientes.js
const express = require('express');
const router = express.Router();

// Ruta para obtener todos los clientes
router.get('/', (req, res) => {
  // Lógica para obtener clientes
  res.send('Lista de clientes');
});

// Ruta para agregar un nuevo cliente
router.post('/', (req, res) => {
  // Lógica para agregar un cliente
  res.send('Cliente agregado');
});

// Ruta para obtener un cliente por ID
router.get('/:id', (req, res) => {
  const clienteId = req.params.id;
  // Lógica para obtener un cliente por ID
  res.send(`Detalles del cliente con ID: ${clienteId}`);
});

module.exports = router;
