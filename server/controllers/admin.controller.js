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
   // console.log(req.category)
    CategoryModel.findById( req.category._id, (err, category) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
     return res.json(category)
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

  const updatecategorybyId =(req, res)=>{
    CategoryModel.updateOne({'_id':req.category._id},
    {'$set': { 'categoryname': req.body.categoryname }},
    (err, category) => {
      if (err) {
        return res.status(400).send({
          error: errorHandler.getErrorMessage(err)
        })
      }
      return res.json(category)
      //req.body.order.payment_id = customer.id
    //  next()
    })
  }
module.exports = {checkCategory,create,getcategory,getcategorybyId,catById,updatecategorybyId};