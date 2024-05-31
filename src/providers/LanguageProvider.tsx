import { PropsWithChildren, useEffect, useState } from "react";
import LanguageContext from "../contexts/LanguageContext";
import { LanguageDto } from "../services/dto/language.dto";
import { LanguageService } from "../services/language.service";

export default function LanguageProvider(props: PropsWithChildren) {
    const languageService = LanguageService.getInstance();
    const [languages, setLanguages] = useState<LanguageDto[]>([]);
    const [currentLanguage, setCurrentLanguage] = useState<LanguageDto | null>(null);

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

    const changeLanguage = (code: string) => {
        const language = languages.find(item => item.code == code);
        if (!language) throw new Error("Language not found!");
        setCurrentLanguage(language);
    }

    return (
        <LanguageContext.Provider value={{ languages, changeLanguage, currentLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}