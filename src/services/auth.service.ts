import GetAuthUriDto from "./dto/get-auth-uri.dto";
import LoginGoogleQueryDto from "./dto/login-google-query.dto";
import ProfileDto from "./dto/profile.dto";
import TokenResponseDto from "./dto/token-response.dto";
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
        const apiUri = this.getApiUri("/uri", dto);
        return this.get<string>(apiUri.toString());
    }

    loginWithGoogle(dto: LoginGoogleQueryDto) {
        const apiUri = this.getApiUri("/login-google", dto);
        return this.get<TokenResponseDto>(apiUri.toString());
    }

    signUpWithGoogle(dto: LoginGoogleQueryDto) {
        const apiUri = this.getApiUri("/sign-up-google", dto);
        return this.get<TokenResponseDto>(apiUri.toString());
    }

    getProfile() {
        const apiUri = this.getApiUri("/profile");
        return this.get<ProfileDto>(apiUri.toString());
    }
}