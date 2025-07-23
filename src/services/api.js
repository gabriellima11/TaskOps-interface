import axios from "axios";

export const api = axios.create({
    baseURL: 'https://tasks-ops-backend.vercel.app/api',
});