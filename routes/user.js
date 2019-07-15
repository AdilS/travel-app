const Category=require('../models/hmscategory');
const UserModel = require('../models/user');
const Todo = require('../models/todo');


var express = require("express");
var router = express.Router();

router.get("/hmsuser", function(req, res, next) {
  UserModel.find({})
    .then(data => res.json(data))
    .catch(next)
});
router.get('/hmscategory', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Category.find({})
    .then(data => res.json(data))
    .catch(next)
});

router.get('/todo', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Todo.find({})
    .then(data => res.json(data))
    .catch(next)
});
router.post('/signup', (req, res, next) => {
  var name= req.body.name;
  var email= req.body.email;
  var password= req.body.password;
  const user=new UserModel({'name':name,'email':email,'password':password});
 // res.send(console.log(req.body.email));
  user.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
  //res.send(console.log(req.body.email));
  //this will return all the data, exposing only the id and action field to the client
  
});
function checkEmail(reg,res,next){

}
module.exports = router;