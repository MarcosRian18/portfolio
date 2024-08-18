import React from "react";
import './Map.css'
const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122611.74358671872!2d-48.036340031780455!3d-16.188690273194528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a4e0df6e405%3A0xc8141f04d788aa0d!2zTHV6acOibmlhLCBHTw!5e0!3m2!1spt-BR!2sbr!4v1723991422879!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <h2 className="subTitleContact">Resido em Luziânia - Go. Sempre pronto e disponivel para locomoções</h2>
    </div>
  );
};

export default Map;
