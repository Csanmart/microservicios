const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
},{
    timestamps: true
});

const product = mongoose.model('producto', productSchema)

module.exports = product