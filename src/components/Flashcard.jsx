import React, { useState } from 'react';
import '../css/Flashcard.css';

function Flashcard({ questionData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-80 h-48 perspective-1000 " onClick={handleFlip}>
        <div className={`w-full h-full bg-gray-00 rounded-lg shadow-lg transform transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front side of the flashcard */}
          <div className="absolute w-full h-full flex flex-col justify-center items-center p-4 backface-hidden">
            <h3>{questionData.question}</h3>
            <ul>
              {questionData.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>

          {/* Back side of the flashcard */}
          <div className="flashcard-back absolute w-full h-full flex items-center justify-center p-4 transform rotate-y-180">
            <h3>Answer</h3>
            <p>{questionData.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
