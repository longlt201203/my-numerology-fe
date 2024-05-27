import React, { useEffect, useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import NumerologyEntryDto from '../services/dto/numerology.dto';
import NumerologyService from '../services/numerology.service';
import Typography from '../components/Typography';

const NumerologyDataPage: React.FC = () => {
    const numerologyService = NumerologyService.getInstance();
    const [entries, setEntries] = useState<NumerologyEntryDto[]>([]);

    const fetchEntries = async () => {
        const entries = await numerologyService.getEntries({});
        console.log(entries);
        setEntries(entries);
    }

    useEffect(() => {
        fetchEntries();
    }, []);

    const typeSelectOptions = [
        { label: "Life Path", value: "lifePath" },
    ]

    const numberSelectOptions = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
    ]

    const languageSelectOptions = [
        { label: "Tiếng Việt", value: "vn" },
        { label: "English", value: "en" },
    ]

    return (
        <AdminLayout>
            <Typography variant="h1" className="mb-6">Numerology Data</Typography>

            <div className=''>
                <Select label="Language" options={languageSelectOptions} />
                <Select label="Type" options={typeSelectOptions} />
                <Select label="Number" options={numberSelectOptions} />
                <TextArea label="Description" />
                <Button>Add Entry</Button>
            </div>
            <hr className="my-6" />

            <Typography variant="h1" className="mb-6">Preview</Typography>
            <section>
                {/* {entries.map((entry, index) => (
<div key={index} className="mb-6">
<h2 className="text-2xl font-secondary mb-2">Number {entry.number}:</h2>
<p className="text-lg font-body mb-1"><strong>{entry.language}:</strong> {entry.description}</p>
</div>
))} */}
            </section>
        </AdminLayout>
    );
};

export default NumerologyDataPage;
