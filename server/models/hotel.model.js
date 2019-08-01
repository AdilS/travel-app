var mongoose = require('mongoose');
const HotelSchema = new mongoose.Schema({
    hotelname: {
        type: String,
        trim: true,
        required: "Hotel is required",
        unique: "Hotel Already exists",
    },
    amenity_id: {type: mongoose.Schema.ObjectId, ref: 'amenities'},
    category_id: {type: mongoose.Schema.ObjectId, ref: 'categories'},
    is_offer: {
        type: String,
        trim: true,
        //required: "Hotel is required",
        //unique: "Hotel Already exists",
    },
    description: {
        type: String,
        trim: true,
        required: "Hotel Description is required"
    },
    extrafeature: {
        type: String,
        trim: true,
        required: "Extra Feature is required"
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

const Hotel = mongoose.model('hotel', HotelSchema);
module.exports= Hotel;