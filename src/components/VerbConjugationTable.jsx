import React from 'react';
import '../App.css';

export default function VerbConjugationTable({ headers, rows }) {
  const numCols = headers ? headers.length : (rows[0]?.length || 2);

  return (
    <div className="lesson-table-container">
      <div className="lesson-table" data-cols={numCols}>
        {headers && (
          <div className="lesson-table-header">
            {headers.map((header, idx) => (
              <div key={idx} className="lesson-table-cell lesson-table-header-cell">
                {header}
              </div>
            ))}
          </div>
        )}
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="lesson-table-row">
            {row.map((cell, cellIdx) => (
              <div key={cellIdx} className="lesson-table-cell">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

