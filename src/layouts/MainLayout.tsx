import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainProvider from '../providers/MainProvider';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <MainProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          <Outlet/>
        </main>
        <Footer />
      </div>
    </MainProvider>
  );
};

export default MainLayout;
