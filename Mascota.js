const mongoose = require("mongoose");

const MascotaShema = new mongoose.Schema({
    raza: {type:String},
    edad:{type: Number},
    color:{type:String },
    peso: {type:String},
    

});

module.exports = mongoose.model("Mascota", MascotaShema);