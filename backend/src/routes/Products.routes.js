const {Router} =  require('express')
const router =  Router() // para crear rutas
const products = require('../services/Products.Services')

//router.route('/')    
//    .get((req,res)=> res.send('products'))

router.post('/', products.createProducts)
router.get('/', products.getProducts)
router.get('/:id', products.getProduct)
router.put('/:id', products.updateProduct)
router.delete('/:id' , products.deleteProduct)

/*
const {Router} =  require('express')
const router =  Router() // para crear rutas
const tipoUser = require('../services/TipoUsuario.services')

router.route('/')    
    .get((req,res)=> res.send('Tipo Usuario'))
router.post('/', )
router.get('/', )
router.get('/:id', )
router.put('/:id', )
router.delete('/:id', )


module.exports = router// enrutador del archivo

*/

module.exports = router// enrutador del archivo
