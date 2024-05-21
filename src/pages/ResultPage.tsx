import React from 'react';
import MainLayout from '../layouts/MainLayout';

const ResultPage: React.FC = () => {
  return (
    <MainLayout>
      <section className="text-midnightBlue">
        <h1 className="text-4xl font-heading mb-4">Your Numerology Reading</h1>
        <p className="text-lg font-body mb-6">
          Based on the information you provided, here are your numerology results.
        </p>
        <div className="bg-crystalWhite p-6 rounded shadow-md">
          <h2 className="text-2xl font-secondary mb-4">Summary</h2>
          <p className="text-lg font-body mb-2"><strong>Full Name:</strong> Nguyen Van A</p>
          <p className="text-lg font-body mb-4"><strong>Date of Birth:</strong> 20/12/2003</p>
          <h3 className="text-xl font-secondary mb-2">Numerology Result:</h3>
          <p className="text-lg font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, ligula a mollis malesuada, nunc massa dictum quam, a consequat ligula eros quis ipsum. Sed pulvinar nibh vitae nisl luctus venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc venenatis nulla eros, et sagittis metus pretium efficitur. Phasellus tristique tellus efficitur, tempus eros quis, lacinia diam. Ut ac pellentesque dui. Nullam auctor varius nunc vitae tristique.</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default ResultPage;
