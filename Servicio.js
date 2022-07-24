const mongoose = require("mongoose");

const ServicioShema = new mongoose.Schema({
    bano: {type:String},
    recorte_pelo:{type: String},
    revision_veterinaria:{type:String },
    actividad_canina: {type:String},
    

});

module.exports = mongoose.model("Servicio", ServicioShema);