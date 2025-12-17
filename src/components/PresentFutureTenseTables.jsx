import React from 'react';
import VerbConjugationTable from './VerbConjugationTable';

export function MeVerbsPatternTable() {
  return (
    <VerbConjugationTable
      headers={['Pronoun', 'Prefix', 'Suffix']}
      rows={[
        ['I', 'እ-', '-ለሁ'],
        ['we', 'እን-', '-ለን'],
        ['you (male)', 'ት-', '-ለህ'],
        ['you (female)', 'ት-', '-ለሽ'],
        ['you (plural)', 'ት-', '-ላችሁ'],
        ['he/it', 'ይ-', '-አል'],
        ['she', 'ት-', '-ለች'],
        ['they', 'ይ-', '-አሉ'],
      ]}
    />
  );
}

export function MeVerbsExampleTable() {
  return (
    <VerbConjugationTable
      rows={[
        ['I go', 'I will go', 'እሄዳለሁ'],
        ['We go', 'We will go', 'እንሄዳለን'],
        ['you (male) go', 'you (male) will go', 'ትሄዳለህ'],
        ['you (female) go', 'you (female) will go', 'ትሄጂያለሽ'],
        ['you (plural) go', 'you (plural) will go', 'ትሄዳላችሁ'],
        ['he/it goes', 'he/it will go', 'ይሄዳል'],
        ['She goes', 'She will go', 'ትሄዳለች'],
        ['They go', 'They will go', 'ይሄዳሉ'],
      ]}
    />
  );
}

export function MaVerbsPatternTable() {
  return (
    <VerbConjugationTable
      headers={['Pronoun', 'Prefix', 'Suffix']}
      rows={[
        ['I', 'አ-', '-ለሁ'],
        ['we', 'እና-', '-ለን'],
        ['you (male)', 'ታ-', '-ለህ'],
        ['you (female)', 'ታ-', '-ለሽ'],
        ['you (plural)', 'ታ-', '-ላችሁ'],
        ['he/it', 'ያ-', '-አል'],
        ['she', 'ታ-', '-ለች'],
        ['they', 'ያ-', '-አሉ'],
      ]}
    />
  );
}

export function MaVerbsExampleTable() {
  return (
    <VerbConjugationTable
      rows={[
        ['I think', 'I will think', 'አስባለሁ'],
        ['We think', 'We will think', 'እናስባለን'],
        ['you (male) think', 'you (male) will think', 'ታስባለህ'],
        ['you (female) think', 'you (female) will think', 'ታስቢያለሽ'],
        ['you (plural) think', 'you (plural) will think', 'ታስባላችሁ'],
        ['he/it thinks', 'he/it will think', 'ያስባል'],
        ['She thinks', 'She will think', 'ታስባለች'],
        ['They think', 'They will think', 'ያስባሉ'],
      ]}
    />
  );
}

