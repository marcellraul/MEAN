'use strict'

const Products = require('../models/products')

async function createProducts ( req, res){
    const { nombre,description,estado }  = req.body
    const newproducts = {
        //codigo : codigo,
        nombre: nombre,
        description: description,
        estado: estado
    }
    const p = new Products(newproducts)
    await p.save()
    console.log('Saving Products')
    console.log(req.body)
    return res.json({
        message: 'Products seccessfuly saved',
        p
    })
}

async function getProducts(req,res){
    const gets = await Products.find()
    console.log(gets)
    return res.json(gets)
}

async function getProduct(req,res){
    const {id} = req.params 
    const get = await Products.findById(id)
    console.log(get)
    return res.json(get)
}

async function deleteProduct(req,res){
    const {id} = req.params 
    const deletep = await Products.findByIdAndDelete(id)
    return res.json({ message: 'Product Deleted' });

}

async function updateProduct(req,res){
    const {id} = req.params
    const { nombre,description,estado }  = req.body
    const updatep = await Products.findByIdAndUpdate(id,{nombre,description,estado},{new : true})
    return res.json({
        message: 'Successfully updated',
        updatep
    })
}

module.exports = {
    createProducts,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
 
}