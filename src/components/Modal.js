
import React from 'react';
import './Modal.css';

const Modal = ({ content, closeModal }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-modal-button" onClick={closeModal}>
          Close
        </button>
        <div className="modal-body">
          <p>{content}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
