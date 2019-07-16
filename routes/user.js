const Category=require('../models/hmscategory');
const UserModel = require('../models/user');
const Todo = require('../models/todo');
// Load input validation
const validateRegisterInput = require("../validation/login");
const validateLoginInput = require("../validation/register");

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

router.post("/login", (req, res) => {
  // Form validationconst { errors, isValid } = validateLoginInput(req.body);// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.post("/register", (req, res) => {
   validationconst { errors, isValid } = validateRegisterInput(req.body);// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
module.exports = router;


