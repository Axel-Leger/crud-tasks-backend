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
crtl.crearTaks = async ( req,res)=>{
    try{
        const { title}= req.body;
        const conexion = await conectDB();
        await conexion.query('INSERT INTO  tasks ( title, description, isComplete) VALUES (?,?,?)',[
            title
        ]) ;

            res.json({
                msg:'tarea creada'
            }) 
    }catch(error){
        res.status(500).json({msg:'error interno del servidor',error})
    }
    
}


module.exports = crtl