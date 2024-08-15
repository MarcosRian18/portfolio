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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>

        <button>Minha Historia</button>
      </div>
    </div>
  );
};

export default FistScreen;
