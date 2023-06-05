const userService = require('../services/authService');

const signIn = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(401).send({message:'Usuario y/o contraseña incorrectos'}); 
    }
    const user = await userService.signIn(email, password);
    //console.log(user);

    if(!user){
        return res.status(401).send({message:'Usuario y/o contraseña incorrectos'}); 
        
    }

    const data = {
        name: user.nombre_c,
        email: user.email_c,
        token: user.token,
        privilegio: user.privilegio_c,
        id: user.id_user

    };
    console.log(user);
    res.status(200).json(data);
}


module.exports = {
    signIn
};