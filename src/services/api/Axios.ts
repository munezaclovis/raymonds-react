import axios from "axios";
import AccessTokenStorageManager from "../localstorage/AccessTokenStorageManager";

const Axios = axios.create({
    baseURL: process.env.REACT_APP_DEFAULT_API_URL ?? "",
    timeout: parseInt(process.env.REACT_APP_DEFAULT_API_TIMEOUT ?? "10000"),
    headers: {
        Accept: "application/json",
    },
});

Axios.interceptors.request.use(
    (request) => {
        request.url = request?.url?.replace(request.baseURL ?? "", "");
        request.headers = {
            ...request.headers,
            Authorization: `Bearer ${AccessTokenStorageManager.get()}`,
        };
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default Axios;
