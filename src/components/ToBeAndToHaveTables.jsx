import React from 'react';
import ToBeTable from './ToBeTable';
import VerbConjugationTable from './VerbConjugationTable';

export function ToBeTableReview() {
  return <ToBeTable />;
}

export function ToHaveTable() {
  return (
    <VerbConjugationTable
      rows={[
        ['I am', 'እኔ አለኝ'],
        ['we are', 'እኛ አለን'],
        ['you (male) are', 'አንተ አለህ'],
        ['you (female) are', 'አንቺ አለሽ'],
        ['you (respectful) are', 'እርስዎ አሎት'],
        ['you (plural) are', 'እናንተ አላችሁ'],
        ['he/it is', 'እሱ አለው'],
        ['she is', 'እሷ አላት'],
        ['respectful third person is', 'እሳቸው አላቸው'],
        ['they are', 'እነሱ አላቸው'],
      ]}
    />
  );
}

