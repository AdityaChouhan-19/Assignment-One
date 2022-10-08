/*
File name: index.js
Creator: Aditya Chouhan
Student ID: 301215583
Date : 8 October; 2022
*/ 
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

module.exports.routeToProjects = (req, res, next) => {
    res.render("projects", {
        title: "Projects"
    });
};

module.exports.routeToAbout = (req, res, next) => {
    res.render("about", {
        title: "About"
    });
};

module.exports.routeToContact = (req, res, next) => {
    res.render("contact", {
        title: "Contact"
    });
};