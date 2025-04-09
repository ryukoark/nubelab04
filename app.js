// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000;

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { title: 'Página Principal' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
