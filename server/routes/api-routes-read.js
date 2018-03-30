const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {    
    app.get("/api/get/department/:id", (req, res) => {

    })
     
    app.get("/api/get/department/all", (req, res) => {

    })
     
    app.get("/api/get/department:id/employee/all", (req, res) => {

    })
     
    app.get("/api/get/department:id/employee/:eId", (req, res) => {

    })

    app.get("/api/get/employee/:id", (req, res) => {

    })

    app.get("/api/get/employee/all", (req, res) => {

    })
}