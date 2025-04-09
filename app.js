// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear cuerpos de solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutas
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

// Usar rutas
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la aplicación Lab04');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));