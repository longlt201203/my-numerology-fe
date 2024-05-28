import axios from "axios";
import Service from "./service";
import { LanguageDto } from "./dto/language.dto";

export class LanguageService extends Service {
    private static instance: LanguageService;
    static getInstance() {
        if (!this.instance) this.instance = new LanguageService();
        return this.instance;
    }

    constructor() {
        super("/language");
    }

    async getLanguages() {
        const apiUri = this.getApiUri("/");
        const response = await axios.get<LanguageDto[]>(apiUri.toString());
        return response.data;
    }
}