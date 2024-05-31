import React, { useEffect, useState } from 'react';
import Typography from '../../components/Typography';
import useLanguage from '../../hooks/useLanguage';
import NumerologyService from '../../services/numerology.service';
import { numerologyExplainTypeData, numerologyTypeData } from '../../etc/constants';

const NumerologyExplanationPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const numerologyService = NumerologyService.getInstance();

  const [explainContent, setExplainContent] = useState<{ [key: string]: string }>({});
  const [calculateExplainContent, setCalculateExplainContent] = useState<{ [key: string]: string }>({});

  const fetchExplainData = async () => {
    if (currentLanguage) {
      const explainData = await numerologyService.getExplainData({ lang: currentLanguage.code });

      // explainData.explainList
      let data: any = {};
      for (const item of explainData.explainList) {
        data[item.type] = item.content;
      }
      setExplainContent(data);

      // explainData.calculateExplainList
      data = {};
      for (const item of explainData.calculateExplainList) {
        data[item.type] = item.content;
      }
      setCalculateExplainContent(data);
    }
  }

  useEffect(() => {
    fetchExplainData();
  }, [currentLanguage]);

  return (
    <section className="text-midnightBlue">
      <Typography variant='h1' className='mb-6'>Understanding Numerology</Typography>

      <section className="mb-6">
        <h2 className="text-3xl font-secondary mb-4">What is Numerology?</h2>
        <p className="text-lg font-body mb-4">{explainContent[numerologyExplainTypeData.whatIsIt.value]}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-secondary mb-4">History of Numerology</h2>
        <p className="text-lg font-body mb-4">{explainContent[numerologyExplainTypeData.history.value]}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-secondary mb-4">Core Numerology Concepts</h2>
        <h3 className="text-2xl font-secondary mb-2">Life Path Number</h3>
        <p className="text-lg font-body mb-4">
          The Life Path Number is derived from your birthdate and is considered the most important number in numerology. It reveals your life's purpose, the lessons you need to learn, and the opportunities and challenges you may face.
        </p>

        <h3 className="text-2xl font-secondary mb-2">Destiny Number</h3>
        <p className="text-lg font-body mb-4">
          The Destiny Number, also known as the Expression Number, is calculated using the letters in your full name at birth. It describes your natural talents, abilities, and the path you are destined to follow.
        </p>

        <h3 className="text-2xl font-secondary mb-2">Soul Urge Number</h3>
        <p className="text-lg font-body mb-4">
          The Soul Urge Number, or Heart's Desire Number, is determined by the vowels in your name. It reveals your innermost desires, motivations, and what truly makes you happy.
        </p>

        <h3 className="text-2xl font-secondary mb-2">Personality Number</h3>
        <p className="text-lg font-body mb-4">
          The Personality Number is derived from the consonants in your name. It represents the aspects of your personality that you show to the outside world and how others perceive you.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-secondary mb-4">How to Calculate Your Numbers</h2>
        <p className="text-lg font-body mb-4">
          Calculating your numerology numbers involves simple arithmetic and converting letters into numbers based on their position in the alphabet. Here is a basic guide to help you get started:
        </p>

        {Object.entries(numerologyTypeData).map(([key, val]) => (
          <div key={key}>
            <Typography variant="h4">{val.label}</Typography>
            <Typography variant="p">{calculateExplainContent[key]}</Typography>
          </div>
        ))}

        <p className="text-lg font-body">
          Remember, numerology is a tool for self-discovery and personal growth. Use it to gain insights and guide your decisions, but always follow your intuition and inner wisdom.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-secondary mb-4">Further Reading and Resources</h2>
        <p className="text-lg font-body mb-4">{explainContent[numerologyExplainTypeData.resources.value]}</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <a href="https://www.numerology.com/" className="text-deepPurple hover:text-lavender">
              Numerology.com
            </a> - A comprehensive resource for numerology readings and articles.
          </li>
          <li className="mb-2">
            <a href="https://www.tokenrock.com/numerology/" className="text-deepPurple hover:text-lavender">
              Token Rock Numerology
            </a> - Offers tools for calculating your numerology numbers and detailed explanations.
          </li>
          <li className="mb-2">
            <a href="https://www.amazon.com/Numerology-Beginners-Lloyd-Strayhorn/dp/0877289068" className="text-deepPurple hover:text-lavender">
              Numerology: The Complete Guide by Matthew Oliver Goodwin
            </a> - A highly recommended book for beginners and advanced practitioners.
          </li>
        </ul>
      </section>
    </section>
  );
};

export default NumerologyExplanationPage;
