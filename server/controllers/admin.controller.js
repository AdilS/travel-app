const CategoryModel = require('../models/category.model');


var errorHandler = require('./../helpers/dbErrorHandler');
const checkCategory =  (req, res) => {
    console.log(req.body.categoryname);
    // return false;
  // alert(req.body.email);
  // alert('dsd');
  CategoryModel.findOne({
      "categoryname": 'WiFi'
    }, (err, category) => {
  console.log(category);
      if (err || category)
        return res.status('401').json({
          error: "Invalid req"
        })
  
  
      return res.json({
        msg: "Success"
      })
  
    })
  }
  const create = (req, res, next) => {
    // console.log(req.body.name);
    // return false;
    const category = new CategoryModel(req.body)
    category.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json({
        message: "Successfully signed up!"
      })
    })
  }
 

module.exports = {checkCategory,create};