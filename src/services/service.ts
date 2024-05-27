import axios, { AxiosRequestConfig } from "axios";

export default class Service {
    constructor(
        protected readonly basePath: string
    ) {}

    getApiUri(path: string) {
        return new URL(import.meta.env.VITE_API_URI+this.basePath+path);
    }

    async get<T>(uri: string, config?: AxiosRequestConfig) {
        const response = await axios.get<T>(uri, config);
        return response.data;
    }
}