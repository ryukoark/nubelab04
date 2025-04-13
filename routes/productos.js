const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error('Error al obtener productos:', err);
      return res.status(500).send('Error del servidor');
    }
    res.render('productos', { title: 'Productos', productos: results });
  });
});

module.exports = router;
