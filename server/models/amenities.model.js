var mongoose = require('mongoose');

const AmenitySchema = new mongoose.Schema({
    amenityname: {
        type: String,
        trim: true,
        required: "Amenityname is required",
        unique: "Amenityname Already exists",
    },
    
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    },
    status : {
        type : Number,
        default : 1
    }
});

const Amenityname = mongoose.model('amenities', AmenitySchema);
module.exports= Amenityname;