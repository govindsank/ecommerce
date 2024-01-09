import axios from "axios";

let token = localStorage.getItem("token");

export function getProfile(token) {
    if(token) {
        return axios.get("/profile",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}

export function register(data) {
    return axios.post("/register", data);
}

export function login(data) {
    return axios.post("/login", data);
}

export function addProducts(data) {
    return axios.post("/add-products",data,{
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "mulipart/form-data"
        }
    });
}