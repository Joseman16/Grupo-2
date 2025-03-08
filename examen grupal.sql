/* CREATE DATABASE TiendaLinea
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Colombia.1252'
    LC_CTYPE = 'Spanish_Colombia.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
*/

DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS categorias;

-- Crear tabla de clientes
CREATE TABLE clientes (
    cli_id SERIAL PRIMARY KEY,
    cli_nombre VARCHAR(100),
    cli_telefono VARCHAR(20),
    cli_direccion VARCHAR(255),
    cli_email VARCHAR(100)
);

-- Crear tabla de categorías
CREATE TABLE categorias (
    cat_id SERIAL PRIMARY KEY,
    cat_nombre VARCHAR(50) UNIQUE
);

-- Insertar datos en la tabla de categorías
INSERT INTO categorias (cat_nombre) VALUES
('Computadoras'),
('Accesorios');

-- Crear tabla de productos
CREATE TABLE productos (
    pro_id SERIAL PRIMARY KEY,
    pro_nombre VARCHAR(100),
    cat_id INT REFERENCES categorias(cat_id),
    pro_precio DECIMAL(10, 2),
    pro_stock INT
);

-- Insertar datos en la tabla de productos con la referencia a la categoría
INSERT INTO productos (pro_nombre, cat_id, pro_precio, pro_stock) VALUES
('Laptop HP', 1, 750.99, 10),
('Mouse Logitech', 2, 25.50, 50),
('Teclado Razer', 2, 89.99, 20);

-- Crear tabla de ventas
CREATE TABLE ventas (
    ven_id SERIAL PRIMARY KEY,
    cli_id INT REFERENCES clientes(cli_id),
    pro_id INT REFERENCES productos(pro_id),
    ven_cantidad INT,
    ven_fecha DATE
);

-- Insertar datos en la tabla de clientes
INSERT INTO clientes (cli_nombre, cli_telefono, cli_direccion, cli_email) VALUES
('Juan Pérez', '0991 234', 'Quito', 'juan@mail.com'),
('María Gómez', '0995 678', 'Guayaquil', 'maria@mail.com');

-- Insertar datos en la tabla de ventas
INSERT INTO ventas (cli_id, pro_id, ven_cantidad, ven_fecha) VALUES
(1, 1, 1, '2024-02-25'),
(2, 2, 2, '2024-02-24'),
(1, 3, 1, '2024-02-20');

SELECT * FROM categorias;
SELECT * FROM productos;
SELECT * FROM clientes;
SELECT * FROM ventas;
