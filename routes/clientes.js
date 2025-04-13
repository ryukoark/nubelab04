const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) {
      console.error('Error al obtener clientes:', err);
      return res.status(500).send('Error del servidor');
    }
    res.render('clientes', { title: 'Clientes', clientes: results });
  });
});

module.exports = router;
