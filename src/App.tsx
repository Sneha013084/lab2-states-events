

 import { useState } from 'react';
import { TextInput } from './components/TextInput/TextInput';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';
import { type TextStats } from './types';

export function App() {
  const [text, setText] = useState('');

  const calculateStats = (input: string): TextStats => {
    const characterCount = input.length;
    const wordCount = input.trim() ? input.trim().split(/\s+/).filter(Boolean).length: 0 ;
    const readingTime = Math.ceil(wordCount / 200); // Assuming 200 WPM

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  };

  const stats = calculateStats(text);

  return (
    <div>
      <h1>Text Analyzer</h1>
      <TextInput onTextChange={setText} placeholder="Type something..." />
      <StatsDisplay stats={stats} showReadingTime={true} />
    </div>
  );
}
