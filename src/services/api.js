import axios from "axios";

export const api = axios.create({
    baseURL: 'http://tasks-ops-backend.vercel.app/api',
});