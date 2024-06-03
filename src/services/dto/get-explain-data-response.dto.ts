import NumerologyCalculateExplainDto from "./numerology-calculate-explain.dto";
import NumerologyExplainDto from "./numerology-explain.dto";
import NumerologyNumberMeaningDto from "./numerology-number-meaning.dto";

export default class GetExplainDataResponseDto {
    explainList: NumerologyExplainDto[];
    calculateExplainList: NumerologyCalculateExplainDto[];
    numerologyMeaningList: NumerologyNumberMeaningDto[];
}