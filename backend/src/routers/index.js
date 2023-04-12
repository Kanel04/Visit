const express = require('express');
const authController = require("../controllers/auth");
const { 
    register,
    } = require('../controllers/index');
const router = express.Router();

router
    .route('/register')
    .post(register);

module.exports = router;