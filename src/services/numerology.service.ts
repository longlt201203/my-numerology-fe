import GetNumerologyEntriesQueryDto from "./dto/get-numerology-entries-query.dto";
import Service from "./service";
import NumerologyEntryDto from "./dto/numerology.dto";
import GetExplainDataQueryDto from "./dto/get-explain-data-query.dto";
import GetExplainDataResponseDto from "./dto/get-explain-data-response.dto";
import UpdateOrCreateExplainDto from "./dto/update-or-create-explain.dto";
import UpdateOrCreateCalculateExplainDto from "./dto/update-or-create-calculate-explain.dto";
import NumerologyExplainDto from "./dto/numerology-explain.dto";
import NumerologyCalculateExplainDto from "./dto/numerology-calculate-explain.dto";
import SaveExplainDataDto from "./dto/save-explain-data.dto";

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
        const apiUri = this.getApiUri("/get-entries", query);
        return this.get<NumerologyEntryDto[]>(apiUri.toString());
    }

    updateOrCreateEntry(entry: NumerologyEntryDto) {
        const apiUri = this.getApiUri("/update-or-create-entry");
        return this.put<NumerologyEntryDto>(apiUri.toString(), entry);
    }

    getExplainData(query: GetExplainDataQueryDto) {
        const apiUri = this.getApiUri("/explain-data", query);
        return this.get<GetExplainDataResponseDto>(apiUri.toString());
    }

    updateOrCreateExplain(dto: UpdateOrCreateExplainDto) {
        const apiUri = this.getApiUri("/update-or-create-explain");
        return this.put<NumerologyExplainDto>(apiUri.toString(), dto);
    }

    updateOrCreateCalculateExplain(dto: UpdateOrCreateCalculateExplainDto) {
        const apiUri = this.getApiUri("/update-or-create-calculate-explain");
        return this.put<NumerologyCalculateExplainDto>(apiUri.toString(), dto);
    }

    saveExplainData(dto: SaveExplainDataDto) {
        const apiUri = this.getApiUri("/save-explain-data");
        return this.put(apiUri.toString(), dto);
    }
}