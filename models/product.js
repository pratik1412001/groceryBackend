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
        required: true, // e.g. "fruits", "electronics"
    },
    image: {
        type: String, // image URL or path
        required: false,
    },
}, { timestamps: true })


module.exports = mongoose.model('Product', ProductSchema);