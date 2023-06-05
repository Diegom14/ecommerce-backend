//mongoose.connect('mongodb+srv://diego:alboadictocc94@mycluster.bktez91.mongodb.net/miapp?retryWrites=true&w=majority');
const Sequelize = require("sequelize");

const server = process.env.SERVER;
const userBdd = process.env.USERBDD;
const pass = process.env.PASSWORDBDD;

const dbEcommerce = new Sequelize('ecommerce_flexi', userBdd, pass, {
    host: server,
    dialect: 'mysql'
});

const dbCentral = new Sequelize('centralflexi', userBdd, pass, {
    host: server,
    dialect: 'mysql'
});





module.exports = {
    dbEcommerce,
    dbCentral
}