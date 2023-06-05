const jwt = require('jsonwebtoken');
const User = require('../services/userService');
const { DECIMAL } = require('sequelize');

const tokenValidator = async (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; 
    //let token = req.headers['Authorization'];
    token = token.split(' ')[0]
    console.log(token)

    if(!token){
        return res.status(403).send({message: 'No token provided'})
    }

    const decoded = jwt.verify(token,process.env.SECRET);

    const user = await User.getOneUserById(decoded.id);
    console.log(user);

    if(!user){
        return res.status(404).send({message: 'Invalid Token'})

    }

    next();
}

module.exports = tokenValidator;