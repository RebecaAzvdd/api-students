const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/students', userController.createUser);
router.get('/students', userController.listUsers);
router.get('/students:id', userController.findUserById);
router.put('/students:id', userController.updateUser);
router.delete('/students:id', userController.deleteUser);

module.exports = router;