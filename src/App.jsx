import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import './css/Flashcard.css'; // Assuming your styles are here

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
    {
      question: 'What is a component?',
      options: ['A function', 'A reusable UI element', 'A CSS framework'],
      answer: 'A reusable UI element',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcardData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <Flashcard questionData={flashcardData[currentIndex]} />

      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button className="nav-btn" onClick={handlePrevious}>Previous</button>
        <button className="nav-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
