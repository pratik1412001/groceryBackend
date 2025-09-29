const express = require('express');
const routes = express.Router();
// const {register,login} = require('../controller/authcontoller');
const { addProduct, getProducts } = require('../controller/addProduct');

routes.post('/product',addProduct)
routes.get('/getproduct',getProducts)



module.exports = routes