import axios from "axios";


const ip = "http://localhost:80/payments/api";


export const getNotes = (token)=>{
    return axios.get(`${ip}/getnotes`, {headers:{token}})
}

export const getUsers = (token)=>{
    return axios.get(`${ip}/getusers`, {headers:{token}})
}

export const createUser = ( token, user) => {
  console.log(token)
  console.log(user)
    return axios.post(`${ip}/createuser`, {headers:{token}, user });
  };

  export const deleteUser = (token, userId) => {
    return axios.post(`${ip}/itop/api/createuser`, {headers:{token},userId });
  };
