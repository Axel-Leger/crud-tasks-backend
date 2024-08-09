
const {traerTareas,traerTareasID,crearTaks,ModificarTarea,eliminarTarea} = require("../controllers/controladores")
export const router = require("express").Router();

//obtener todas las tareas
router.get("/task", traerTareas);
//obtener por id 
router.get("/task/:id", traerTareasID);
//crear tarea
router.post("/task", crearTaks);
//modificar tarea
router.put("/task/:id", ModificarTarea);
//eliminar tarea
router.delete("/task/:id", eliminarTarea);

