var express = require('express');
var todoController = require('./controllers/todoController') // require controllers

var app = express();

// set up template engine
app.set('view engine','ejs');

// static files , our middleware
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
var port=3089;
app.listen(port);
console.log('Listening to port ' + port);

// Express: Provides small and robust tooling for HTTP servers
// app.set : Express instance to store and retrieve variables
// app.use: Used as middleware

// EJS: Simlple templating language that lets you generate HTML markup with plain JavaScript
// Body-Parser: Body Parsing Middleware
