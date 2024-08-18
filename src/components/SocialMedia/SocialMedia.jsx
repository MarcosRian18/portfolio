import React from "react";
import icons from "../../assets/data";
import './SocialMedia.css'
const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <a href="https://www.instagram.com/marcos_rian.dev/" target="_blank">
        <img src={icons.insta} alt="insta" />
      </a>
      <a href="https://wa.me/5561991459161" target="_blank">
        <img src={icons.whats} alt="whatsapp" />
      </a>
      <a
        href="https://www.linkedin.com/in/marcos-silva-98b92419b/"
        target="_blank"
      >
        <img src={icons.linkedin} alt="linkedin" />
      </a>
      <a href="https://github.com/MarcosRian18/MarcosRian18" target="_blank">
        <img src={icons.github} alt="Github" />
      </a>
    </div>
  );
};

export default SocialMedia;
