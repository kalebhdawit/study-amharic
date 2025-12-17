import { Link } from 'react-router-dom';
import '../App.css';

const basicsLessons = [
  { slug: 'fidel', title: 'Fidel', path: '/lessons/basics/fidel' },
  { slug: 'basic_phrases', title: 'Basic Phrases', path: '/lessons/basics/basic-phrases' },
  { slug: 'sentence_structure', title: 'Sentence Structure', path: '/lessons/basics/sentence-structure' },
  { slug: 'pronouns', title: 'Pronouns', path: '/lessons/basics/pronouns' },
  { slug: 'to_be', title: 'To Be', path: '/lessons/basics/to-be' },
  { slug: 'glue_words', title: 'Glue Words', path: '/lessons/basics/glue-words' },
  { slug: 'possession', title: 'Possession', path: '/lessons/basics/possession' },
  { slug: 'plurality', title: 'Plurality', path: '/lessons/basics/plurality' },
  { slug: 'definite_nouns', title: 'Definite Nouns', path: '/lessons/basics/definite-nouns' },
  { slug: 'object_marker', title: 'Object Marker', path: '/lessons/basics/object-marker' },
  { slug: 'and_suffix', title: 'And Suffix', path: '/lessons/basics/and-suffix' },
];

export default function BasicsPage() {
  return (
    <div className="page-shell centered-page">
      <h1>Basics</h1>
      <div className="lessons-grid">
        {basicsLessons.map((lesson) => (
          <Link key={lesson.slug} to={lesson.path} className="lesson-box">
            <h3>{lesson.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

