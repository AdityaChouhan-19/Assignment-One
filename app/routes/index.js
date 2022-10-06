const express = require('express');
const router = express.Router();

let indexRouteController = require("../controllers/index");

router.get("/", indexRouteController.routeToHomepage);

router.get("/services", indexRouteController.routeToServices);

module.exports = router;
