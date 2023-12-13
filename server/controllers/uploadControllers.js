const multer = require('multer');
const uploadController = require('express').Router()


//images saved in public/images folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

//checking for req.body for image
uploadController.post('/image', upload.single('image'), (req, res) => {
    try {
        return res.status(200).json('File uploaded successfully')
    } catch (error) {
        console.log(error)
    }
})

module.exports = uploadController