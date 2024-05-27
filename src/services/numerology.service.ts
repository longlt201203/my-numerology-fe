import GetNumerologyEntriesQueryDto from "./dto/get-numerology-entries-query.dto";
import Service from "./service";
import NumerologyEntryDto from "./dto/numerology.dto";

export default class NumerologyService extends Service {
    private static instance: NumerologyService;
    static getInstance() {
        if (!this.instance) this.instance = new NumerologyService();
        return this.instance;
    }

    constructor() {
        super("/numerology");
    }

    getEntries(query: GetNumerologyEntriesQueryDto) {
        const apiUri = this.getApiUri("/get-entries");
        if (query.type) apiUri.searchParams.set("type", query.type);
        if (query.lang) apiUri.searchParams.set("lang", query.lang);
        return this.get<NumerologyEntryDto[]>(apiUri.toString());
    }
}