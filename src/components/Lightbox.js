import React, { useState } from "react";
import "./Lightbox.scss";

const Lightbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleModal}>Show Instructions</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Instructions</h2>
            <p>Here are the detailed instructions for using the dashboard...</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
