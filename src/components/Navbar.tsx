import React from 'react';
import useLanguage from '../hooks/useLanguage';
import Select from './Select';

const Navbar: React.FC = () => {
  const { languages, changeLanguage, currentLanguage } = useLanguage();

  return (
    <nav className="bg-deepPurple text-crystalWhite p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">NumerologyApp</a>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-lavender">Home</a></li>
          <li><a href="#about" className="hover:text-lavender">About</a></li>
          <li><a href="#contact" className="hover:text-lavender">Contact</a></li>
        </ul>
        <Select options={languages.map(item => ({ label: item.name, value: item.code }))} value={currentLanguage?.code} onChange={(e) => changeLanguage(e.target.value)} className='text-deepPurple'/>
      </div>
    </nav>
  );
};

export default Navbar;
