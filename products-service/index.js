//Configuracion del env
require('dotenv').config();
//Configuracion del express
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000

//Configuracion del mongoDB

const mongoose = require('mongoose');

const mongoUrl = process.env.DATABASE_URL;
mongoose.connect(mongoUrl)
.then(()=>console.log("Conectado a mongoDB"))
.catch(err=> console.error("Error al conectar el mongoDB: ", err));


const product = require('./models/productModel');


app.get('/products', async(req, res)=>{
    try {
        const products = await product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json('error tomando los datos')
    }
})

let products = [
    {id: 1 , nombre: "Producto E" , precio: 500},
    {id: 2, nombre: "Producto F" , precio: 400}
];

app.get('/products', (req, res)=>{
    console.log('GET /products request received');
    res.json(products);
});


app.post('/products', (req, res)=>{
    const newProduct  = req.body;
    products.push(newProduct);
    console.log(`Producto agregado es: ${newProduct}`)
    res.status(201).json(newProduct);
});

app.listen(port, ()=>{
    console.log(`Puerto configurado: http://localhost:${port}`);
});