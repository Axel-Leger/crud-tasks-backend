
const {traerTareas} = require("../controllers/controladores")
const router = require("express").Router();

//obtener todas las tareas
router.get("/task", traerTareas);

module.exports= router;