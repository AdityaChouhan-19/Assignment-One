/*
File name: index.js
Creator: Aditya Chouhan
Student ID: 301215583
Date : 8 October; 2022
*/ 
const express = require('express');
const morgan = require('morgan');
const router = express.Router();

//Impoting controller routes
let indexRouteController = require("../controllers/index");

//GET launch page i.e. homepage
router.get("/", morgan('tiny'),indexRouteController.routeToHomepage);
//GET homepage
router.get("/homepage", morgan('tiny'),indexRouteController.routeToHomepage);
//GET services page
router.get("/services", morgan('tiny'),indexRouteController.routeToServices);
//GET projects page
router.get("/projects", morgan('tiny'),indexRouteController.routeToProjects);
//GET about page
router.get("/about", morgan('tiny'),indexRouteController.routeToAbout);
//GET services contact page
router.get("/contact", morgan('tiny'),indexRouteController.routeToContact);

module.exports = router;
