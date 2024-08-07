const express = require("express")
const {bd} = require("../BD/baseDeDatos")
const crtl = {}

//traer todas las tareas
crtl.traerTareas = async (req,res)=>{
    try {
        const coneccion = await bd();

        const [result]= await coneccion.query('SELECT * FROM tasks')
            return  res.json(result)
        

    } catch (error) {
        console.log(error);
        
        res.status(500).json({msg:"error en el servidor"})
    }
}


//crear tareas
crtl.crearTaks = async ( req,res)=>{
    try{
        const {title,description,isComplete}= req.body;
        const conexion = await bd();
        await conexion.query('INSERT INTO  tasks ( title, description, isComplete) VALUES (?,?,?)',[
            title,description,isComplete]) ;

            res.json({
                msg:'tarea creada'
            }) 
    }catch(error){
        res.status(500).json({msg:'error interno del servidor',error})
    }
    
}

//obtener por id 

crtl.traerTareasID = async (req,res)=>{
    try {
        const coneccion = await bd();
        const {id} = req.params

        const [result]= await coneccion.query("SELECT * FROM tasks WHERE idTarea = ?", [id])
            return  res.json(result)

    } catch (error) {
        console.log(error);
        
        res.status(500).json({msg:"error en el servidor"})
    }
}

//modificar tarea
crtl.ModificarTarea = async (req,res)=>{
    
    const coneccion = await bd();
    const {id} = req.params
    const {title,description,isComplete} = req.body
    try {
        const [encontrarTarea] = await coneccion.query("SELECT * FROM tasks WHERE idTarea = ?", [id])
        if(encontrarTarea.length === 0){
            console.log("tarea no encontrada");
        }else{
            const [result]= await coneccion.query("UPDATE tasks SET title= ?,description= ?,isComplete= ? WHERE idTarea = ?", [title,description,isComplete,id])
            if(!result.ok){
                return  res.status(200).json({msg:"se modifico con exito la tarea"});
            }else{
                return res.status(404).json({msg:'ocurrio un error al editar la tarea '})
            }
            
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({msg:"error en el servidor"})
    }
}



//eliminar tarea
crtl.eliminarTarea = async (req,res)=>{
    
    const coneccion = await bd();
        const {id} = req.params
    try {
        const [resultado]= await coneccion.query('DELETE FROM tasks WHERE idTarea = ?',[id]);
        if(!resultado.ok){
            res.status(200).json({msg:'tarea eliminada correctamente'});
        }

    } catch (error) {
        console.log(error);
        
        res.status(500).json({msg:"error en el servidor"})
    }
}

module.exports = crtl