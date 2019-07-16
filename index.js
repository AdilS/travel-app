const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const userRoute = require('./routes/user');
const path = require('path');

const passport = require("passport");
//const users = require("./routes/api/users");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
require("./config/passport")(passport);// Routes
require('dotenv').config();
//connect to the database
mongoose.connect('mongodb://localhost:27017/pms', { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);
app.use('/user', userRoute);
app.use('/assets', express.static(__dirname + '/assets'));
app.use(cors());
app.use((err, req, res, next) => {
  console.log(err);
  next();
});
// Passport middleware
app.use(passport.initialize());// Passport config

//app.use("/api/users", users);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});