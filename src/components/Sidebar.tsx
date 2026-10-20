import React from 'react';
import './Sidebar.css';

type TabType = 'dashboard' | 'processes' | 'resume';

interface SidebarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

const links: { label: string; id: TabType }[] = [
  { label: 'Dashboard', id: 'dashboard' },
  { label: 'Processes', id: 'processes' },
  { label: 'Resume', id: 'resume' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelectTab }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        WorkForMe
      </div>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.id} className="nav-item">
              <button
                type="button"
                onClick={() => onSelectTab(link.id)}
                className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;