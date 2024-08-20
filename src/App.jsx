import React from 'react';
import ContactScreen from './components/ContactScreen/ContactScreen';
import FistScreen from './components/FistScreen/FistScreen';
import Navbar from './components/Navbar/Navbar';
import SecondScreen from './components/SecondScreen/SecondScreen';
import ThreeScreen from './components/ThreeScreen/ThreeScreen';
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <FistScreen />
      </Element>
      <Element name="projects">
        <SecondScreen />
      </Element>
      <Element name="skills">
        <ThreeScreen />
      </Element>
      <Element name="contact">
        <ContactScreen />
      </Element>
    </div>
  );
}

export default App;
