import { useEffect, useState } from "react";
import { LanguageService } from "../../services/language.service";
// import NumerologyService from "../../services/numerology.service";
import { LanguageDto } from "../../services/dto/language.dto";
import Select from "../../components/Select";
// import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { numerologyNumberData } from "../../etc/constants";
import TextArea from "../../components/TextArea";

export default function NumerologyNumber() {
    const languageService = LanguageService.getInstance();
    // const numerologyService = NumerologyService.getInstance();
    const [languages, setLanguages] = useState<LanguageDto[]>([]);
    const [currentLanguage, setCurrentLanguage] = useState<LanguageDto>();
    const [numberMeaningContent, setNumberMeaningContent] = useState<{ [key: string]: string }>({});

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

    // const handleSaveNumberMeaningContent = () => {
        
    // }

    return (
        <>
            <Select label="Language" value={currentLanguage?.code} onChange={(e) => handleLanguageChange(e.target.value)} options={languages.map((item) => ({ label: item.name, value: item.code }))} />
            {/* <Button onClick={() => handleSaveExplainData()}>Save</Button> */}
            <div>
                <Typography variant="h1">Core Number Concepts</Typography>
                {numerologyNumberData.map((item) => (
                    <div key={item}>
                        <Typography variant="h3">Number {item}</Typography>
                        <TextArea value={numberMeaningContent[item]} onChange={(e) => setNumberMeaningContent({...numberMeaningContent, [item]: e.target.value})} />
                        {/* <Button variant="tertiary" onClick={() => handleSaveExplain(key)}>Save</Button> */}
                    </div>
                ))}
            </div>
        </>
    );
}