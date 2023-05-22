//mongoose.connect('mongodb+srv://diego:alboadictocc94@mycluster.bktez91.mongodb.net/miapp?retryWrites=true&w=majority');
const Sequelize = require("sequelize");
const sequelize = new Sequelize('ecommerce_flexi', 'root', 'advicom', {
    host: 'localhost',
    dialect: 'mysql'
});






module.exports = sequelize;