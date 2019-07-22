const express = require('express');
const bodyParser = require('body-parser');

// import bodyParser from 'body-parser'
//import cookieParser from 'cookie-parser'
//import compress from 'compression'
//import helmet from 'helmet'

const mongoose = require('mongoose');
const cors = require('cors');
//const routes = require('./routes/api');
const userRoute = require('./server/routes/user.route');
const authRoute = require('./server/routes/auth.routes');
const adminRoute = require('./server/routes/admin.route');
const path = require('path');

const passport = require("passport");
//const users = require("./routes/api/users");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.options('*', cors());
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

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cookieParser())
// app.use(compress())
// secure apps by setting various HTTP headers
// app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())

//app.use('/api', routes);
app.use('/api', userRoute);
app.use('/auth', authRoute);
app.use('/admin', adminRoute);
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