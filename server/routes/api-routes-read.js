const Sequelize = require('sequelize');
const models = require('../models') // DB's models
var sequelize = models.sequelize


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

    app.get("/api/get/employee/:id", (req, res) => {
        db.employee.findOne({ where: { id: req.params.id } })
            .then(data => {
                let aEmp = {
                    employee: data[0],
                    departments: {},
                    salary: {},
                    title: {}
                }
                let eId = aEmp.employee.id
                db.salary.findOne({ // delete "department-employee" relationship
                    where: { employeeId: eId },
                    attritutes: ['salary']
                }).then(data => {
                    aEmp.salary = data[0].salary
                    db.title.findOne({ // delete the "title" of the employee
                        where: { employeeId: eId },
                        attritutes: ['title']
                    }).then(data => {
                        aEmp.title = data[0].title
                        db.dept_manager.findOne({ // delete the "salary" of the employee
                            where: { employeeId: eId },
                            attributes: ['dept_no']
                        }).then(data => {
                            if (!data) { // the employee is not a manager
                                db.dept_emp.findOne({
                                    where: { employeeId: eId },
                                    attributes: ['dept_no']
                                })
                                    .then(data => {
                                        if (!data)
                                            throw new Error();
                                        else {
                                            db.department.findOne({
                                                where: { id: data[0].id },
                                                attributes: ['dept_name']
                                            }).then(data => {
                                                aEmp.department.name = data[0].dept_name
                                                aEmp.department.isManager = false
                                                res.status(200).json(aEmp)
                                            })
                                        }
                                    }).catch(err => res.status(400).json("Error in resquest in the table 'dept_emp' for '" + aEmp.first_name) + " " + aEmp.last_name + "'")
                            }
                            else { // the employee is a manager
                                db.department.findOne({
                                    where: { id: data[0].id },
                                    attributes: ['dept_name']
                                })
                                    .then(data => {
                                        if (!data) {
                                            aEmp.department.name = data[0].dept_name
                                            aEmp.department.isManager = true
                                            res.status(200).json(aEmp)
                                        }
                                        else res.status(400).json("Error: '" + aEmp.first_name + " " + aEmp.last_name + "' is not belonging to any department")
                                    })
                                    .catch(err => res.status(400).json("Error: could not make request to 'department'"))
                            }
                        }).catch(err => res.status(400).json("Error in resquest in the table 'dept_manager' for '" + aEmp.first_name) + " " + aEmp.last_name + "'")
                    }).catch(err => res.status(400).json("Error: '" + aEmp.first_name) + " " + aEmp.last_name + "' has no title")
                }).catch(err => res.status(400).json("Error: '" + aEmp.first_name) + " " + aEmp.last_name + "' has no salary")
            }).catch(err => res.status(400).json("Could not make request 'employee.findAll()'"))
    })

    app.get("/api/get/employee/all", (req, res) => {
        db.employee.findAll()
            .then(data => {
                let result = [];
                const listAllEmp = (lEmp) => {
                    if (lEmp.length) {
                        let aEmp = {
                            employee: lEmp.shift(),
                            departments: {},
                            salary: {},
                            title: {}
                        }
                        let eId = aEmp.employee.id
                        db.salary.findOne({ // delete "department-employee" relationship
                            where: { employeeId: eId },
                            attritutes: ['salary']
                        }).then(data => {
                            aEmp.salary = data[0].salary
                            db.title.findOne({ // delete the "title" of the employee
                                where: { employeeId: eId },
                                attritutes: ['title']
                            }).then(data => {
                                aEmp.title = data[0].title
                                db.dept_manager.findOne({ // delete the "salary" of the employee
                                    where: { employeeId: eId },
                                    attributes: ['dept_no']
                                }).then(data => {
                                    if (!data) { // the employee is not a manager
                                        db.dept_emp.findOne({
                                            where: { employeeId: eId },
                                            attributes: ['dept_no']
                                        })
                                            .then(data => {
                                                if (!data)
                                                    throw new Error();
                                                else {
                                                    db.department.findOne({
                                                        where: { id: data[0].id },
                                                        attributes: ['dept_name']
                                                    }).then(data => {
                                                        aEmp.department.name = data[0].dept_name
                                                        aEmp.department.isManager = false
                                                        result.push(aEmp) // Got all information for this employee: save it!
                                                        listAllEmp(lEmp)
                                                    })
                                                }
                                            }).catch(err => res.status(400).json("Error in resquest in the table 'dept_emp' for '" + aEmp.first_name) + " " + aEmp.last_name + "'")
                                    }
                                    else { // the employee is a manager
                                        db.department.findOne({
                                            where: { id: data[0].id },
                                            attributes: ['dept_name']
                                        }).then(data => {
                                            aEmp.department.name = data[0].dept_name
                                            aEmp.department.isManager = true
                                            result.push(aEmp) // Got all information for this employee: save it!
                                            listAllEmp(lEmp)
                                        }).catch(err => res.status(400).json("Error: '" + aEmp.first_name) + " " + aEmp.last_name + "' is not belonging to any department")
                                    }
                                }).catch(err => res.status(400).json("Error in resquest in the table 'dept_manager' for '" + aEmp.first_name) + " " + aEmp.last_name + "'")
                            }).catch(err => res.status(400).json("Error: '" + aEmp.first_name) + " " + aEmp.last_name + "' has no title")
                        }).catch(err => res.status(400).json("Error: '" + aEmp.first_name) + " " + aEmp.last_name + "' has no salary")
                    }
                    else  // got all data from all of the employee
                        res.status(200).json(result)
                }
                // execute the function 'listAllEmp'
                listAllEmp([...data])
            }).catch(err => res.status(400).json("Could not make request 'employee.findAll()'"))
    })
}