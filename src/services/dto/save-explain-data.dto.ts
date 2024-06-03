import NumerologyCalculateExplainDto from "./numerology-calculate-explain.dto";
import NumerologyExplainDto from "./numerology-explain.dto";
import UpdateOrCreateNumberMeaningDto from "./update-or-create-number-meaning.dto";

export default class SaveExplainDataDto {
    lang: string;
    explainList: NumerologyExplainDto[];
    calculateExplainList: NumerologyCalculateExplainDto[];
    numberMeaningList: UpdateOrCreateNumberMeaningDto[];
}