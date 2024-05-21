import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnightBlue text-crystalWhite p-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="https://facebook.com" className="mx-2 hover:text-lavender">Facebook</a>
          <a href="https://twitter.com" className="mx-2 hover:text-lavender">Twitter</a>
          <a href="https://instagram.com" className="mx-2 hover:text-lavender">Instagram</a>
        </div>
        <p>&copy; 2024 NumerologyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
