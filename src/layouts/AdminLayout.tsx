import React from 'react';
import { Link } from 'react-router-dom';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-deepPurple text-crystalWhite flex flex-col">
        <div className="p-4 font-bold text-2xl">Admin Dashboard</div>
        <nav className="flex-grow">
          <ul>
            <li className="p-4 hover:bg-lavender">
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-lavender">
              <Link to="/admin/numerology-data">Numerology Data</Link>
            </li>
            <li className="p-4 hover:bg-lavender">
              <Link to="/admin/users">Manage Users</Link>
            </li>
            <li className="p-4 hover:bg-lavender">
              <Link to="/admin/reports">Reports</Link>
            </li>
            <li className="p-4 hover:bg-lavender">
              <Link to="/admin/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <footer className="p-4">
          <button className="w-full bg-midnightBlue hover:bg-lavender text-crystalWhite py-2 rounded">
            Logout
          </button>
        </footer>
      </aside>
      <div className="flex-grow flex flex-col">
        <header className="bg-midnightBlue text-crystalWhite p-4">
          <div className="container mx-auto">Welcome to the Admin Dashboard</div>
        </header>
        <main className="flex-grow container mx-auto p-6 bg-crystalWhite">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
