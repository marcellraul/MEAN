/*const path = require('path')
const { v4: uuidv4 } = require('uuid');
const multer = require('multer')


const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname) +'-' + Date.now())
    }
})*/
const path = require('path')
const multer = require('multer')
const fs = require('fs-extra')
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../uploads'),
    filename:  (req, file, cb) => {
        cb(null, uuidv4() +'-' + Date.now()+ path.extname(file.originalname) )
    }
})

const uploadImage = multer({
    storage,
}).single('image')


/*
uploadImage(req, res)  => {
    if (err) {
        err.message = 'The file is so heavy for my service';
        return res.send(err)
    }
    console.log(req.file)
    console.log(req.body)
    res.send('uploaded photoss')
})*/

//export default  multer({storage})
exports.default = { storage }

//module.exports = {storage,uploadImage,uploadImage2, multer}