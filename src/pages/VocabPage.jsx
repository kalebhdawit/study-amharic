import { Link } from 'react-router-dom';
import '../App.css';

const vocabLessons = [
  { slug: 'family', title: 'Family', path: '/lessons/vocabulary/family' },
];

export default function VocabPage() {
  return (
    <div className="page-shell centered-page">
      <h1>Vocabulary</h1>
      <div className="lessons-grid">
        {vocabLessons.map((lesson) => (
          <Link key={lesson.slug} to={lesson.path} className="lesson-box">
            <h3>{lesson.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
