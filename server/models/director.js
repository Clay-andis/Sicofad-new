const mongoose = require('mongoose');
const { Schema } = mongoose;

const DirectorSchema = new Schema({
    nombres: { type : String, required: true },
    codigo: { type: String, required: true },
    escuela: { type: String, required: true }
});

module.exports = mongoose.model('Director', DirectorSchema);