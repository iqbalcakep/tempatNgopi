const express = require('express'),
    router = express.Router(),
    readFile = require('fs').readFile,
    Place = require('../models/Place'),
    multer = require('multer'),
    crypto = require('crypto'),
    jimp = require('jimp');
var storage;


storage = multer.diskStorage({
    destination: "./public/",
    filename: function(req, file, cb) {
        return crypto.pseudoRandomBytes(16, function(err, raw) {
            if (err) {
                return cb(err);
            }
            return cb(null, "" + file.originalname);
        });
    }
});


router.get('/getPlace', function(req, res) {
    Place.find({}).then((data) => {
        var response = { status: "success", data }
        res.status(200).json(response);
    })
})

router.post('/addPlace',
    multer({
        storage: storage
    }).single('image'), async function(req, res) {
        console.log(req.file.filename);
        const image = await jimp.read('./public/' + req.file.filename);
        image.brightness(-.5).write('./public/' + req.file.filename);
        Place.create({
            name: req.body.name,
            location: req.body.location,
            image: req.file.filename,
            description: req.body.description,
            rating: req.body.rating
        }, function(err) {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: err.message
                });
            }
        })
        res.status(200).json({ status: "success", data: "" });
    });

module.exports = router;