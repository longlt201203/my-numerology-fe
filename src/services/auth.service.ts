import GetAuthUriDto from "./dto/get-auth-uri.dto";
import Service from "./service";

export default class AuthService extends Service {
    private static instance: AuthService;
    static getInstance() {
        if (!this.instance) this.instance = new AuthService();
        return this.instance;
    }

    constructor() {
        super("/auth");
    }

    getAuthUri(dto: GetAuthUriDto) {
        const apiUri = this.getApiUri("/uri");
        apiUri.searchParams.set("provider", dto.provider);
        apiUri.searchParams.set("callbackMode", dto.callbackMode);
        return this.get<string>(apiUri.toString());
    }
}