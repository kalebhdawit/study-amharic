import React from 'react';
import '../App.css';

export default function PronounsTable() {
  const data = [
    { english: 'I', amharic: 'እኔ' },
    { english: 'we', amharic: 'እኛ' },
    { english: 'you (male)', amharic: 'አንተ' },
    { english: 'you (female)', amharic: 'አንቺ' },
    { english: 'you (respectful)', amharic: 'እርስዎ' },
    { english: 'you (plural)', amharic: 'እናንተ' },
    { english: 'he', amharic: 'እሱ' },
    { english: 'she', amharic: 'እሷ' },
    { english: 'respectful third person', amharic: 'እርሳቸው' },
    { english: 'they', amharic: 'እነሱ' },
  ];

  return (
    <div className="lesson-table-container">
      <div className="lesson-table" data-cols="2">
        <div className="lesson-table-header">
          <div className="lesson-table-cell lesson-table-header-cell">English</div>
          <div className="lesson-table-cell lesson-table-header-cell">Amharic</div>
        </div>
        {data.map((row, idx) => (
          <div key={idx} className="lesson-table-row">
            <div className="lesson-table-cell">{row.english}</div>
            <div className="lesson-table-cell">{row.amharic}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

