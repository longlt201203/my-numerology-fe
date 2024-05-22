import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Typography from "../components/Typography";

const NumerologyPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
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
        <Typography variant="h1">Discover Your Numerology Reading</Typography>
        <Typography variant="p" className="text-lg mb-6">
          Numerology is the study of the mystical relationship between numbers and events. By analyzing the numbers in your life, you can gain insight into your personality, destiny, and life's purpose.
        </Typography>
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
