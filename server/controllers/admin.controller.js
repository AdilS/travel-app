const CategoryModel = require('../models/category.model');
const AmenitiesModel = require('../models/amenities.model');
const HotelModel = require('../models/hotel.model');
var errorHandler = require('./../helpers/dbErrorHandler');

const checkCategory =  (req, res) => {
    console.log(req.body.categoryname);
    // return false;
  // alert(req.body.email);
  // alert('dsd');
  CategoryModel.findOne({
      "categoryname": 'WiFi'
    }, (err, category) => {
  //console.log(category);
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
  const amenityId = (req, res, next, id) => {
    AmenitiesModel.findById(id).exec((err, amenity) => {
      if (err || !amenity)
        return res.status('400').json({
          error: "cat not found"
        })
      req.amenity = amenity
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
  const updateamenitybyId =(req, res)=>{
    AmenitiesModel.updateOne({'_id':req.amenity._id},
    {'$set': { 'amenityname': req.body.amenityname }},
    (err, amenity) => {
      if (err) {
        return res.status(400).send({
          error: errorHandler.getErrorMessage(err)
        })
      }
      return res.json(amenity)
    })
  }

  const getamenities = (req, res, next) => {
    AmenitiesModel.find((err, amenities) => {
      if (err) {
          return res.status(400).json({
              error: errorHandler.getErrorMessage(err)
          })
      }
      res.json(amenities);
  });
  }


  const addamenity = (req, res, next) => { 
     console.log(req.body.name);
    // return false;
    const amenity = new AmenitiesModel(req.body)
    amenity.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json({
        message: "Amenity Created Successfully!"
      })
    })
  }

  const getamenitiesbyname = (req, res) => {
     
    AmenitiesModel.find( {'amenityname' : new RegExp(req.body.searchParam, 'i') }, (err, amenities) => {
       if (err) {
         return res.status(400).json({
           error: errorHandler.getErrorMessage(err)
         })
       }
      return res.json(amenities)
     })
   }

   const getamenitybyId = (req, res) => {
   //  console.log(JSON.stringify(req))
    AmenitiesModel.findById( req.amenity._id, (err, amenity) => {
       if (err) {
         return res.status(400).json({
           error: errorHandler.getErrorMessage(err)
         })
       }
      return res.json(amenity)
     })
   }
   const addhotel = (req, res, next) => {
    const hotel = new HotelModel(req.body)
    hotel.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json({
        message: "Added Successfully !"
      })
    })
  }
  const gethotel = (req, res, next) => {
    HotelModel.find().populate('amenity_id','amenityname').populate('category_id','categoryname').exec((err,hotels)=>{
      if(err){
        return res.status(400).json({
          err
      })
      }else{
        res.json(hotels);
      }
    });
  }

  const filterhotels =(req, res, next) =>{
    const filterObj={};
    if(req.body.searchParam!=''){
      filterObj.hotelname =  new RegExp(req.body.searchParam, 'i');
    }
    if(req.body.amenity!=''){
      filterObj.amenity_id =  req.body.amenity;
    }
    if(req.body.category!=''){
      filterObj.category_id =  req.body.category;
    }

    HotelModel.find(filterObj).populate('amenity_id','amenityname').populate('category_id','categoryname').exec((err,hotels)=>{
      if(err){
        return res.status(400).json({
          err
      })
      }else{
        res.json(hotels);
      }
    });
  }
module.exports = {checkCategory,create,getcategory,getcategorybyId,catById,updatecategorybyId,getamenities,addamenity,getamenitiesbyname,getamenitybyId,amenityId,updateamenitybyId , addhotel,gethotel,filterhotels};