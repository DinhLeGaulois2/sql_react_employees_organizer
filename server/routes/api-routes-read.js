const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    app.get("/api/get/department/:id", (req, res) => {
        db.department.findOne({ where: { id: req.params.id } })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/department/all", (req, res) => {
        db.department.findAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
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