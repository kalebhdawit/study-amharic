import React from 'react';
import VerbConjugationTable from './VerbConjugationTable';

export function RegularVerbsPatternTable() {
  return (
    <VerbConjugationTable
      headers={['Pronoun', 'Suffix']}
      rows={[
        ['I', '-ኩ'],
        ['we', '-ን'],
        ['you (male)', '-ክ'],
        ['you (female)', '-ሽ'],
        ['you (plural)', '-አችሁ'],
        ['he/it', '-አ'],
        ['she', '-አች'],
        ['they', '-ኡ'],
      ]}
    />
  );
}

export function RegularVerbsExampleTable() {
  return (
    <VerbConjugationTable
      rows={[
        ['I went', 'ሄድኩ'],
        ['We went', 'ሄድን'],
        ['you (male) went', 'ሄድክ'],
        ['you (female) went', 'ሄድሽ'],
        ['you (plural) went', 'ሄዳችሁ'],
        ['he/it went', 'ሄደ'],
        ['She went', 'ሄደች'],
        ['They went', 'ሄዱ'],
      ]}
    />
  );
}

export function EtVerbsPatternTable() {
  return (
    <VerbConjugationTable
      headers={['Pronoun', 'Suffix']}
      rows={[
        ['I', '-ሁ / -hu'],
        ['we', '-ን / -n'],
        ['you (male)', '-ህ / -h'],
        ['you (female)', '-ሽ / -sh'],
        ['you (plural)', '-አችሁ / -achu'],
        ['he/it', 'Just drop the ት'],
        ['she', '-ች / -ch'],
        ['they', '-ኡ / -u'],
      ]}
    />
  );
}

export function EtVerbsExampleTable() {
  return (
    <VerbConjugationTable
      rows={[
        ['I saw', 'አየሁ'],
        ['We saw', 'አየን'],
        ['you (male) saw', 'አየህ'],
        ['you (female) saw', 'አየሽ'],
        ['you (plural) saw', 'አያችሁ'],
        ['he/it saw', 'አየ'],
        ['She saw', 'አየች'],
        ['They saw', 'አዩ'],
      ]}
    />
  );
}

export function AtVerbsPatternTable() {
  return (
    <VerbConjugationTable
      headers={['Pronoun', 'Suffix']}
      rows={[
        ['I', '-ሁ / -hu'],
        ['we', '-ን / -n'],
        ['you (male)', '-ህ / -h'],
        ['you (female)', '-ሽ / -sh'],
        ['you (plural)', '-አችሁ / -achu'],
        ['he/it', 'Just drop the ት'],
        ['she', '-ች / -ch'],
        ['they', '-ኡ / -u'],
      ]}
    />
  );
}

export function AtVerbsExampleTable() {
  return (
    <VerbConjugationTable
      rows={[
        ['I ate', 'በላሁ'],
        ['We ate', 'በላን'],
        ['you (male) ate', 'በላህ'],
        ['you (female) ate', 'በላሽ'],
        ['you (plural) ate', 'በላችሁ'],
        ['he/it ate', 'በላ'],
        ['She ate', 'በላች'],
        ['They ate', 'በሉ'],
      ]}
    />
  );
}

