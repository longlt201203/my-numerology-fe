import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-deepPurple text-crystalWhite p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">NumerologyApp</a>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-lavender">Home</a></li>
          <li><a href="#about" className="hover:text-lavender">About</a></li>
          <li><a href="#contact" className="hover:text-lavender">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
