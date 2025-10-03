const Product = require("../models/product");


exports.addProduct = async (req, res) => {
    try {
        const { productname, price, unit, category } = req.body;

        if (!productname || !price || !unit || !category) {
            return res.status(400).json({ msg: "All required fields must be filled" });
        }

        // collect all file paths
        const imagePaths = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

        const newProduct = new Product({
            productname,
            price,
            unit,
            category,
            images: imagePaths
        });

        await newProduct.save();

        res.status(201).json({ msg: "Product added successfully", product: newProduct });
        // console.log(newProduct);

    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};
