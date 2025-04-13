const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'example',
  database: process.env.DB_NAME || 'testdb'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con MySQL:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
