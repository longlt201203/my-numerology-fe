import { useEffect, useState } from "react";
import Typography from "../../components/Typography";
import { LanguageService } from "../../services/language.service";
import { LanguageDto } from "../../services/dto/language.dto";
import NumerologyService from "../../services/numerology.service";
import Select from "../../components/Select";
import { numerologyExplainTypeData, numerologyNumberData, numerologyTypeData } from "../../etc/constants";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import SaveExplainDataDto from "../../services/dto/save-explain-data.dto";

export default function NumerologyMeaning() {
    const languageService = LanguageService.getInstance();
    const numerologyService = NumerologyService.getInstance();
    const [languages, setLanguages] = useState<LanguageDto[]>([]);
    const [currentLanguage, setCurrentLanguage] = useState<LanguageDto>();
    const [explainContent, setExplainContent] = useState<{ [key: string]: string }>({});
    const [calculateExplainContent, setCalculateExplainContent] = useState<{ [key: string]: string }>({});
    const [numberMeaningContent, setNumberMeaningContent] = useState<{ [key: number]: string }>({});

    const fetchLanguages = async () => {
        const languages = await languageService.getLanguages();
        setLanguages(languages);
    }

    const fetchExplainData = async () => {
        if (currentLanguage) {
            const explainData = await numerologyService.getExplainData({ lang: currentLanguage.code });

            // explainData.explainList
            let data = { ...explainContent };
            for (const key in data) {
                data[key] = "";
            }
            for (const item of explainData.explainList) {
                data[item.type] = item.content;
            }
            setExplainContent(data);

            // explainData.calculateExplainList
            data = { ...calculateExplainContent };
            for (const key in data) {
                data[key] = "";
            }
            for (const item of explainData.calculateExplainList) {
                data[item.type] = item.content;
            }
            setCalculateExplainContent(data);

            // explainData.calculateExplainList
            data = { ...numberMeaningContent };
            for (const key in data) {
                data[key] = "";
            }
            for (const item of explainData.numerologyMeaningList) {
                data[item.number] = item.content;
            }
            setNumberMeaningContent(data);
        }
    }

    useEffect(() => {
        fetchLanguages();
    }, []);

    useEffect(() => {
        setCurrentLanguage(languages[0]);
    }, [languages]);

    useEffect(() => {
        fetchExplainData();
    }, [currentLanguage]);

    const handleLanguageChange = (value: string) => {
        const language = languages.find(item => item.code == value);
        if (language) {
            setCurrentLanguage(language);
        }
    }

    const handleSaveExplain = async (key: string) => {
        if (currentLanguage) {
            await toast.promise(
                numerologyService.updateOrCreateExplain({ type: key, lang: currentLanguage.code, content: explainContent[key] }),
                {
                    pending: "Updating...",
                    success: "Update successfully!",
                    error: "Update failed!"
                }
            )
            fetchExplainData();
        }
    }

    const handleSaveCalculateExplain = async (key: string) => {
        if (currentLanguage) {
            toast.promise(
                numerologyService.updateOrCreateCalculateExplain({ type: key, lang: currentLanguage.code, content: calculateExplainContent[key] }),
                {
                    pending: "Updating...",
                    success: "Update successfully!",
                    error: "Update failed!"
                }
            )
        }
    }

    const handleSaveNumberExplain = async (number: number) => {
        if (currentLanguage) {
            toast.promise(
                numerologyService.updateOrCreateNumberExplain({ number: number, lang: currentLanguage.code, content: numberMeaningContent[number] }),
                {
                    pending: "Updating...",
                    success: "Update successfully!",
                    error: "Update failed!"
                }
            )
        }
    }

    const handleSaveExplainData = async () => {
        if (currentLanguage) {
            const dto: SaveExplainDataDto = {
                lang: currentLanguage.code,
                explainList: Object.keys(numerologyExplainTypeData).map((key) => ({
                    type: key,
                    content: explainContent[key] || ""
                })),
                calculateExplainList: Object.keys(numerologyTypeData).map((key) => ({
                    type: key,
                    content: calculateExplainContent[key] || ""
                })),
                numberMeaningList: numerologyNumberData.map((item) => ({
                    number: item,
                    content: numberMeaningContent[item] || ""
                })),
            }
            await toast.promise(
                numerologyService.saveExplainData(dto),
                {
                    pending: "Updating...",
                    success: "Update successfully!",
                    error: "Update failed!"
                }
            )
        }
    }

    return (
        <>
            <Select label="Language" value={currentLanguage?.code} onChange={(e) => handleLanguageChange(e.target.value)} options={languages.map((item) => ({ label: item.name, value: item.code }))} />
            <Button onClick={() => handleSaveExplainData()}>Save All</Button>
            <div className="flex flex-col gap-y-16 my-10">
                <div>
                    <Typography variant="h1">Numerology Explain Section</Typography>
                    {Object.entries(numerologyExplainTypeData).map(([key, val]) => (
                        <div key={key}>
                            <Typography variant="h3">{val.label}</Typography>
                            <TextArea value={explainContent[key]} onChange={(e) => setExplainContent({ ...explainContent, [key]: e.target.value })} />
                            <Button variant="tertiary" onClick={() => handleSaveExplain(key)}>Save</Button>
                        </div>
                    ))}
                </div>
                <div className="">
                    <Typography variant="h1">Numerology Calculate Explain Section</Typography>
                    {Object.entries(numerologyTypeData).map(([key, val]) => (
                        <div key={key}>
                            <Typography variant="h3">{val.label}</Typography>
                            <TextArea value={calculateExplainContent[key]} onChange={(e) => setCalculateExplainContent({ ...calculateExplainContent, [key]: e.target.value })} />
                            <Button variant="tertiary" onClick={() => handleSaveCalculateExplain(key)}>Save</Button>
                        </div>
                    ))}
                </div>
                <div>
                    <Typography variant="h1">Number Meaning Section</Typography>
                    {numerologyNumberData.map((item) => (
                        <div key={item}>
                            <Typography variant="h3">Number {item}</Typography>
                            <TextArea value={numberMeaningContent[item]} onChange={(e) => setNumberMeaningContent({...numberMeaningContent, [item]: e.target.value})} />
                            <Button variant="tertiary" onClick={() => handleSaveNumberExplain(item)}>Save</Button>
                        </div>
                    ))}
                </div>
            </div>
            <Button onClick={() => handleSaveExplainData()}>Save All</Button>
        </>
    )
}