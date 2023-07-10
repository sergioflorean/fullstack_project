const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required "],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minlength:[1, "Price must be at least 1 character long"]
    },
    description: {
        type: String,
        minlength:[5, "Description must be at least 5 characters long"]
    },

}, { timestamps: true });

const Product= model('Product', productSchema);

module.exports = Product;