import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import LessonNavigation from '../components/LessonNavigation';
import '../App.css';

// Import all lesson MDX files
import FidelLesson from '../lessons/basics/fidel.mdx';
import BasicPhrasesLesson from '../lessons/basics/basic_phrases.mdx';
import SentenceStructureLesson from '../lessons/basics/sentence_structure.mdx';
import PronounsLesson from '../lessons/basics/pronouns.mdx';
import ToBeLesson from '../lessons/basics/to_be.mdx';
import GlueWordsLesson from '../lessons/basics/glue_words.mdx';
import PossessionLesson from '../lessons/basics/possession.mdx';
import PluralityLesson from '../lessons/basics/plurality.mdx';
import DefiniteNounsLesson from '../lessons/basics/definite_nouns.mdx';
import ObjectMarkerLesson from '../lessons/basics/object_marker.mdx';
import AndSuffixLesson from '../lessons/basics/and_suffix.mdx';

import VerbsIntroLesson from '../lessons/verbs/intro.mdx';
import ToBeAndToHaveLesson from '../lessons/verbs/to_be_and_to_have.mdx';
import PresentAndFutureTenseLesson from '../lessons/verbs/present_and_future_tense.mdx';
import PastTenseLesson from '../lessons/verbs/past_tense.mdx';
import ContinuousPresentTenseLesson from '../lessons/verbs/continuous_present_tense.mdx';

import FamilyVocabLesson from '../lessons/vocabulary/family.mdx';

// Map routes to lesson components
const lessonComponentMap = {
  'basics/fidel': FidelLesson,
  'basics/basic-phrases': BasicPhrasesLesson,
  'basics/sentence-structure': SentenceStructureLesson,
  'basics/pronouns': PronounsLesson,
  'basics/to-be': ToBeLesson,
  'basics/glue-words': GlueWordsLesson,
  'basics/possession': PossessionLesson,
  'basics/plurality': PluralityLesson,
  'basics/definite-nouns': DefiniteNounsLesson,
  'basics/object-marker': ObjectMarkerLesson,
  'basics/and-suffix': AndSuffixLesson,
  'verbs/intro': VerbsIntroLesson,
  'verbs/to-be-and-to-have': ToBeAndToHaveLesson,
  'verbs/present-and-future-tense': PresentAndFutureTenseLesson,
  'verbs/past-tense': PastTenseLesson,
  'verbs/continuous-present-tense': ContinuousPresentTenseLesson,
  'vocabulary/family': FamilyVocabLesson,
};

export default function LessonDetailPage() {
  const { category, lesson } = useParams();
  const lessonKey = `${category}/${lesson}`;
  const LessonComponent = lessonComponentMap[lessonKey];

  if (!LessonComponent) {
    return (
      <div className="page-shell">
        <h1>Lesson not found</h1>
        <p>The lesson you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <div className="lesson-nav-section-top">
        <LessonNavigation category={category} lesson={lesson} showBackOnly={true} />
      </div>
      <MDXProvider>
        <LessonComponent />
      </MDXProvider>
      <LessonNavigation category={category} lesson={lesson} showArrowsOnly={true} />
    </div>
  );
}
