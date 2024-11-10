import { useState } from 'react';
import useFlashcardStore from '../store/useFlashcardStore';
import '../css/Flashcard.css';

function Flashcard() {
  const { vocabularyData, currentIndex, nextFlashcard, previousFlashcard } = useFlashcardStore();

  // State for flip action
  const [isFlipped, setIsFlipped] = useState(false);

  // Define handleFlip function
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (vocabularyData.length === 0) {
    return (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      >
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >
          Loading...
        </span>
      </div>
    ); // Show loading message while data is being fetched
  }
  

  const currentQuestion = vocabularyData[currentIndex];

  return (
    <div className="carousel-container">
      <div className="flashcard" onClick={handleFlip}>
        <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front Side */}
          <div className="flashcard-front">
            <h3>{currentQuestion.question}</h3>
          </div>
          {/* Back Side */}
          <div className="flashcard-back">
            <h3>Answer</h3>
            <p>{currentQuestion.answer}</p>
          </div>
        </div>
      </div>
      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button className="nav-btn" onClick={previousFlashcard}>Previous</button>
        <button className="nav-btn" onClick={nextFlashcard}>Next</button>
      </div>
    </div>
  );
}

export default Flashcard;
