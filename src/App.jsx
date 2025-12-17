import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LessonsPage from './pages/LessonsPage.jsx'
import BasicsPage from './pages/BasicsPage.jsx'
import VerbsPage from './pages/VerbsPage.jsx'
import VocabPage from './pages/VocabPage.jsx'
import LessonDetailPage from './pages/LessonDetailPage.jsx'
import PracticePage from './pages/PracticePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import './App.css'

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <header className={`navbar ${isHomePage ? 'navbar-transparent' : 'navbar-opaque'}`}>
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
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/lessons/basics" element={<BasicsPage />} />
          <Route path="/lessons/verbs" element={<VerbsPage />} />
          <Route path="/lessons/vocabulary" element={<VocabPage />} />
          <Route path="/lessons/:category/:lesson" element={<LessonDetailPage />} />
          <Route path="/vocab" element={<VocabPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
