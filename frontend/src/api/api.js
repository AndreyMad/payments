import axios from "axios";

const ip = "http://localhost:80/payments/api";





export const getNotes = (token)=>{
    return axios.get(`${ip}/getnotes`, {headers:{token}})
}

export const createUser = (user) => {
    return axios.post(`${ip}/itop/api/createuser`, { user });
  };