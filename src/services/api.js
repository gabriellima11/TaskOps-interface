import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

api.interceptors.response.use(
    (response) => {
        // Se for login e contiver user + token, salva no storage
        if (response.config.url.includes('/login') && response.data?.token && response.data?.user) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
