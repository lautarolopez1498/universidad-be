const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const Materia = require('./models/materia')
const materia = require('./models/materia')

mongoose.connect('mongodb://127.0.0.1:27017/universidad', { useNewUrlParser: true})

mongoose.connection.once('open', () => {
  console.log("Mongodb connection established successfully")
})

const PORT = 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  Materia.find((err, materias) => {
    if (err) {
      console.log(err);
    } else {
      res.json(materias);
    }
  })
})

app.post("/create", (req, res) => {
  const materia = new Materia(req.body);
  materia
    .save()
    .then((materia) => {
      res.json(materia);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    })
})

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Materia.findById(id, (err, materia) => {
    res.json(materia);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})