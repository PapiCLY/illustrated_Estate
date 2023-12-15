const multer = require('multer');
const uploadController = require('express').Router()


//images saved in public/images folder ---- next time use cloudinary!!
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename)
    }
})

const upload = multer({ storage: storage })

//checking for req.body for image
uploadController.post('/image', upload.single('image'), async(req, res) => {
    try {
        return res.status(200).json('File uploaded successfully')
    } catch (error) {
        console.log(error)
    }
})

module.exports = uploadController