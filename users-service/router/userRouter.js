const express = require('express');
const router = express.Router()
const userControllers = require('../controllers/user-controllers');

router.post('/crear', userControllers.createUser);
router.get('/', userControllers.getUsers);
router.get('/tomar/:id', userControllers.GetUsersById)
router.put('/actualizar/:id', userControllers.updateUser);
router.delete('/eliminar/:id', userControllers.deleteUser);

module.exports = router;