import React from 'react';
import './SideMenu.css'; 


interface NavLink {
  label: string;
  url: string;
}

interface HeaderProps {
  links: NavLink[];
}

const SideMenu: React.FC<HeaderProps> = ({ links = [] }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        <h3>Work For Me</h3>
      </div>
      <nav style={{ width: '100%' }}>
        <ul className="nav-list">
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <a href={link.url} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;
