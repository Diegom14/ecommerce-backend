const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const expressJwt = require('express-jwt');

const User = require('../database/models/user');

//const { use } = require('../v1/routes');

const getAllUsers = async () => {
    const allUsers = await User.findAll();
    return allUsers;
};
const getOneUserById = async (userId) => {
    const user = await User.findByPk(userId);
    //console.log(user);
    return user;
};


const createUser = async (newUser) => {

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(newUser.clave_c, salt);
    newUser.clave_c = hashed;

    const user = await User.create(newUser);

    return user;

    // // const user = await User.findOne({
    // //     where: {email: newUser.email}
    // // })

    // if(user){
    //     return 'Usuario ya existe';
    // }
};
const updateUser = (userId) => {
    return;
};
const deleteUser = (userId) => {
    return;
};

module.exports = {
    getAllUsers,
    getOneUserById,
    createUser,
    updateUser,
    deleteUser
}