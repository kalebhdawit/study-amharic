import React from 'react';
import VerbConjugationTable from './VerbConjugationTable';

export function MeVerbsContinuousTable() {
  return (
    <VerbConjugationTable
      headers={['Pronoun', 'Past tense', 'Present continuous tense']}
      rows={[
        ['I', 'I came = መጣሁ', 'I am coming = እየመጣሁ ነው'],
        ['we', 'We came = መጣን', 'We are coming = እየመጣን ነው'],
        ['you (male)', 'You (male) came = መጣህ', 'You (male) are coming = እየመጣህ ነው'],
        ['you (female)', 'You (female) came = መጣሽ', 'You (female) are coming = እየመጣሽ ነው'],
        ['you (plural)', 'You (plural) came = መጣችሁ', 'You (plural) are coming = እየመጣችሁ ነው'],
        ['he/it', 'he/it came = መጣ', 'he/it is coming = እየመጣ ነው'],
        ['she', 'She came = መጣች', 'She is coming = እየመጣች ነው'],
        ['they', 'They came = መጡ', 'They are coming = እየመጡ ነው'],
      ]}
    />
  );
}

export function MaVerbsContinuousTable() {
  return (
    <VerbConjugationTable
      headers={['Pronoun', 'Past tense', 'Present continuous tense']}
      rows={[
        ['I', 'I did = አደረኩ', 'I am doing = እያደረኩ ነው'],
        ['we', 'We did = አደረግን', 'We are doing = እያደረግን ነው'],
        ['you (male)', 'You (male) did = አደረክ', 'You (male) are doing = እያደረክ ነው'],
        ['you (female)', 'You (female) did = አደረግሽ', 'You (female) are doing = እያደረግሽ ነው'],
        ['you (plural)', 'You (plural) did = አደረጋችሁ', 'You (plural) are doing = እያደረጋችሁ ነው'],
        ['he/it', 'he/it did = አደረገ', 'he/it is doing = እያደረገ ነው'],
        ['she', 'She did = አደረገች', 'She is doing = እያደረገች ነው'],
        ['they', 'They did = አደረጉ', 'They are doing = እያደረጉ ነው'],
      ]}
    />
  );
}

