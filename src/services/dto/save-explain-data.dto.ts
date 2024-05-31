import NumerologyCalculateExplainDto from "./numerology-calculate-explain.dto";
import NumerologyExplainDto from "./numerology-explain.dto";

export default class SaveExplainDataDto {
    lang: string;
    explainList: NumerologyExplainDto[];
    calculateExplainList: NumerologyCalculateExplainDto[];
}