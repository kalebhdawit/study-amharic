import React from 'react';
import '../App.css';

export default function ToBeTable() {
  const data = [
    { english: 'I am', amharic: 'እኔ ነኝ' },
    { english: 'we are', amharic: 'እኛ ነን' },
    { english: 'you (male) are', amharic: 'አንተ ነህ' },
    { english: 'you (female) are', amharic: 'አንቺ ነሽ' },
    { english: 'you (respectful) are', amharic: 'እርስዎ ኖት' },
    { english: 'you (plural) are', amharic: 'እናንተ ናችሁ' },
    { english: 'he/it is', amharic: 'እሱ ነው' },
    { english: 'she is', amharic: 'እሷ ናት' },
    { english: 'respectful third person is', amharic: 'እሳቸው ናቸው' },
    { english: 'they are', amharic: 'እነሱ ናቸው' },
  ];

  return (
    <div className="lesson-table-container">
      <div className="lesson-table" data-cols="2">
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

