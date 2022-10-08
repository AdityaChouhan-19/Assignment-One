const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('../app/routes/index');
const path = require( "path" );

//Setting the view engine to ejs and setting up path of main template file
app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname, '../app/views'));
app.set('layout', 'template/template');


//Setting up path of public folder to link CSS to template.ejs
app.use(expressLayouts);
app.use(express.static('public'));
app.use('css', express.static(__dirname + '../public/css'));


//Setting up path of different ejs views for navigation bar
app.use('homepage', express.static(__dirname + '../views/homepage'));
app.use('services', express.static(__dirname + '../views/services'));
app.use('projects', express.static(__dirname + '../views/projects'));
app.use('about', express.static(__dirname + '../views/about'));
app.use('contact', express.static(__dirname + '../views/contact'));

app.use('/', indexRouter);

module.exports = app;