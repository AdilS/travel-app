const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const CategorySchema = new Schema({
  category_name: {
    type: String,
    required: [true, 'The todo text field is required']
  }
})

//create model for todo
const Category = mongoose.model('category', CategorySchema);

module.exports = Category;