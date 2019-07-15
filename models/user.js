const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name  field is required']
  },
  email: {
    type: String,
    required: [true, 'The email  field is required']
  },
  status: {
    type: Number,
    required: [true, 'The status  field is required'],
    default: 1
  },
  created_date:{
    type: Date,
    default: Date.now
  }
})

//create model for todo
const User = mongoose.model('users', UserSchema);

module.exports = User;