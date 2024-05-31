import axios, { AxiosRequestConfig } from "axios";
import ApiResponseDto from "./dto/api-response.dto";

export default class Service {
    constructor(
        protected readonly basePath: string
    ) {}

    getApiUri(path: string, query?: any) {
        const apiUri = new URL(import.meta.env.VITE_API_URI+this.basePath+path);
        if (query) {
            for (const key in query) {
                if (Array.isArray(query[key])) {
                    for (const item of query[key]) {
                        apiUri.searchParams.append(key, item);
                    }
                } else {
                    apiUri.searchParams.set(key, query[key]);
                }
            }
        }
        return apiUri;
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