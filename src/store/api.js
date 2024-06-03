import axios from 'axios';
import {baseURL, jwtToken} from "./consts";

const api = axios.create({
    baseURL: baseURL,
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(jwtToken);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api
