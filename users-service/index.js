const express = require('express');
const app = express()
const port = 3000
const db = require('./config/db')
const router = require('./router/userRouter')
app.use(express.json());

app.use('/api',router);
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})