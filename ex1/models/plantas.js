const mongoose = require("mongoose");

var plantasSchema = new mongoose.Schema({
    _id: Number,
    Número_de_Registo: Number,
    Código_de_rua: Number,
    Rua: String,
    Local: String,
    Freguesia: String,
    Espécie: String,
    Nome_Científico: String,
    Origem: String,
    Data_de_Plantação: String,
    Estado: String,
    Caldeira: String,
    Tutor: String,
    Implantação: String,
    Gestor: String,
    Data_de_actualização: String,
    Número_de_intervenções: Number,
});

module.exports = mongoose.model("plantas", plantasSchema);
