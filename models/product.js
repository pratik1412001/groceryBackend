const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        required: true, // e.g. "kg", "litre", "piece"
    },
    category: {
        type: String,
        enum: ["Fruits", "Vegetables"],
        required: true
    },
    images: [String] // will store the file path
}, { timestamps: true })


module.exports = mongoose.model('Product', ProductSchema);