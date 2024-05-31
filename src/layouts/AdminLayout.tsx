import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import AdminProvider from '../providers/AdminProvider';

const AdminLayout: React.FC = () => {
  const handleLogout = () => {
    window.location.href = import.meta.env.VITE_LOGOUT_URI;
  }

  return (
    <AdminProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />

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
                <Link to="/admin/numerology-meaning">Numerology Meaning</Link>
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
            <button className="w-full bg-midnightBlue hover:bg-lavender text-crystalWhite py-2 rounded" onClick={handleLogout}>
              Logout
            </button>
          </footer>
        </aside>
        <div className="flex-grow flex flex-col">
          <header className="bg-midnightBlue text-crystalWhite p-4">
            <div className="container mx-auto">Welcome to the Admin Dashboard</div>
          </header>
          <main className="flex-grow container mx-auto p-6 bg-crystalWhite">
            <Outlet/>
          </main>
        </div>
      </div>
    </AdminProvider>

  );
};

export default AdminLayout;
