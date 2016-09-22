var express = require('express');
var handlebars = require('express-handlebars');
var path = require('path');

var app = express();

app.engine('handlebars', handlebars());

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/bower',express.static('bower_components'));
app.use('/',express.static('appFiles'));


var homePage = require('./page/home');
app.use(homePage);


app.listen('9001');


console.log('Server running');