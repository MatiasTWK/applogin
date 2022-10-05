//ESQUEMA,TABLA DE DATOS CON SU FORMATO
const mongoose = require('mongoose')


const UsuarioSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true
        },
        lastname:{
            type:String,
            unique:true
        },
        rut:{
            type:String,
            unique:true
        },
        pass:{
            type:String,
            unique:true
        },
        email:{
            type:String,
            unique:true
        },
        rol:{
            type:String,
            unique:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

//MODELO (NOMBRE DE LA TABLA)
const Users = new mongoose.model('usuarios',UsuarioSchema)

//EXPORTAR USUARIOS

module.exports = {Users}