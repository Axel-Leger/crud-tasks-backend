const express = require("express");
const morgan  = require('morgan');
const {db}= require('./BD/baseDeDatos')

const app = express();
app.use(express.json());
app.use(morgan('dev'))

//rutas
app.use(require('./Routers/taks.routes'))
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`el servidor esta corriendo en el puerto: ${PORT}`);
});