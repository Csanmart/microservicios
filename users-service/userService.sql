CREATE DATABASE userService

USE userService

CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(400),
    email VARCHAR(400),
    telefono VARCHAR(10)
)