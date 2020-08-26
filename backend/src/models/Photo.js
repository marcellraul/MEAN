'use strict'
const {Schema,model}=require('mongoose')

const PhotoSchema = new Schema({
    title :{type: String, required:true},
    description :{type:String},
    imagePath : String,
    },
    {
        timestamps: true
    }
        )
module.exports = model ('Photo', PhotoSchema)
