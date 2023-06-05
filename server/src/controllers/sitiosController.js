const sitioService = require('../services/sitiosService');

const getAllSitios = async (req, res) => {
    const allSitios = await sitioService.getAllSitios();
    res.status(200).send(allSitios);
};

const getOneUserById = (req, res) => {
    
    res.send(`Get user ${req.params.userId}`);
};

const createSite = async (req, res) => {
    const { body } = req;

    const newSite = {
        nombre: body.name,
        manejostock: body.manejoStock,
        url: body.url,
        estado: body.estado,
        tipopago: body.tipoPago,
        tipositio: body.tipoSitio,
        nombremkp_ecommerce: body.nombreEcommerce

    };

    const createdSite = await sitioService.createSite(newSite);

    console.log(createdSite);

    res.send();
};

const updateUser = (req, res) => {
    
    res.send(`Update user ${req.params.userId}`);
};

const deleteUser = (req, res) => {
    
    res.send(`Delete user ${req.params.userId}`);
};

module.exports = {
    getAllSitios,
    createSite
};

