const mongoose = require("mongoose");

const Materia = mongoose.Schema({
  nombre: String,
  estado: String,
  profesor: String,
  fechaDesde: Date,
  fechaHasta: Date,
  parciales: [{
    numero: Number,
    nota: Number,
    descripcion: String,
  }]
});

module.exports = mongoose.model("Materia", Materia);