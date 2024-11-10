import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Flashcard from './components/Flashcard';
import ShowVocabList from './components/ShowVocabList';
// main.jsx or App.jsx
import './index.css';


const router = createBrowserRouter([{
  path: '/',
  element: <Flashcard/>
},
{
  path:'/show-vocab-list',
  element: <ShowVocabList/>
}
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  
  </React.StrictMode>
);