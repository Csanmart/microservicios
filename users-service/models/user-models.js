const {DataTypes} = require('sequelize');
const db = require('../config/db');

const User = db.define('User',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'users',
    timestamps: false
});

module.exports = User;