'use strict'
const {Schema,model}=require('mongoose')

const productsSchema = new Schema({
    //codigo :{type: String,trim: true},
    nombre :{ type:String},
    description :{type:String},
    tipo: {type:String},
    
    estado :{ type:String, default:"Activo"},

    /*imagesPath: [{
        imagePath: {
           type: String,
           
        }
    }]*/
    },
    {
        timestamps: true
    }
        )
module.exports = model ('Products', productsSchema)

/*
const {Schema, model} = require('mongoose')

const tipoUsuarioSchema = new Schema({
    //id: {type: String, required :true},
    nombre : { type: String, required: true},
    description: {type: String, required: false},
    //estado: {type: String, required: false, default: "Activo"}
    },
    {
        timestamps:true //para la fechas de creacion y update creation
    }
)

module.exports = model ('TipoUsuario', tipoUsuarioSchema)

*/