import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LessonsPage from './pages/LessonsPage.jsx'
import VocabPage from './pages/VocabPage.jsx'
import PracticePage from './pages/PracticePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="navbar">
        <nav className="nav-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/lessons" className="nav-link">
            Lessons
          </NavLink>
          <NavLink to="/vocab" className="nav-link">
            Vocab
          </NavLink>
          <NavLink to="/practice" className="nav-link">
            Practice
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </nav>
      </header>

      <main className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/vocab" element={<VocabPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
