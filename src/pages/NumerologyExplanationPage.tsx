import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Typography from '../components/Typography';

const NumerologyExplanationPage: React.FC = () => {
  return (
    <MainLayout>
      <section className="text-midnightBlue">
        <Typography variant='h1' className='mb-6'>Understanding Numerology</Typography>

        <section className="mb-6">
          <h2 className="text-3xl font-secondary mb-4">What is Numerology?</h2>
          <p className="text-lg font-body mb-4">
            Numerology is the study of numbers and their mystical significance in our lives. It is based on the idea that numbers, like letters, have specific vibrations and energies that can influence various aspects of our existence. By analyzing these numbers, numerologists believe we can gain insight into our personalities, destinies, and life paths.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl font-secondary mb-4">History of Numerology</h2>
          <p className="text-lg font-body mb-4">
            Numerology has been around for thousands of years, with roots tracing back to ancient civilizations such as the Babylonians and Egyptians. The Greek philosopher Pythagoras is often credited with being one of the early proponents of numerology. He believed that the universe is governed by numerical patterns and that numbers have profound spiritual meanings.
          </p>
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
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              <strong>Life Path Number:</strong> Add the digits of your birthdate until you get a single digit or a Master Number (11, 22, 33).
            </li>
            <li className="mb-2">
              <strong>Destiny Number:</strong> Convert each letter of your full name into a number (A=1, B=2, ..., Z=26), then add the digits until you get a single digit or a Master Number.
            </li>
            <li className="mb-2">
              <strong>Soul Urge Number:</strong> Use the same method as the Destiny Number but only include the vowels in your name.
            </li>
            <li className="mb-2">
              <strong>Personality Number:</strong> Use the same method as the Destiny Number but only include the consonants in your name.
            </li>
          </ol>
          <p className="text-lg font-body">
            Remember, numerology is a tool for self-discovery and personal growth. Use it to gain insights and guide your decisions, but always follow your intuition and inner wisdom.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-secondary mb-4">Further Reading and Resources</h2>
          <p className="text-lg font-body mb-4">
            If you are interested in learning more about numerology, there are many resources available online and in books. Here are a few recommendations to get you started:
          </p>
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
    </MainLayout>
  );
};

export default NumerologyExplanationPage;
