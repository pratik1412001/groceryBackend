
const express = require("express");

// Add Product
const Product = require('../models/product');




exports.addProduct = async (req, res) => {
    try {
        console.log("Incoming body:", req.body); // <--- debug

        const { productname, price, unit, category, image } = req.body;

        if (!productname || !price || !unit || !category) {
            return res.status(400).json({ msg: "All required fields must be filled" });
        }

        const newProduct = new Product({ productname, price, unit, category, image });
        await newProduct.save();

        res.status(201).json({ msg: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};


// Get All Products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

// Get Single Product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};