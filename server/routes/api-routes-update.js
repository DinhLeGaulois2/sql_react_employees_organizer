const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    app.put("/api/put/employee/:id/salary/:amount", (req, res) => {

    })

    app.put("/api/put/employee/:id/title/:newTitle", (req, res) => {

    })

    app.put("/api/put/employee/:id/department/:newDptId", (req, res) => {

    })
}