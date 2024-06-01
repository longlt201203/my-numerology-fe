import { useEffect, useState } from "react";
import { LanguageService } from "../../services/language.service";
import NumerologyService from "../../services/numerology.service";
import { LanguageDto } from "../../services/dto/language.dto";
import Select from "../../components/Select";
import Button from "../../components/Button";

export default function NumerologyNumber() {
    const languageService = LanguageService.getInstance();
    const numerologyService = NumerologyService.getInstance();
    const [languages, setLanguages] = useState<LanguageDto[]>([]);
    const [currentLanguage, setCurrentLanguage] = useState<LanguageDto>();

    const fetchLanguages = async () => {
        const languages = await languageService.getLanguages();
        setLanguages(languages);
    }

    useEffect(() => {
        fetchLanguages();
    }, []);

    useEffect(() => {
        setCurrentLanguage(languages[0]);
    }, [languages]);

    useEffect(() => {

    }, [currentLanguage]);

    const handleLanguageChange = (value: string) => {
        const language = languages.find(item => item.code == value);
        if (language) {
            setCurrentLanguage(language);
        }
    }

    return (
        <>
            <Select label="Language" value={currentLanguage?.code} onChange={(e) => handleLanguageChange(e.target.value)} options={languages.map((item) => ({ label: item.name, value: item.code }))} />
            {/* <Button onClick={() => handleSaveExplainData()}>Save</Button> */}
        </>
    );
}