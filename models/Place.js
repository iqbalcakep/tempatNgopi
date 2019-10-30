const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name:{
        type:String
    },
    location:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    rating:{
        type:String
    }
})

const Place = mongoose.model('place',PlaceSchema);
module.exports = Place;