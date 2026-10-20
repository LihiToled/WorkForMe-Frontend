import React from 'react';
import './Sidebar.css'; 

interface NavLink {
  label: string;
  url: string;
  active?: boolean;
}

interface SidebarProps {
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: 'Dashboard', url: '/dashboard', active: true },
  { label: 'Processes', url: '/processes' },
  { label: 'Resume', url: '/resume' },
];

const Sidebar: React.FC<SidebarProps> = ({ links = defaultLinks }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        WorkForMe
      </div>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <a 
                href={link.url} 
                className={`nav-link ${link.active ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;