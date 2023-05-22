//const mongoose = require('mongoose');
//const db = require('../config/config.json');
//const db = require('sequelize');
const { DataTypes } = require('sequelize');
const db = require('../db.config');

const User = db.define('tb_credenciales', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre_c: {
        type: DataTypes.STRING
    },
    clave_c:{
        type: DataTypes.STRING
    } 

}); 

module.exports = User;

/*const User = sequelize.define([
    
], function(require, factory) {
    'use strict';
    
});('User', {
    name: { type: String, required: true, minLenght:3},
    lastname: { type: String, required: true, minLenght: 3},
})




*/


/*const DB = require('./db.json');

const getAllUsers = () => {
    return DB.workouts;
};


module.exports = {
    getAllUsers
};
*/