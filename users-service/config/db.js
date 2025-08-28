const {Sequelize} = require('sequelize');

const db = new Sequelize('userService', 'root', '',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

function connection(){
    try {
        db.authenticate()
        console.log("conectado a la base de datos")
    } catch (erro) {
        console.log("Error conectando a la base de datos")        
    }
}

connection()

module.exports = db;