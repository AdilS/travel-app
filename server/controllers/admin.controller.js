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
 
  const getcategory = (req, res, next) => {
    CategoryModel.find((err, users) => {
      if (err) {
          return res.status(400).json({
              error: errorHandler.getErrorMessage(err)
          })
      }
      res.json(users);
  });
  }
  const getcategorybyId = (req, res) => {
    console.log(req.query);
    console.log('+++');
    CategoryModel.find({_id: '5d36a1bb8b527f5cd3afeec2'}, (err, shops) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(shops)
    })
  }

  const catById = (req, res, next, id) => {
    CategoryModel.findById(id).exec((err, category) => {
      if (err || !category)
        return res.status('400').json({
          error: "cat not found"
        })
      req.category = category
      next()
    })
  }
module.exports = {checkCategory,create,getcategory,getcategorybyId,catById};