import React from 'react';
import '../App.css';

export default function FidelTable() {
    const rows = [
      {
        label: 'h',
        fidel: ['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ'],
      },
      {
        label: 'l',
        fidel: ['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ'],
      },
      {
        label: 'm',
        fidel: ['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ'],
      },
      {
        label: 's',
        fidel: ['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ'],
      },
      {
        label: 'sh',
        fidel: ['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ'],
      },
      {
        label: 'q',
        fidel: ['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ'],
      },
      {
        label: 'b',
        fidel: ['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ'],
      },
      {
        label: 't',
        fidel: ['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ'],
      },
      {
        label: 'n',
        fidel: ['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ'],
      },
      {
        label: 'k',
        fidel: ['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ'],
      },
      {
        label: 'w',
        fidel: ['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ'],
      },
      {
        label: 'z',
        fidel: ['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ'],
      },
      {
        label: 'y',
        fidel: ['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ'],
      },
      {
        label: 'd',
        fidel: ['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ'],
      },
      {
        label: 'g',
        fidel: ['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ'],
      },
      {
        label: 'p',
        fidel: ['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ'],
      },
    ];
  
    const vowels = ['ä', 'u', 'i', 'a', 'e', 'ə', 'o'];
  
    return (
      <div>
        <div className="fidel-table">
          <div className="table-header table-cell table-base-header"></div>
          {vowels.map((vowel) => (
            <div key={vowel} className="table-header table-cell">
              {vowel}
            </div>
          ))}
  
          {rows.map((row) => (
            <React.Fragment key={row.label}>
              <div className="table-cell table-base">{row.label}</div>
              {row.fidel.map((ch, idx) => (
                <div key={idx} className="table-cell table-char">
                  {ch}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
  
        <p className="fidel-note">
          Each row shows a base consonant with its seven vowel forms (ä, u, i, a,
          e, ə, o). You can add more rows to the <code>rows</code> array as
          needed.
        </p>
      </div>
    );
  }
  