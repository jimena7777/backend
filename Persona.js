const mongoose = require("mongoose");

const PersonaShema = new mongoose.Schema({
    nombre: {type:String},
    apellido:{type: String},
    documento:{type: Number},
    direccion: {type:String},
    celular: {type:Number},

});

module.exports = mongoose.model("Persona", PersonaShema);