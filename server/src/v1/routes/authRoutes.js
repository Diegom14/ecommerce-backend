const express = require('express');
const auth = require('../../controllers/authController.js')
const router = express.Router();

router.post('/signin', auth.signIn);


module.exports = router;