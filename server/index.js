const express = require('express');
const app = express();

var cookieParser = require('cookie-parser');
var createError = require('http-errors');
var path = require('path');
var mysql= require('mysql');
var logger = require('morgan');
var bodyParser= require('body-parser');
var cors = require('cors');
app.use(cors());


app.get('/',(req,res)=>{
    res.send("yul");
  });
  
app.listen(3001);


var indexRouter = require('./routes/index');
var getCapsules = require('./routes/getCapsules');
var getColors = require('./routes/getColors');
var SaveCapsule = require('./routes/SaveCapsule');


var myConnection  = require('express-myconnection');

var config = require('./config')
var dbOptions = {
    host:	  config.database.host,
    user: 	  config.database.user,
    password: config.database.password,
    port: 	  config.database.port, 
    database: config.database.db
}
  
app.use(myConnection(mysql, dbOptions, 'pool'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/getCapsules', getCapsules);
app.use('/getColors', getColors);
app.use('/SaveCapsule', SaveCapsule);




app.use(function(req, res, next) {
    next(createError(404));
  });
  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
