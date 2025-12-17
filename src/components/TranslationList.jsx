import React from 'react';
import '../App.css';

export default function TranslationList({ translations }) {
  if (!translations || translations.length === 0) return null;

  return (
    <div className="translation-list">
      {translations.map((translation, idx) => {
        // Handle both string format "English\tAmharic" and object format {english, amharic}
        let english, amharic;
        if (typeof translation === 'string') {
          const parts = translation.split('\t');
          english = parts[0]?.trim();
          amharic = parts[1]?.trim();
        } else {
          english = translation.english;
          amharic = translation.amharic;
        }

        if (!english && !amharic) return null;

        return (
          <div key={idx} className="translation-item">
            <span className="translation-english">{english}</span>
            <span className="translation-separator">→</span>
            <span className="translation-amharic">{amharic}</span>
          </div>
        );
      })}
    </div>
  );
}

