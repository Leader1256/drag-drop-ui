
import React, { useState } from 'react';
import Canvas from './Canvas';
import './App.css';

const App = () => {
  const [modalText, setModalText] = useState(null);

  const openModal = (text) => {
    setModalText(text);
  };
  

  const closeModal = () => {
    setModalText(null);
  };

  return (
    <div className="app">
      <h1>Drag and Drop UI with Cards</h1>
      <Canvas openModal={openModal} />
      {modalText && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modalText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
