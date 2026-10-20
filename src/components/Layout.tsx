import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Layout;