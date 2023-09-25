// Modal.js
import React from 'react';
import {createPortal} from 'react-dom';
import "./modal.css";
const Modal = ({ children }) => {
  const portalRoot = document.getElementById('modal-dialog-root');
  console.log(children);
  const modalContent = (
    <div className="modal">
      {children}
    </div>
  );

  return createPortal(modalContent, portalRoot);
};

export default Modal;
