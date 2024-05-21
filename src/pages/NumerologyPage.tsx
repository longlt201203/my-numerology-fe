import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const NumerologyPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <MainLayout>
      <section className="text-midnightBlue">
        <h1 className="text-4xl font-heading mb-4">Discover Your Numerology Reading</h1>
        <p className="text-lg font-body mb-6">
          Numerology is the study of the mystical relationship between numbers and events. By analyzing the numbers in your life, you can gain insight into your personality, destiny, and life's purpose.
        </p>
        <form onSubmit={handleSubmit} className="bg-crystalWhite p-6 rounded shadow-md">
          <TextInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextInput
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <Button variant="primary" size="medium" type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </section>
    </MainLayout>
  );
};

export default NumerologyPage;
