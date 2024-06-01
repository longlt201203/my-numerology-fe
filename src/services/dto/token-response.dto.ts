import ProfileDto from "./profile.dto";

export default class TokenResponseDto {
    profile: ProfileDto;
    accessToken: string;
}