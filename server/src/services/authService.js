const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const expressJwt = require('express-jwt');

const User = require('../database/models/user');


const signIn = async (email, password) => {
    const secret = process.env.SECRET;
    const user = await User.findOne({ where: { email_c: email } });

    if(!user){
        return;

    }
    
    const isMatchPass = await bcrypt.compare(password,user.clave_c);
    //console.log(secret);
    if(!isMatchPass) {
        return;
    
    }

    const payload = {
        id : user.id_user,
        privilegio : user.privilegio_c
    }

    const token ="Bearer " + jwt.sign(payload, secret,{
        expiresIn: 86400
    });
    user.token = token;
    //console.log(user.token);
    return user;
};

module.exports = {
    signIn
}