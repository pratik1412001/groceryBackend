const express = require("express");
const routes = express.Router();
const { addProduct, getProducts } = require("../controller/addProduct");
const upload = require("../middleware/multer");

// multiple file upload: field name must be "photos"
routes.post("/add",upload.array("images", 12), (req, res, next) => {
    console.log("DEBUG BODY:", req.body);
    console.log("DEBUG FILES:", req.file);
    next();
}, addProduct);
routes.get("/getproduct", getProducts);

module.exports = routes;
