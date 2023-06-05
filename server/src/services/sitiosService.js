const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const expressJwt = require('express-jwt');

const Sitio = require('../database/models/sitios');

//const { use } = require('../v1/routes');

const getAllSitios = async () => {
    const allSitios = await Sitio.findAll();
    return allSitios;
};
const getOneSitio = (userId) => {
    return;
};


const createSite = async (newSitio) => {

    newSitio.nombremkp_ecommerce = 1

    const sitio = await Sitio.create(newSitio);

    return sitio;

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
    getAllSitios,
    createSite
}