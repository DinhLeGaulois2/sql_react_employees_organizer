import axios from "axios"

export default class AddData {
    constructor(){ }

    addDepartment = (data) => {
        return axios.post("/api/add/department", data)
    }

    addEmployee = (data) => {
        let obj = []
        return axios.post("/api/add/employee", obj)
    }
}