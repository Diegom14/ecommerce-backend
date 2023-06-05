require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const expressJwt = require('express-jwt');

const v1UserRouter = require("./v1/routes/userRoutes");
const v1AuthRouter = require("./v1/routes/authRoutes");
const v1siteRouter = require("./v1/routes/sitiosRoutes");

const midd = require('./middlewares/index');

const db = require("./database/db.config");


const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.SECRET;

//console.log(secret);

/*async function dbConn(){
    try {
        await db.authenticate();
        console.log("Database Online");

    } catch (error) {
        throw new Error(error);
    }
}

dbConn();
*/

//Middlewares
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//app.use(midd.tokenValidator);


//Routes
app.use("/api/v1/users",v1UserRouter);
app.use("/api/v1/auth", v1AuthRouter);
app.use("/api/v1/sites", midd.tokenValidator, v1siteRouter);


app.listen(port, () => {
    console.log('listening...')
});