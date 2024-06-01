import { useContext } from "react";
import LanguageContext from "../contexts/language.context";

export default function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LangProvider is missing!");
    return context;
}