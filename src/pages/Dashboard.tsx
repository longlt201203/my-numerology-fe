import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const DashboardPage: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-heading text-midnightBlue mb-6">Dashboard</h1>
      <p className="text-lg font-body mb-6">
        Welcome to the Numerology Admin Dashboard. Here you can manage users, view reports, and configure settings for the application.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-secondary mb-4">Manage Users</h2>
          <p className="text-lg font-body">
            View and manage all registered users of the Numerology app.
          </p>
          <button className="mt-4 bg-deepPurple text-crystalWhite px-4 py-2 rounded hover:bg-lavender">
            Go to Users
          </button>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-secondary mb-4">View Reports</h2>
          <p className="text-lg font-body">
            Generate and view detailed reports on user activities and numerology readings.
          </p>
          <button className="mt-4 bg-deepPurple text-crystalWhite px-4 py-2 rounded hover:bg-lavender">
            Go to Reports
          </button>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-secondary mb-4">Settings</h2>
          <p className="text-lg font-body">
            Configure application settings and preferences.
          </p>
          <button className="mt-4 bg-deepPurple text-crystalWhite px-4 py-2 rounded hover:bg-lavender">
            Go to Settings
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
