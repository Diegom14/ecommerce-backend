const User = require('../database/models/user');

const getAllUsers = async () => {
    const allUsers = await User.findAll();
    return allUsers;
};
const getOneUser = (userId) => {
    return;
};
const createUSer = () => {
    return;
};
const updateUser = (userId) => {
    return;
};
const deleteUser = (userId) => {
    return;
};

module.exports = {
    getAllUsers,
    getOneUser,
    createUSer,
    updateUser,
    deleteUser
}