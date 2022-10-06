const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('../app/routes/index');

const app = express();

const path = require( "path" );

//const exp = require('constants');

app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname, '../app/views'));
app.set('layout', 'template/template');

app.use(expressLayouts);
app.use(express.static('public'));
app.use('css', express.static(__dirname + '../public/css'));

app.use('/', indexRouter);


module.exports = app;