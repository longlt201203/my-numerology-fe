import i18next, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const resources: Resource = {
    en: {
        translation: {
            "key": ""
        }
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        interpolation: {
            escapeValue: false
        }
    })

export default i18next;