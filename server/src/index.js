const express = require('express');
const jwt = require('jsonwebtoken');
//const mongoose = require('mongoose');
const Sequelize = require('sequelize');
const v1Router = require("./v1/routes/index");
const v1UserRouter = require("./v1/routes/userRoutes");
const db = require("./database/db.config");


const app = express();
const port = process.env.PORT || 3000;

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
app.use(express.json());
app.use("/api/v1/users",v1UserRouter);




app.listen(port, () => {
    console.log('listening...')
});