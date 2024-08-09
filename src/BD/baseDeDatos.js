const mysql= require("mysql2/promise")

export const bd = async ()=>{
    try{
        console.log('la conexion fue exitosa')
        return await mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"tasks_db"
        })
        
    }catch(error){
        console.log('hubo un error',error)
    }
}
