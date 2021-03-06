import logo from './logo.svg';
import './App.scss';
import Gallery from "./pages/gallery/Gallery";
import React from "react";
import {GalleryModalProvider} from "./contexts/GalleryModalContext";

function App() {
  return (
    <div className="App">
        <Gallery />
    </div>
  );
}

export default App;
