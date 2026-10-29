import axios from "axios"
const API = axios.create({
    baseURL: "https://todos-web-frontend.vercel.app"


})

API.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

export default API