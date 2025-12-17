import { Link } from 'react-router-dom';
import '../App.css';

// Define lesson orders for each category
const lessonOrders = {
  basics: [
    { slug: 'fidel', title: 'Fidel', path: '/lessons/basics/fidel' },
    { slug: 'basic-phrases', title: 'Basic Phrases', path: '/lessons/basics/basic-phrases' },
    { slug: 'sentence-structure', title: 'Sentence Structure', path: '/lessons/basics/sentence-structure' },
    { slug: 'pronouns', title: 'Pronouns', path: '/lessons/basics/pronouns' },
    { slug: 'to-be', title: 'To Be', path: '/lessons/basics/to-be' },
    { slug: 'glue-words', title: 'Glue Words', path: '/lessons/basics/glue-words' },
    { slug: 'possession', title: 'Possession', path: '/lessons/basics/possession' },
    { slug: 'plurality', title: 'Plurality', path: '/lessons/basics/plurality' },
    { slug: 'definite-nouns', title: 'Definite Nouns', path: '/lessons/basics/definite-nouns' },
    { slug: 'object-marker', title: 'Object Marker', path: '/lessons/basics/object-marker' },
    { slug: 'and-suffix', title: 'And Suffix', path: '/lessons/basics/and-suffix' },
  ],
  verbs: [
    { slug: 'intro', title: 'Introduction', path: '/lessons/verbs/intro' },
    { slug: 'to-be-and-to-have', title: 'To Be and To Have', path: '/lessons/verbs/to-be-and-to-have' },
    { slug: 'present-and-future-tense', title: 'Present and Future Tense', path: '/lessons/verbs/present-and-future-tense' },
    { slug: 'past-tense', title: 'Past Tense', path: '/lessons/verbs/past-tense' },
    { slug: 'continuous-present-tense', title: 'Continuous Present Tense', path: '/lessons/verbs/continuous-present-tense' },
  ],
  vocabulary: [
    { slug: 'family', title: 'Family', path: '/lessons/vocabulary/family' },
  ],
};

// Category titles
const categoryTitles = {
  basics: 'Basics',
  verbs: 'Verbs',
  vocabulary: 'Vocabulary',
};

export default function LessonNavigation({ category, lesson, showBackOnly = false, showArrowsOnly = false }) {
  const lessons = lessonOrders[category] || [];
  const currentIndex = lessons.findIndex(l => l.slug === lesson);
  
  if (currentIndex === -1) return null;

  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;
  const categoryPath = `/lessons/${category}`;
  const categoryTitle = categoryTitles[category] || category;

  // Show only back link
  if (showBackOnly) {
    return (
      <div className="lesson-navigation-top">
        <div className="lesson-nav-section">
          <Link to={categoryPath} className="lesson-nav-back">
            ← Back to {categoryTitle}
          </Link>
        </div>
      </div>
    );
  }

  // Show only arrows
  if (showArrowsOnly) {
    return (
      <div className="lesson-navigation">
        <div className="lesson-nav-arrows">
          {prevLesson ? (
            <Link to={prevLesson.path} className="lesson-nav-prev">
              <span className="lesson-nav-arrow">←</span>
              <span className="lesson-nav-text">
                <span className="lesson-nav-label">Previous</span>
                <span className="lesson-nav-title">{prevLesson.title}</span>
              </span>
            </Link>
          ) : (
            <div className="lesson-nav-placeholder"></div>
          )}
          
          {nextLesson ? (
            <Link to={nextLesson.path} className="lesson-nav-next">
              <span className="lesson-nav-text">
                <span className="lesson-nav-label">Next</span>
                <span className="lesson-nav-title">{nextLesson.title}</span>
              </span>
              <span className="lesson-nav-arrow">→</span>
            </Link>
          ) : (
            <div className="lesson-nav-placeholder"></div>
          )}
        </div>
      </div>
    );
  }

  // Show both (default, for backwards compatibility)
  return (
    <div className="lesson-navigation">
      <div className="lesson-nav-section">
        <Link to={categoryPath} className="lesson-nav-back">
          ← Back to {categoryTitle}
        </Link>
      </div>
      
      <div className="lesson-nav-arrows">
        {prevLesson ? (
          <Link to={prevLesson.path} className="lesson-nav-prev">
            <span className="lesson-nav-arrow">←</span>
            <span className="lesson-nav-text">
              <span className="lesson-nav-label">Previous</span>
              <span className="lesson-nav-title">{prevLesson.title}</span>
            </span>
          </Link>
        ) : (
          <div className="lesson-nav-placeholder"></div>
        )}
        
        {nextLesson ? (
          <Link to={nextLesson.path} className="lesson-nav-next">
            <span className="lesson-nav-text">
              <span className="lesson-nav-label">Next</span>
              <span className="lesson-nav-title">{nextLesson.title}</span>
            </span>
            <span className="lesson-nav-arrow">→</span>
          </Link>
        ) : (
          <div className="lesson-nav-placeholder"></div>
        )}
      </div>
    </div>
  );
}

