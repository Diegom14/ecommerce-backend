const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    const allUsers = await userService.getAllUsers();
    res.status(200).send(allUsers);
};

const getOneUser = (req, res) => {
    const user = userService.getOneUser(req.params.userId);
    res.send(`Get user ${req.params.userId}`);
};

const createUSer = (req, res) => {
    const createdUser = userService.createUSer();
    res.send(`Create User`);
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
    getOneUser,
    createUSer,
    updateUser,
    deleteUser
};

