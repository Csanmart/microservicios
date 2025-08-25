//Configuracion del env
require('dotenv').config();


//Configuracion del express
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 4000


//Configuracion del mongoDB
const mongoose = require('mongoose');
const mongoUrl = process.env.DATABASE_URL;

mongoose.connect(mongoUrl)
.then(()=>console.log("Conectado a mongoDB"))
.catch(err=> console.error("Error al conectar el mongoDB: ", err));


const productoModel = require('./models/productModel');


app.get('/products', async (req, res) => {
  try {
    const products = await productoModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: 'Error obteniendo los datos', error });
  }
});

// POST - Crear producto
app.post('/products', async (req, res) => {
  try {
    const product = await productoModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Error creando el producto', error });
  }
});

// PUT - Actualizar producto por id
app.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await productoModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Error actualizando el producto', error });
  }
});

// DELETE - Eliminar producto por id
app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await productoModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto eliminado', deleted });
  } catch (error) {
    res.status(400).json({ message: 'Error eliminando el producto', error });
  }
});


app.listen(port, ()=>{
    console.log(`Puerto configurado: http://localhost:${port}`);
});