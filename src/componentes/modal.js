import React from "react";
import Draggable from "react-draggable";
import "./administrador.css";

function Modal({ isOpen, onRequestClose, children }) {
  return isOpen ? (
    <Draggable defaultPosition={{ x: 10, y: -520 }}>
      <div className="modal">
        <div className="modal-content ">
                {children}
            <button onClick={onRequestClose}>Cerrar</button>
        </div>
      </div>
    </Draggable>
  ) : null;
}

export { Modal };
