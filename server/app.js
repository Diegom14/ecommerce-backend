const express = require('express');
const jwt = require('jsonwebtoken');

const port = 3000;


const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log('listening...')
});