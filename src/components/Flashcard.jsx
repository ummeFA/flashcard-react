import React, { useState } from 'react';
import '../css/Flashcard.css'; // Add styles for flipping

function Flashcard({ questionData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        {/* Front side of the flashcard */}
        <div className="flashcard-front">
          <h3>{questionData.question}</h3>
          <ul>
            {questionData.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>

        {/* Back side of the flashcard */}
        <div className="flashcard-back">
          <h3>Answer</h3>
          <p>{questionData.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
