var mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryname: {
        type: String,
        trim: true,
        required: "Category is required",
        unique: "Category Already exists",
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

const Category = mongoose.model('category', CategorySchema);
module.exports= Category;