import React from 'react';
import Flashcard from './components/Flashcard';

function App() {
  const flashcardData = [
    {
      question: 'What is React?',
      options: ['A library for building interfaces', 'A database', 'A programming language'],
      answer: 'A library for building interfaces',
    },
    {
      question: 'What is JSX?',
      options: ['A library', 'A syntax extension', 'A CSS framework'],
      answer: 'A syntax extension',
    },
    // Add more questions as needed
  ];

  return (
    <div className="flashcard-container">
      {flashcardData.map((data, index) => (
        <Flashcard key={index} questionData={data} />
      ))}
    </div>
  );
}

export default App;
