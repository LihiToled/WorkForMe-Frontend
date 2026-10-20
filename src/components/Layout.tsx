import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from '../pages/Dashboard/Dashboard';
import Processes from '../pages/Process/Processes';
import './Layout.css';

type TabType = 'dashboard' | 'processes' | 'resume';

const Layout: React.FC = () => {
  // Sets 'processes' as default visible page
  const [activeTab, setActiveTab] = useState<TabType>('processes');

  return (
    <div className="app-layout">
      {/* Sidebar handles clicking and updating activeTab */}
      <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />

      { }
      <div style={{ flex: 1 }}>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'processes' && <Processes />}
        {activeTab === 'resume' && (
          <div style={{ padding: '40px' }}>
            <h1>Resume Page</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;