import axios, { AxiosRequestConfig } from "axios";
import ApiResponseDto from "./dto/api-response.dto";

export default class Service {
    constructor(
        protected readonly basePath: string
    ) {}

    getApiUri(path: string) {
        return new URL(import.meta.env.VITE_API_URI+this.basePath+path);
    }

    async get<T>(uri: string, config?: AxiosRequestConfig) {
        const response = await axios.get<ApiResponseDto<T>>(uri, config);
        return response.data.data;
    }

    async put<T>(uri: string, data: any, config?: AxiosRequestConfig) {
        const response = await axios.put<ApiResponseDto<T>>(uri, data, config);
        return response.data.data;
    }
}