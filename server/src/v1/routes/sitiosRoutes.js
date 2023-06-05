const express = require('express');
const router = express.Router();

const sitioController = require('../../controllers/sitiosController');

router
    .get('/', sitioController.getAllSitios) 
    // .get('/:userId', userController.getOneUserById)
    .post('/', sitioController.createSite)
    // .patch('/:userId', userController.updateUser)
    // .delete('/:userId', userController.deleteUser);


module.exports = router;
