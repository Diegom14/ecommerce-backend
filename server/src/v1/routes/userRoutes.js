const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');

router
    .get('/', userController.getAllUsers) 
    .get('/:userId', userController.getOneUserById)
    .post('/', userController.createUSer)
    .patch('/:userId', userController.updateUser)
    .delete('/:userId', userController.deleteUser);


module.exports = router;
