import axios from "axios"

export default class DeleteData {
    constructor(){ }    

    deleteEmp= (eId) => {
        return axios.delete("/api/delete/employee/" + eId)
    }

    deleteDpt= (dId) => {
        return axios.delete("/api/delete/department/" + dId)
    }
}