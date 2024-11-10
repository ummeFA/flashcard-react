import { create } from 'zustand';

const useFlashcardStore = create((set) => {
  // Immediately fetch data on store initialization
  (async () => {
    try {
      const response = await fetch('/../src/data.json');
      const data = await response.json();
      set({ vocabularyData: data.vocabulary });
    } catch (error) {
      console.error('Error loading vocabulary data:', error);
    }
  })();

  return {
    vocabularyData: [],
    currentIndex: 0,
    
    // Actions to navigate through flashcards
    nextFlashcard: () =>
      set((state) => ({
        currentIndex: (state.currentIndex + 1) % state.vocabularyData.length,
      })),
    previousFlashcard: () =>
      set((state) => ({
        currentIndex:
          state.currentIndex === 0
            ? state.vocabularyData.length - 1
            : state.currentIndex - 1,
      })),
  };
});

export default useFlashcardStore;
