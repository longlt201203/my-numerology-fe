import React, { useEffect, useState } from 'react';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import NumerologyEntryDto from '../../services/dto/numerology.dto';
import NumerologyService from '../../services/numerology.service';
import Typography from '../../components/Typography';
import { LanguageService } from '../../services/language.service';
import { LanguageDto } from '../../services/dto/language.dto';
import NumerologyDataDto from '../../dto/numerology-data.dto';
import { toast } from 'react-toastify';
import TextInput from '../../components/TextInput';
import { numerologyNumberData, numerologyTypeData } from '../../etc/constants';

const NumerologyDataPage: React.FC = () => {
    const numerologyService = NumerologyService.getInstance();
    const languageService = LanguageService.getInstance();
    const [numerologyData, setNumerologyData] = useState<NumerologyDataDto>({});
    const [languages, setLanguages] = useState<LanguageDto[]>([]);
    const [currentLanguage, setCurrentLanguage] = useState<LanguageDto>();
    const [currentEntryType, setCurrentEntryType] = useState(numerologyTypeData.lifePath.value);
    const [currentNumerologyEntry, setCurrentNumerologyEntry] = useState<NumerologyEntryDto>({
        type: numerologyTypeData.lifePath.value,
        number: numerologyNumberData[0],
        lang: "vn",
        content: "",
        summary: ""
    });

    const fetchEntries = async () => {
        if (currentLanguage) {
            const entries = await numerologyService.getEntries({ lang: currentLanguage.code, type: currentEntryType });
            const data: NumerologyDataDto = {};
            for (const entry of entries) {
                if (!data[entry.type]) {
                    data[entry.type] = [];
                }
                data[entry.type].push(entry);
            }
            setNumerologyData(data);
        }
    }

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
        fetchEntries();
    }, [currentLanguage, currentEntryType]);

    const typeSelectOptions = Object.values(numerologyTypeData);

    const numberSelectOptions = numerologyNumberData.map((item) => ({ label: item.toString(), value: item.toString() }));

    const handleLanguageChange = (value: string) => {
        const language = languages.find(item => item.code == value);
        if (language) {
            setCurrentLanguage(language);
            setCurrentNumerologyEntry({ ...currentNumerologyEntry, lang: language.code });
        }
    }

    const handleNumerologyEntryTypeChange = (value: string) => {
        setCurrentEntryType(value);
        setCurrentNumerologyEntry({ ...currentNumerologyEntry, type: value });
    }

    const updateOrCreateEntry = async () => {
        await numerologyService.updateOrCreateEntry(currentNumerologyEntry);
        fetchEntries();
    }

    const handleUpdateEntry = () => {
        toast.promise(
            updateOrCreateEntry,
            {
                success: "Update successfully!",
                error: "Update failed!",
                pending: "Updating..."
            }
        )
    }

    return (
        <>
            <Typography variant="h1" className="mb-6">Numerology Data</Typography>

            <div className=''>
                <Select label="Language" value={currentLanguage?.code} onChange={(e) => handleLanguageChange(e.target.value)} options={languages.map((item) => ({ label: item.name, value: item.code }))} />
                <Select label="Type" options={typeSelectOptions} onChange={(e) => handleNumerologyEntryTypeChange(e.target.value)} value={currentEntryType} />
                <Select label="Number" options={numberSelectOptions} onChange={(e) => setCurrentNumerologyEntry({ ...currentNumerologyEntry, number: parseInt(e.target.value) })} value={currentNumerologyEntry.number.toString()} />
                <TextInput label="Summary" type="text" onChange={(e) => setCurrentNumerologyEntry({ ...currentNumerologyEntry, summary: e.target.value })} value={currentNumerologyEntry.summary} />
                <TextArea label="Description" onChange={(e) => setCurrentNumerologyEntry({ ...currentNumerologyEntry, content: e.target.value })} value={currentNumerologyEntry.content} />
                <Button onClick={handleUpdateEntry}>Update Entry</Button>
            </div>
            <hr className="my-6" />

            <Typography variant="h1" className="mb-6">Preview</Typography>
            {/* {Object.entries(numerologyTypeData).map(([key, val]) => (
                <section key={key}>
                    <Typography variant="h3" className='font-bold'>{val.label} Number</Typography>
                    {numerologyData[key] && numerologyData[key].map((item) => (
                        <div className='' key={item.id}>
                            <Typography variant="h5" className='font-bold'>Number {item.number}: {item.summary}</Typography>
                            {item.content.split("\n").map((item, index) => (<Typography key={index} variant="p">{item}</Typography>))}
                        </div>
                    ))}
                </section>
            ))} */}
            <section>
                {numerologyData[currentEntryType] && numerologyData[currentEntryType].map((item) => (
                    <div className='' key={item.id}>
                        <Typography variant="h5" className='font-bold'>Number {item.number}: {item.summary}</Typography>
                        {item.content.split("\n").map((item, index) => (<Typography key={index} variant="p">{item}</Typography>))}
                    </div>
                ))}
            </section>
        </>
    );
};

export default NumerologyDataPage;
