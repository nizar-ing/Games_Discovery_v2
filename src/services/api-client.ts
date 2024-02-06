import axios, {AxiosRequestConfig} from "axios";
import {FetchResponse} from "../models/FetchResponse.ts";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6cb9184206a749048e4fc2111da680a6'
    }
});

class ApiClient<T> {
    constructor(private endpoint: string) {}

    getAll = async (config?: AxiosRequestConfig):  Promise<FetchResponse<T>> => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then((response) => response.data);
    }
}

export default ApiClient;


