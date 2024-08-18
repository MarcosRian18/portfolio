import React from "react";
import Form from "../Form/Form";
import "./ContactScreen.css";
import Map from "../Map/Map";
import SocialMedia from "../SocialMedia/SocialMedia";
const ContactScreen = () => {
  return (
    <div className="contactContainer">
      <h1>Tem um sonho de ter o seu site?</h1>

      <div className="contentContainer">
        <div className="formSection">
          <Form />
        </div>

        <div className="map-socialSection">
          <Map />
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
