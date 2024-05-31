import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import AuthService from '../../services/auth.service';

const LoginPage: React.FC = () => {
  const authService = AuthService.getInstance();
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

  const handleLoginGoogle = async () => {
    const uri = await authService.getAuthUri({ provider: "google", callbackMode: "login" });
    window.location.href = uri;
  }

  return (
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
      <div className='mt-6 flex justify-center'>
        <Button variant='primary' onClick={handleLoginGoogle}>Login With Google</Button>
      </div>
      <p className="text-center mt-4">
        Don't have an account?{' '}
        <a href="/register" className="text-deepPurple hover:text-lavender">
          Register here
        </a>
      </p>
    </section>
  );
};

export default LoginPage;
