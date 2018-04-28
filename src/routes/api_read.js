import axios from "axios"

export default class ReadData {
    constructor(){ }    

    displayDptById = (dId) => {
        return axios.get("/api/get/department/" + dId)
    }

    displayEmpById = (eId) => {
        return axios.get("/api/get/employee/", eId)
    }

    displayDepartments = () => {
        return axios.get("/api/get/departments")
    }

    displayEmployees = () => {
        return axios.get("/api/get/employees")
    }
}