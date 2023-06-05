const { DataTypes } = require('sequelize');
const { dbEcommerce, dbCentral } = require('../db.config');

const Sitio = dbEcommerce.define('sitios', {
    idsitio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        required: true
    },
    nombre: {
        type: DataTypes.STRING,
        required: true
    },
    manejostock: {
        type: DataTypes.STRING,
        required: true
    },
    url: {
        type: DataTypes.STRING,
        required: true
    },
    estado: {
        type: DataTypes.STRING,
        required: true
    },
    tipopago: {
        type: DataTypes.STRING,
        required: true
    },
    tipositio: {
        type: DataTypes.STRING,
        required: true
    },
    nombremkp_ecommerce: {
        type: DataTypes.STRING,
        required: false
    }

}); 

module.exports = Sitio;