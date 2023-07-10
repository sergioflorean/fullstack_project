const { Schema, model } = require('mongoose')

const autorSchema = new Schema({
    name: {
        type: String,
        required: [true, "debe tener un nombre "],
        minlength: [5, "el titulo debe tener al menos 5 caracteres"]
    },
  

}, { timestamps: true });



const Autor= model('Autor', autorSchema);

module.exports = Autor;