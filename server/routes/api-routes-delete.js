const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    app.delete("/api/delete/department/:id", (req, res) => {

    })

    app.delete("/api/delete/employee/:id", (req, res) => {

    })
}