import Sidebar from './components/Sidebar';
import './App.css'; 

function App() {
  const sideMenuLinks = [
    { label: 'Dashboard', url: '/dashboard' },
    { label: 'Processes', url: '/processes' },
    { label: 'Resume', url: '/resume' },
  ];

  return (
    <div className="app-layout">
      {}
      <Sidebar links={sideMenuLinks} /> 
      {}
      <main className="main-content">
        <div className="centered-container">
        </div>
      </main>
    </div>
  );
}

export default App;