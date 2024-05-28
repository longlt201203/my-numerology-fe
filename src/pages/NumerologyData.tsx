import React, { useEffect, useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import NumerologyEntryDto from '../services/dto/numerology.dto';
import NumerologyService from '../services/numerology.service';
import Typography from '../components/Typography';
import { LanguageService } from '../services/language.service';
import { LanguageDto } from '../services/dto/language.dto';

const NumerologyDataPage: React.FC = () => {
    const numerologyService = NumerologyService.getInstance();
    const languageService = LanguageService.getInstance();
    const [entries, setEntries] = useState<NumerologyEntryDto[]>([]);
    const [languages, setLanguages] = useState<LanguageDto[]>([]);

    const fetchEntries = async () => {
        const entries = await numerologyService.getEntries({});
        // console.log(entries);
        setEntries(entries);
    }

    const fetchLanguages = async () => {
        const languages = await languageService.getLanguages();
        setLanguages(languages);
    }

    useEffect(() => {
        fetchLanguages();
        fetchEntries();
    }, []);

    useEffect(() => {

    }, [languages]);

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

    return (
        <AdminLayout>
            <Typography variant="h1" className="mb-6">Numerology Data</Typography>

            <div className=''>
                <Select label="Language" options={languages.map((item) => ({ label: item.name, value: item.code }))} />
                <Select label="Type" options={typeSelectOptions} />
                <Select label="Number" options={numberSelectOptions} />
                <TextArea label="Description" />
                <Button>Update Entry</Button>
            </div>
            <hr className="my-6" />

            <Typography variant="h1" className="mb-6">Preview</Typography>
            <section>
                <Typography variant="h3">Life Path Number</Typography>
                <div className=''>
                    <Typography variant="h5">Number 1</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae augue lectus. Cras tincidunt justo et lacinia interdum. Ut dictum orci vel orci tempus, et eleifend enim scelerisque. Maecenas rhoncus nisl a urna sollicitudin, vitae ultricies lorem lacinia. Pellentesque feugiat sit amet dolor vitae vestibulum. Nullam sit amet sapien vel massa pellentesque malesuada. Aliquam facilisis mollis leo, eget sodales velit lobortis sed. Phasellus congue velit vel nunc bibendum, eu hendrerit ex commodo. Vivamus vel sapien nibh. Donec lobortis interdum mauris eu luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.</Typography>
                </div>
                <div className=''>
                    <Typography variant="h5">Number 2</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae augue lectus. Cras tincidunt justo et lacinia interdum. Ut dictum orci vel orci tempus, et eleifend enim scelerisque. Maecenas rhoncus nisl a urna sollicitudin, vitae ultricies lorem lacinia. Pellentesque feugiat sit amet dolor vitae vestibulum. Nullam sit amet sapien vel massa pellentesque malesuada. Aliquam facilisis mollis leo, eget sodales velit lobortis sed. Phasellus congue velit vel nunc bibendum, eu hendrerit ex commodo. Vivamus vel sapien nibh. Donec lobortis interdum mauris eu luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.</Typography>
                </div>
            </section>
            <section>
                <Typography variant="h3">Expression Number</Typography>
                <div className=''>
                    <Typography variant="h5">Number 1</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae augue lectus. Cras tincidunt justo et lacinia interdum. Ut dictum orci vel orci tempus, et eleifend enim scelerisque. Maecenas rhoncus nisl a urna sollicitudin, vitae ultricies lorem lacinia. Pellentesque feugiat sit amet dolor vitae vestibulum. Nullam sit amet sapien vel massa pellentesque malesuada. Aliquam facilisis mollis leo, eget sodales velit lobortis sed. Phasellus congue velit vel nunc bibendum, eu hendrerit ex commodo. Vivamus vel sapien nibh. Donec lobortis interdum mauris eu luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.</Typography>
                </div>
                <div className=''>
                    <Typography variant="h5">Number 2</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae augue lectus. Cras tincidunt justo et lacinia interdum. Ut dictum orci vel orci tempus, et eleifend enim scelerisque. Maecenas rhoncus nisl a urna sollicitudin, vitae ultricies lorem lacinia. Pellentesque feugiat sit amet dolor vitae vestibulum. Nullam sit amet sapien vel massa pellentesque malesuada. Aliquam facilisis mollis leo, eget sodales velit lobortis sed. Phasellus congue velit vel nunc bibendum, eu hendrerit ex commodo. Vivamus vel sapien nibh. Donec lobortis interdum mauris eu luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.</Typography>
                </div>
            </section>
        </AdminLayout>
    );
};

export default NumerologyDataPage;
