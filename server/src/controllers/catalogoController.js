const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    const allUsers = await userService.getAllUsers();
    res.status(200).send(allUsers);
};

const getOneUserById = async (req, res) => {
    const user = await userService.getOneUserById(req.params.userId);
    //console.log(user);
    res.json(user);
};

const createUSer = (req, res) => {
    const { body } = req;

    const newUser = {
        nombre_c: body.name,
        email_c: body.email,
        clave_c: body.password,
        estado_c: body.estado,
        privilegio_c: body.privilegio

    };

    console.log(newUser);

    const createdUser = userService.createUser(newUser);


    res.send(createdUser);
};

const updateUser = (req, res) => {
    userService.updateUser(req.params.userId);
    res.send(`Update user ${req.params.userId}`);
};

const deleteUser = (req, res) => {
    userService.deleteUser(req.params.userId);
    res.send(`Delete user ${req.params.userId}`);
};

module.exports = {
    getAllUsers,
    getOneUserById,
    createUSer,
    updateUser,
    deleteUser
};

