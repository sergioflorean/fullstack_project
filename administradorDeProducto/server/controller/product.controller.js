const product = require('../models/product.model');

module.exports.getAllProducts = async (req, res) => {
    try {
        const productList = await product.find()
        res.json({ product: productList })

    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido enviar las listas de chistes',
            error,
        });

    }
}

module.exports.createProduct = async (req, res) => {
    try {
        const newProduct = await product.create(req.body)
        res.json({ product: newProduct });
    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido crear el chiste',
            error,
        });
    }
};

module.exports.getOneProduct = async (req, res) => {
    try {
        const oneProduct = await product.findById(req.params.id)
        res.json({ product: oneProduct });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido encontrarel producto',
            error,
        });
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        const response = await product.deleteOne({ _id: req.params.id });
        res.json({ response });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido eliminar la el producto',
            error,
        });
    }
}

module.exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ product: updatedProduct });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido actualizar el producto',
            error,
        });
    }
}