/*
File name: server.js
Creator: Aditya Chouhan
Student ID: 301215583
Date : 8 October; 2022
*/ 
const app = require('./config/express');

//Setting up the Port
app.listen(process.env.PORT || 3000);



