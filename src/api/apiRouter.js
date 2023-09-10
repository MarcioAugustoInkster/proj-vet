import axios from "axios";

export const apiRouter = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});
