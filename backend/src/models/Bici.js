const {Schema, model}= require('mongoose');

const biciSchema = new Schema({
    id: String,
    marca: String,
    cantidad: Number, // Corregir el tipo de dato a Number
    descripcion: String // Corregir el nombre de la propiedad a "descripcion"
});

module.exports = model('Bici', biciSchema);