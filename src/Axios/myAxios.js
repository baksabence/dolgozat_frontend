import axios from "axios";

export const myAxios = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 30000,
    withCredentials: false,
    headers:{
        'Content-Type': 'application/json',
    },
});