const express = require("express");
const router = express.Router();

module.exports.routeToHomepage = (req, res, next) => {
    res.render("homepage", {
        title: "Homepage"
    });
};