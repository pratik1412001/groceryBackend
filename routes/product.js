const express = require('express');
const routes = express.Router();
const {register,login} = require('../controller/authcontoller');
const { addProduct } = require('../controller/addProduct');

routes.post('/product',addProduct)



module.exports = routes