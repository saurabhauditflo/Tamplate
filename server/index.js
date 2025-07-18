var createError = require('http-errors');
// server.js
require('dotenv').config();   // ← loads .env into process.env
const connection = require("./Modal/MongoDb")
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")
const {setToken,verifyToken} = require("./Helper/jwtVerification")
const verifyFirebaseToken = require("./Middleware/verifyFirebaseToken");
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var Meddleware = require("./Middleware/error")

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173"}))
app.use((req,res,next)=>{
    req.user = null
    console.log("headers",req.headers)
    if(!req.headers.authorization) return next()
        
        let token = req.headers.authorization.split("Bearer ")[1]
        let user = verifyToken(token)
        req.user = user;
             console.log("headers",req.headers.authorization,req.user)
      return  next()
   
        


   
   return next()
})
// app.use('/', indexRouter);
app.use('/api/v1', usersRouter);
app.use('/api/v1', loginRouter);    

// catch 404 and forward to error handler


// error handler
app.use(Meddleware)

connection()
app.listen( 5000,()=>{
console.log(`server running on port 5000`)
})

module.exports = app;
