import NumerologyCalculateExplainDto from "./numerology-calculate-explain.dto";
import NumerologyExplainDto from "./numerology-explain.dto";

export default class GetExplainDataResponseDto {
    explainList: NumerologyExplainDto[];
    calculateExplainList: NumerologyCalculateExplainDto[];
}