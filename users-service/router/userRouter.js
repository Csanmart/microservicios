const express = require('express');
const router = express.Router()
const userControllers = require('../controllers/user-controllers');

router.post('/user', userControllers.createUser);
router.get('/user', userControllers.getUsers);
router.get('/user/:id', userControllers.GetUsersById)
router.put('/user/:id', userControllers.updateUser);
router.delete('/user/:id', userControllers.deleteUser);

module.exports = router;