import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './SecondScreen.css';

import icon from '../../assets/fogo.png'

const SecondScreen = () => {
  const projects = Array(6).fill({ title: "SysGen", description: "Um sistema de gerenciamento de Funcionários na empresa" });

  return (
    <div className='screen'>
      <div className="title">
        <h1>Projetos</h1>
      </div>
      <div className="projetos">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            icon={icon} 
            title={project.title} 
            description={project.description} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default SecondScreen;
