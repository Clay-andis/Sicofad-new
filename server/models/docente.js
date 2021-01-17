const mongoose = require('mongoose');
const { Schema } = mongoose;

const CurSchema = new Schema({
    c_nombre: { type: String},
    c_codigo: { type: String},
    c_grupo: { type: Number},
    c_plan: { type: String},
}, { _id : false });

const DocenteSchema = new Schema({
    codigo: { type: String, required: true },
    nombre: { type: String, required: true },
    carga_academica: [CurSchema]
});

module.exports = mongoose.model('Docente', DocenteSchema);