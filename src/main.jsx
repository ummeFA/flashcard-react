import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Flashcard from "./components/Flashcard";
import ShowVocabList from "./components/ShowVocabList";
// main.jsx or App.jsx
import "./index.css";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Navbar/>
      <Flashcard/>
      </>
    ),
  },
  
  {
    path: "/show-vocab-list",
    element: (
      <>
      <Navbar/>
      <ShowVocabList />
      </>
    ),
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
