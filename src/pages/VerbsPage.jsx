import { Link } from 'react-router-dom';
import '../App.css';

const verbsLessons = [
  { slug: 'intro', title: 'Introduction', path: '/lessons/verbs/intro' },
  { slug: 'to_be_and_to_have', title: 'To Be and To Have', path: '/lessons/verbs/to-be-and-to-have' },
  { slug: 'present_and_future_tense', title: 'Present and Future Tense', path: '/lessons/verbs/present-and-future-tense' },
  { slug: 'past_tense', title: 'Past Tense', path: '/lessons/verbs/past-tense' },
  { slug: 'continuous_present_tense', title: 'Continuous Present Tense', path: '/lessons/verbs/continuous-present-tense' },
];

export default function VerbsPage() {
  return (
    <div className="page-shell centered-page">
      <h1>Verbs</h1>
      <div className="lessons-grid">
        {verbsLessons.map((lesson) => (
          <Link key={lesson.slug} to={lesson.path} className="lesson-box">
            <h3>{lesson.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

