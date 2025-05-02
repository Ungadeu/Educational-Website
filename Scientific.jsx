import React, { useState } from 'react';
import './Science.css'; // Assuming you'll convert the CSS as well

const ScientificHistory = () => {
  const [activeSection, setActiveSection] = useState('definitionOfScience');

  const showInfo = (id) => {
    setActiveSection(id);
  };

  return (
    <div className="container">
      <div className="left-section">
        <h1 className="title">SCIENTIFIC<br />HISTORY</h1>
        <div className="basics">
          <p>You'll be shown the basics:</p>
          <ul>
            <li>Why science is important</li>
            <li>Different discoveries made</li>
            <li>Fun facts on the topic</li>
          </ul>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <span>1</span>
            <a href="#" onClick={(e) => { e.preventDefault(); showInfo('definitionOfScience'); }}>
              <p>Definition of Science</p>
            </a>
          </div>
          <div className="nav-item">
            <span>2</span>
            <a href="#" onClick={(e) => { e.preventDefault(); showInfo('importantDiscoveries'); }}>
              <p>Important Discoveries</p>
            </a>
          </div>
          <div className="nav-item">
            <span>3</span>
            <a href="#" onClick={(e) => { e.preventDefault(); showInfo('funScienceFacts'); }}>
              <p>Fun Science Facts</p>
            </a>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="info-section">
          <p 
            id="definitionOfScience" 
            className="info-paragraph" 
            style={{ display: activeSection === 'definitionOfScience' ? 'block' : 'none' }}
          >
            Science is like a superpower that helps us understand everything around us! It teaches us that all things are made of tiny building blocks called atoms, and that living things are made of even tinier parts called cells. 
            Science also helps us explore all the different environments on our planet, from the deepest oceans to the tallest mountains, and figure out how they work. It's like having a secret key to unlock the mysteries of the universe!
          </p>
          <img 
            id="definitionOfScienceImage" 
            src="Sci Pics/Sci Pic 1.png" 
            alt="Definition Of Science" 
            className="info-image" 
            style={{ display: activeSection === 'definitionOfScience' ? 'block' : 'none' }}
          />

          <p 
            id="importantDiscoveries" 
            className="info-paragraph" 
            style={{ display: activeSection === 'importantDiscoveries' ? 'block' : 'none' }}
          >
            Over time, curious scientists have made incredible discoveries! They've dug up giant bones that tell us about amazing creatures called dinosaurs that lived millions of years ago. 
            They've also carefully studied our bodies to learn how all our different parts work together, like our hearts and lungs. 
            And they've figured out how different things mix and change, like simple chemical reactions that happen when you bake a cake or mix vinegar and baking soda! These discoveries help us understand our history and how the world works.
          </p>
          <img 
            id="importantDiscoveriesImage" 
            src="Sci Pics/Sci Pic 2.png" 
            alt="Important Discoveries" 
            className="info-image" 
            style={{ display: activeSection === 'importantDiscoveries' ? 'block' : 'none' }}
          />

          <p 
            id="funScienceFacts" 
            className="info-paragraph" 
            style={{ display: activeSection === 'funScienceFacts' ? 'block' : 'none' }}
          >
            Science can even be super fun to do right at home! You can put a drop of dish soap into a bowl of milk with food coloring and watch the colors swirl and dance! Or, if you drop some Mentos into a bottle of soda, you can see a fizzy eruption! 
            You can even make sparkly ice crystals by putting a sealed water bottle in the freezer just until it's almost frozen, then quickly taking it out and tapping it! Science is full of amazing things you can explore yourself!
          </p>
          <img 
            id="funScienceFactsImage" 
            src="Sci Pics/Sci Pic 3.png" 
            alt="Fun Science Facts" 
            className="info-image" 
            style={{ display: activeSection === 'funScienceFacts' ? 'block' : 'none' }}
          />
        </div>
        <div className="return-button">
          <a href="MainPage.html">   
            <p>Return to<br />Main Menu</p>
          </a>     
        </div>
      </div>
    </div>
  );
};

export default Scientific;