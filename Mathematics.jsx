import React, { useState, useEffect } from 'react';
import './Mathematics.css';
import { Link } from 'react-router-dom';

const Mathematics = () => {
  const [activeSection, setActiveSection] = useState('definitionOfMath');

  const infoData = {
    definitionOfMath: {
      text: `Math is like a special code made of numbers, shapes, and patterns that helps us understand the world! Think about counting your fingers - that's math! Noticing the pattern on a butterfly's wings? That's math too! 
      We use this math code like secret instructions to build amazing things like giant skyscrapers, super-fast cars, and even theme parks. Math helps figure out how strong to make a bridge or how high a rocket needs to go!`,
      imgSrc: '/Math Pics/Math Pic 1.png',
      alt: 'Definition Of Math'
    },
    dailyMathematics: {
      text: `You use math all day long, not just when you're doing homework! Imagine a factory making your favorite juice. They use math to measure exactly the right amount of juice for each bottle and to count how many bottles fit into a big truck. 
      When people make video games, they use math to make characters jump just right and to build the cool worlds you play in. Even when you share your snacks equally with a friend (that's dividing!)`,
      imgSrc: '/Math Pics/Math Pic 2.png',
      alt: 'Daily Mathematics'
    },
    funMathFacts: {
      text: `Math has some really cool tricks and fun facts! Did you know that bees build their honeycombs using perfect six-sided shapes called hexagons? It's the best shape to hold the most honey! 
      Here's a neat finger trick for multiplying by 9: Hold up both hands with your palms facing you. 
      To multiply 9 x 4, bend down your fourth finger (counting from the left). Now look - you have 3 fingers up before the bent one (that's 30) and 6 fingers up after the bent one (that's 6). Put them together... 36! So, 9 x 4 = 36. Try it for other numbers, it's like magic!`,
      imgSrc: '/Math Pics/Math Pic 3.png',
      alt: 'Fun Math Facts'
    }
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="container">
      <div className="left-section">
        <h1 className="title">WORLDWIDE<br />MATHEMATICS</h1>
        <div className="basics">
          <p>You'll be shown the basics:</p>
          <ul>
            <li>Why math is important</li>
            <li>How much we use math daily</li>
            <li>Fun facts on the topic</li>
          </ul>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <span>1</span>
            <a href="#" onClick={() => handleNavClick('definitionOfMath')}>
              <p>Definition of Math</p>
            </a>
          </div>
          <div className="nav-item">
            <span>2</span>
            <a href="#" onClick={() => handleNavClick('dailyMathematics')}>
              <p>Daily Mathematics</p>
            </a>
          </div>
          <div className="nav-item">
            <span>3</span>
            <a href="#" onClick={() => handleNavClick('funMathFacts')}>
              <p>Fun Math Facts</p>
            </a>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="info-section">
          {Object.entries(infoData).map(([key, { text, imgSrc, alt }]) => (
            <React.Fragment key={key}>
              {activeSection === key && (
                <>
                  <p className="info-paragraph">{text}</p>
                  <img src={imgSrc} alt={alt} className="info-image" />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="return-button">
          <Link to="/MainPage">
            <p>Return to<br />Main Menu</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mathematics;
