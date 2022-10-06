const express = require("express");
const router = express.Router();

module.exports.routeToHomepage = (req, res, next) => {
    res.render("homepage", {
        title: "Homepage"
    });
};

module.exports.routeToServices = (req, res, next) => {
    res.render("services", {
        title: "Services"
    });
};