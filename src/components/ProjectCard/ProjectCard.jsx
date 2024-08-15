import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ icon, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="card-project">
      <div className="icon">
        <img src={icon} alt="Project Icon" />
      </div>
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
      <button onClick={toggleModal}>Saiba mais</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={toggleModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
