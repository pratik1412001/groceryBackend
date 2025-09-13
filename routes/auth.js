const express = require('express');
const routes = express.Router();
const {register,login} = require('../controller/authcontoller')
// const auth = require("../middleware/authMiddleware");
routes.post("/register", register);
routes.post("/login", login);




module.exports = routes