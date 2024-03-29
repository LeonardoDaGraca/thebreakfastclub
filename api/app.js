var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const db = require("./db/database.js");
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();
//const apiPort = 9000;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//on error of database
db.on("error", console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', indexRouter);
//app.use('/users', usersRouter);

//listen for port 9000 for api
//app.listen(apiPort, () => {console.log(`Server running on port ${apiPort}`)});

app.use(passport.initialize());

require('./authenticate');

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  //res.redirect('/');
  res.end('Logged in!');
})

// catch 404 and forward to error handler
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
