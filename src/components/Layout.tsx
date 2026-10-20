import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from '../pages/Dashboard/Dashboard';
import Processes from '../pages/Process/Processes';
import NewProcess from '../pages/Process/NewProcess';
import './Layout.css';

export type TabType = 'dashboard' | 'processes' | 'resume' | 'new-process';

const Layout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('processes');

  return (
    <div className="app-layout">
      {/* Keep 'processes' highlighted in the sidebar even when on 'new-process' */}
      <Sidebar 
        activeTab={activeTab === 'new-process' ? 'processes' : activeTab} 
        onSelectTab={setActiveTab} 
      />

      <div style={{ flex: 1 }}>
        {activeTab === 'dashboard' && <Dashboard />}
        
        {/* Pass trigger to switch view to 'new-process' */}
        {activeTab === 'processes' && (
          <Processes onAddProcess={() => setActiveTab('new-process')} />
        )}
        
        {/* Pass trigger to return back to 'processes' */}
        {activeTab === 'new-process' && (
          <NewProcess onBack={() => setActiveTab('processes')} />
        )}

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