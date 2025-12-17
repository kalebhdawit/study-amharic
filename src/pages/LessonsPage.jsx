import { Link } from 'react-router-dom';
import '../App.css';

export default function LessonsPage() {
  return (
    <div className="page-shell centered-page">
      <h1>Lessons</h1>
      <div className="lessons-categories">
        <Link to="/lessons/basics" className="category-box">
          <h2>Basics</h2>
          <p>Learn the fundamentals of Amharic including the alphabet, basic phrases, sentence structure, and essential grammar concepts.</p>
        </Link>
        <Link to="/lessons/verbs" className="category-box">
          <h2>Verbs</h2>
          <p>Master verb conjugations, tenses, and usage patterns. Explore present, past, continuous, and future forms.</p>
        </Link>
        <Link to="/lessons/vocabulary" className="category-box">
          <h2>Vocabulary</h2>
          <p>Expand your Amharic vocabulary with themed word lists and practical phrases organized by topic.</p>
        </Link>
      </div>
    </div>
  );
}
