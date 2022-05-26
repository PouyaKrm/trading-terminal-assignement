import logo from './logo.svg';
import './App.scss';
import Gallery from "./pages/gallery/Gallery";
import React from "react";
import {ModalProvider} from "./contexts/ModalContext";

function App() {
  return (
    <div className="App">
        <ModalProvider>
            <Gallery />
        </ModalProvider>

    </div>
  );
}

export default App;
