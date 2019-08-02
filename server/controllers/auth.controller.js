const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const config = require("../../config/config.js");
const nodemailer = require('nodemailer');


const signin = (req, res) => {
  User.findOne(
    {
      email: req.body.email
    },
    (err, user) => {
      if (err || !user)
        return res.status("401").json({
          error: "User not found"
        });

      if (!user.authenticate(req.body.password)) {
        return res.status("401").send({
          error: "Email and password don't match."
        });
      }

      const token = jwt.sign(
        {
          _id: user._id
        },
        "cat"
      );

      res.cookie("t", token, {
        expire: new Date() + 9999
      });

      return res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          seller: user.seller
        }
      });
    }
  );
};

const signout = (req, res) => {
  res.clearCookie("t");
  return res.status("200").json({
    message: "signed out"
  });
};

// const requireSignin =(req,res)=>{
// console.log('ew');
// }
const requireSignin = expressJwt({
  secret: "cat",
  userProperty: "auth"
});

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status("403").json({
      error: "User is not authorized"
    });
  }
  next();
};

const checkemail = (emailData, res) => {
  const email =emailData.body.email;
  User.findOne(emailData.body, (err, user) => {
    if (user) {
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'adilmlab@gmail.com',
          pass: 'Lida@9454'
        }
        
      });

      var mailOptions = {
        from: 'adilmlab@gmail.com',
        to: 'adilcareer@gmail.com',
        subject: 'Forgetpassword',
        text: ' Your password recovery mail Click<a href="ghghg"> Here to reset</a>'
      };

      transporter.sendMail(mailOptions, function(error, info){
        console.log('++++++++++++++++');
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
      return res.status("401").json({
        alreadyexists: true
      });
    } else {
        
      return res.json({
        alreadyexists: false
      });
    }
  });
};

module.exports = {
  signin,
  signout,
  requireSignin,
  hasAuthorization,
  checkemail
};
