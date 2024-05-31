import { createContext } from "react";
import { LanguageDto } from "../services/dto/language.dto";

export interface LanguageContextProps {
    languages: LanguageDto[];
    changeLanguage: (code: string) => void;
    currentLanguage: LanguageDto | null;
}

const LanguageContext = createContext<LanguageContextProps | null>(null);

export default LanguageContext;