const express = require('express');
const router = express.Router();

let indexRouteController = require("../controllers/index");

router.get("/", indexRouteController.routeToHomepage);

router.get("/homepage", indexRouteController.routeToHomepage);

router.get("/services", indexRouteController.routeToServices);

router.get("/projects", indexRouteController.routeToProjects);

router.get("/about", indexRouteController.routeToAbout);

router.get("/contact", indexRouteController.routeToContact);

module.exports = router;
