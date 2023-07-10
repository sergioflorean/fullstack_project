const autor = require('../models/autors.model');

module.exports.getAllActors = async (req, res) => {
    try {
        const autorList = await autor.find()
        res.json({ autor: autorList })

    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido enviar las listas de autores',
            error,
        });

    }
}
module.exports.createAutor = async (req, res) => {
    try {
        const newAutor = await autor.create(req.body)
        res.json({ autor: newAutor });
    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido crear el autor',
            error,
        });
    }
};

module.exports.getOneAutor = async (req, res) => {
    try {
        const oneAutor = await autor.findById(req.params.id)
        res.json({ autor: oneAutor });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido encontrarel producto',
            error,
        });
    }
}

module.exports.deleteAutor = async (req, res) => {
    try {
        const response = await autor.deleteOne({ _id: req.params.id });
        res.json({ response });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido eliminar la el producto',
            error,
        });
    }
}

module.exports.updateAutor = async (req, res) => {
    try {
        const updatedAutor = await autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ autor: updatedAutor });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido actualizar el producto',
            error,
        });
    }
}