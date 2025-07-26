
import React, { useState } from 'react';
import  TextInput  from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import { type CharacterCounterProps } from '../../types';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 10,
  maxWords = 50,
  targetReadingTime = 1
}) => {
  const [text, setText] = useState('');

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characterCount = text.length;
  const readingTime = Math.ceil(wordCount / 200);

  const progress = maxWords > 0 ? Math.min((wordCount / maxWords) * 100, 100) : 0;


  return (
    <div>
      <label htmlFor="textInput">Character Counter</label>
      <TextInput
        onTextChange={setText}
        initialValue={text}
        placeholder="Type or paste your text..."
      />

      {maxWords > 0 && (
        <div>
          <p>Word Count Progress: {wordCount}/{maxWords} ({progress.toFixed(0)}%)</p>
          <progress value={progress} max={100}></progress>
        </div>
      )}

      <StatsDisplay
        stats={{ characterCount, wordCount, readingTime }}
        showReadingTime={targetReadingTime > 0}

      />

      {minWords > 0 && wordCount < minWords && (
        <p>Need {minWords - wordCount} more words</p>
      )}
      {maxWords > 0 && wordCount > maxWords && (
        <p>{wordCount - maxWords} words over limit</p>
      )}
    </div>
  );
};
