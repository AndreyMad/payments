import axios from "axios";

const ip = "http://locallhost:3000/payments/api";





export const getNotes = ()=>{
    return axios.get(`${ip}/getnotes`)
}

export const createUser = (user) => {
    return axios.post(`${ip}/itop/api/createuser`, { user });
  };