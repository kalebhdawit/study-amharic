import React from 'react';
import '../App.css';

export default function PossessionTable() {
  const data = [
    { pronoun: 'I', suffix: '-ኤ (-e)', example: 'ቤቴ (My house)' },
    { pronoun: 'we', suffix: '-ን (-n)', example: 'ቤትን (Our house)' },
    { pronoun: 'you (male) are', suffix: '-ህ (-h)', example: 'ቤትህ (Your (male) house)' },
    { pronoun: 'you (female) are', suffix: '-ሽ (-sh)', example: 'ቤትሽ (Your (female) house)' },
    { pronoun: 'you (plural) are', suffix: '-አችሁ (-achu)', example: 'ቤታችሁ (You all\'s house)' },
    { pronoun: 'he/it is', suffix: '-ው (-w)', example: 'ቤተው (His house)' },
    { pronoun: 'she is', suffix: '-ዋ (-wa)', example: 'ቤቷ (Her house)' },
    { pronoun: 'they are', suffix: '-አቸው (-achew)', example: 'ቤታቸው (Their house)' },
  ];

  return (
    <div className="lesson-table-container">
      <div className="lesson-table" data-cols="3">
        <div className="lesson-table-header">
          <div className="lesson-table-cell lesson-table-header-cell">Pronoun</div>
          <div className="lesson-table-cell lesson-table-header-cell">Suffix</div>
          <div className="lesson-table-cell lesson-table-header-cell">Example</div>
        </div>
        {data.map((row, idx) => (
          <div key={idx} className="lesson-table-row">
            <div className="lesson-table-cell">{row.pronoun}</div>
            <div className="lesson-table-cell">{row.suffix}</div>
            <div className="lesson-table-cell">{row.example}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

