// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000; // Utiliza el puerto del entorno o 9000 por defecto

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

// Iniciar el servidor y escuchar en todas las interfaces de red
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Configuración de vistas (si utilizas un motor de plantillas)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
