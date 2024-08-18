import React from "react";
import "./ThreeScreen.css";
import logoMarcos from "../../assets/logoMarcos.png";
import icons from "../../assets/data";

const ThreeScreen = () => {
  const skills = [
    { name: "JavaScript", score: 10, icon: icons.js },
    { name: "React", score: 10, icon: icons.react },
    { name: "CSS", score: 10, icon: icons.css },
    { name: "HTML", score: 10, icon: icons.html },
    { name: "Node.js", score: 10, icon: icons.node },
    { name: "Docker", score: 10, icon: icons.docker },
    { name: "TypeScript", score: 10, icon: icons.ts },
    { name: "MongoDB", score: 10, icon: icons.mongo },
    { name: "Git", score: 10, icon: icons.git },
    { name: "Bootstrap", score: 10, icon: icons.bootstrap },
    { name: "PHP", score: 10, icon: icons.php },
    { name: "Nest.js", score: 10, icon: icons.nest },
    { name: "Laravel", score: 10, icon: icons.laravel },
    { name: "MySQL", score: 10, icon: icons.mysql },
    { name: "PostgreSQL", score: 10, icon: icons.postgre },
  ];

  return (
    <div className="skillScreen">
      <h1 className="titleScreen">Habilidades</h1>
      <div className="contentThreeScreen">
        <div className="leftContentScreen">
          <img src={logoMarcos} alt="logoLeft" />
        </div>
        <div className="rightContentScreen">
          {skills.map((skill, index) => (
            <div key={index} className="skillCard">
              <img src={skill.icon} alt={skill.name} className="skillIcon" />
              <div className="skillName">{skill.name}</div>
              <div className="skillCore">Level: {skill.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeScreen;
