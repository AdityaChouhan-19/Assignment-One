const express = require('express');
const morgan = require('morgan');
const router = express.Router();


let indexRouteController = require("../controllers/index");

router.get("/", morgan('tiny'),indexRouteController.routeToHomepage);

router.get("/homepage", morgan('tiny'),indexRouteController.routeToHomepage);

router.get("/services", morgan('tiny'),indexRouteController.routeToServices);

router.get("/projects", morgan('tiny'),indexRouteController.routeToProjects);

router.get("/about", morgan('tiny'),indexRouteController.routeToAbout);

router.get("/contact", morgan('tiny'),indexRouteController.routeToContact);

module.exports = router;
