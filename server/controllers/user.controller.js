var User = require('../models/user.model');
var errorHandler = require('./../helpers/dbErrorHandler');
const list = (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.json(users);
    }).select('name email updated created');

}

const create = (req, res, next) => {
    // console.log(req.body.name);
    // return false;
    const user = new User(req.body)
    user.save((err, result) => {
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

  module.exports = {create,list};