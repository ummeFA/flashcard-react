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
            <p>{currentQuestion.answer}</p>
          </div>
        </div>
      </div>
      {/* Navigation buttons */}
      <div className="flex justify-between w-48 mt-5">
  <button
    className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
    onClick={() => { setIsFlipped(false); previousFlashcard(); }}
  >
    Previous
  </button>
  <button
    className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
    onClick={() => { setIsFlipped(false); nextFlashcard(); }}
  >
    Next
  </button>
</div>

    </div>
  );
}

export default Flashcard;
