import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from '../pages/Dashboard/Dashboard';
import Processes from '../pages/Process/Processes';
import NewProcess from '../pages/Process/NewProcess';
import ProcessDetailView from '../pages/Process/ProcessDetailView';
import './Layout.css';

// Type definition for all supported tabs/views in the app
export type TabType = 
  | 'dashboard' 
  | 'processes' 
  | 'new-process' 
  | 'process-detail' 
  | 'resume';

const Layout: React.FC = () => {
  // Active tab state (defaults to 'processes' view)
  const [activeTab, setActiveTab] = useState<TabType>('processes');

  // Helper to determine which sidebar tab should be highlighted as active
  const getSidebarActiveTab = (): 'dashboard' | 'processes' | 'resume' => {
    if (activeTab === 'new-process' || activeTab === 'process-detail') {
      return 'processes';
    }
    return activeTab as 'dashboard' | 'processes' | 'resume';
  };

  return (
    <div className="app-layout">
      {/* Sidebar navigation */}
      <Sidebar 
        activeTab={getSidebarActiveTab()} 
        onSelectTab={(tab) => setActiveTab(tab)} 
      />

      {/* Main Content Area */}
      <div style={{ flex: 1, minHeight: '100vh' }}>
        {/* Dashboard View */}
        {activeTab === 'dashboard' && <Dashboard />}

        {/* Processes List Table View */}
        {activeTab === 'processes' && (
          <Processes 
            onAddProcess={() => setActiveTab('new-process')}
            onSelectProcess={() => setActiveTab('process-detail')}
          />
        )}

        {/* Create New Process View */}
        {activeTab === 'new-process' && (
          <NewProcess onBack={() => setActiveTab('processes')} />
        )}

        {/* Process Detail View */}
        {activeTab === 'process-detail' && (
          <ProcessDetailView onBack={() => setActiveTab('processes')} />
        )}

        {/* Resume View Placeholder */}
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