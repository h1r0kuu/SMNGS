import axios from 'axios';
import {API_AUTH_CHECK_TOKEN} from "../constants/apiConstants";

axios.interceptors.request.use((config) => {
    // config.headers = {"Access-Control-Allow-Origin": "*"}
    if(localStorage.getItem('token')) {
        if(config.headers)
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
    }
    return config
})

axios.interceptors.response.use((config) => {
    return config;
},async (error) => {
    let originalRequest = error.config
    if(error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        if(error.response) {
            if (error.response.status === 401 && localStorage.getItem("token") !== null) {
                try {
                    const response = await axios.get(`${API_AUTH_CHECK_TOKEN(localStorage.getItem("token"))}`)
                    localStorage.setItem('token', response.data.token)
                    return axios.request(originalRequest)
                } catch (e) {
                    console.log(e)
                }
            } else if (error.response.status === 500) {
                console.log("Delete token")
                delete originalRequest.headers['Authorization']
                localStorage.removeItem('token')
                return axios.request(originalRequest)
            }
        }
    }
    return Promise.reject(error)
})

export { axios };
