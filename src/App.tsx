import './App.css'

function App() {
  return (
    <div className="layout-wrapper">
      {}
      <aside className="sidebar">
        <h2 className="logo">WorkForMe</h2>
        <nav className="nav-links">
          <a href="#" className="active">Dashboard</a>
          <a href="#">Processes</a>
          <a href="#">Resume</a>
        </nav>
      </aside>

      {}
      <main className="main-content">
        <h1>Dashboard</h1>
      </main>
    </div>
  )
}

export default App