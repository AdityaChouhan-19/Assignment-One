const express = require('express');
const router = express.Router();

let indexRouteController = require("../controllers/index");

router.get("/", indexRouteController.routeToHomepage);

router.get("/homepage", indexRouteController.routeToHomepage);

// router.get('/', (req, res) => {
//     res.render('homepage', {title: 'Homepage'});
// });

module.exports = router; 
