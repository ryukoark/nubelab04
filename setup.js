const db = require('./db');

const setupDB = () => {
  db.query(`
    CREATE TABLE IF NOT EXISTS clientes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(100),
      email VARCHAR(100)
    );
  `);

  db.query(`
    CREATE TABLE IF NOT EXISTS productos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(100),
      precio DECIMAL(10, 2)
    );
  `);

  db.query('SELECT COUNT(*) AS count FROM clientes', (err, results) => {
    if (results[0].count === 0) {
      db.query(`
        INSERT INTO clientes (nombre, email) VALUES 
        ('Juan Pérez', 'juan@example.com'),
        ('Ana Gómez', 'ana@example.com'),
        ('Carlos Ruiz', 'carlos@example.com');
      `);
    }
  });

  db.query('SELECT COUNT(*) AS count FROM productos', (err, results) => {
    if (results[0].count === 0) {
      db.query(`
        INSERT INTO productos (nombre, precio) VALUES 
        ('Laptop', 2500.00),
        ('Mouse', 45.90),
        ('Teclado', 89.99);
      `);
    }
  });
};

module.exports = setupDB;
