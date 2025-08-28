const userModel = require('../models/user-models');

exports.createUser = async(req, res)=>{
    const {nombre , email, telefono} = req.body;
    if(!nombre || !email|| !telefono){
        return res.status(500).json({message: 'los campos estan vacios'})
    }

    try {
        const user = userModel.create(req.body);
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({message: 'Error creando el usuarios', error});
    }
}; 

// ✅ Obtener todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.findAll(); // si usas Mongoose cambia a find()
        res.status(200).json({
            message: 'Lista de usuarios',
            users
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error obteniendo usuarios ❌', 
            error: error.message 
        });
    }
};


exports.GetUsersById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ message: "Usuario encontrado", user });
  } catch (error) {
    res.status(400).json({ message: "Error tomando el usuario", error });
  }
};

// ✅ Actualizar usuario
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, telefono } = req.body;

        const user = await userModel.findByPk(id); // en Mongoose sería findById(id)
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado ❌' });
        }

        // Actualizar datos
        user.nombre = nombre || user.nombre;
        user.email = email || user.email;
        user.telefono = telefono || user.telefono;

        await user.save();

        res.status(200).json({
            message: 'Usuario actualizado con éxito ✅',
            user
        });

    } catch (error) {
        res.status(500).json({ 
            message: 'Error actualizando usuario ❌', 
            error: error.message 
        });
    }
};

// ✅ Eliminar usuario
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await userModel.findByPk(id); // en Mongoose sería findById(id)
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado ❌' });
        }

        await user.destroy(); // en Mongoose sería user.remove()

        res.status(200).json({ message: 'Usuario eliminado con éxito ✅' });

    } catch (error) {
        res.status(500).json({ 
            message: 'Error eliminando usuario ❌', 
            error: error.message 
        });
    }
};