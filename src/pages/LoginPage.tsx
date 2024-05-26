import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Typography from '../components/Typography';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // Handle login logic here
  };

  return (
    <MainLayout>
      <section className="text-midnightBlue max-w-md mx-auto mt-12">
        <Typography variant='h1' className='text-center mb-6'>Login</Typography>
        <form onSubmit={handleSubmit} className="bg-crystalWhite p-6 rounded shadow-md">
          <TextInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button variant="primary" size="medium" type="submit" className="mt-4 w-full">
            Login
          </Button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-deepPurple hover:text-lavender">
            Register here
          </a>
        </p>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
