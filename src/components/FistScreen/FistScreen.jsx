// components/FirstScreen.js
import React from "react";
import "./FistScreen.css";
import imgHeader from '../../assets/imgProfissional.png'

const FistScreen = () => {
  const lines = [];

  for (let i = 0; i < 40; i++) {
    const delay = Math.random() * 10; 
    const leftPosition = Math.random() * 140; 
    const duration = Math.random() * 7 + 7; 

    lines.push(
      <div
        key={i}
        className="line"
        style={{
          left: `${leftPosition}vw`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      ></div>
    );
  }

  return (
    <div className="first-screen">
      {lines}
      <div className="marcosImg">
        <img src={imgHeader} alt="imgLogo" />
      </div>
      <div className="content">
        <h1>Olá Pessoal</h1>
        <h2 className="typingTitle">Marcos Rian</h2>
        <h3 className="typingTitle">Desenvolvedor Full-Stack</h3>  
        <p className="description">
        Desenvolvedor Web graduado em Ciências da Computação, com experiência sólida em back-end e
 front-end, além de habilidades em sistemas como PostgreSQL e MySQL. Proficiente no
 desenvolvimento de soluções web utilizando HTML, CSS, JavaScript, Bootstrap e Node.js. Busco
 oportunidades de crescimento profissional e aprendizado contínuo.
        </p>

        <button>Minha Historia</button>
      </div>
    </div>
  );
};

export default FistScreen;
