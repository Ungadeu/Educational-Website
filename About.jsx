import React from 'react';
import './Aboutstyles.css';
const About = () => {
  return (
    <div className="container">
      <div className="left">
        <img src="STEM Support.png" alt="STEM Support Logo" />
        <h2>STEM Support</h2>
        <button className="email-btn">Email</button>
        <div className="social-icons">
          <a href="#"><img src="instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="twitter.png" alt="Twitter" /></a>
          <a href="#"><img src="facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="linkedin.png" alt="LinkedIn" /></a>
        </div>
      </div>
      <div className="right">
        <h2>About Us</h2>
        <p>
          Welcome to STEM Support, your go-to platform for discovering and pursuing your passion in
          Science, Technology, Engineering, and Mathematics (STEM). Our mission is to empower
          individuals by providing insightful questionnaires that evaluate your interests and strengths,
          helping you navigate your ideal STEM pathway.
        </p>
        <ul>
          <li><strong>Personalized Assessments</strong> – Answer targeted questions to uncover your strengths and areas of interest in STEM.</li>
          <li><strong>Comprehensive Resources</strong> – Access a curated collection of educational materials, career guides, and learning tools tailored to your interests.</li>
          <li><strong>Supportive Community</strong> – Connect with a network of like-minded individuals, mentors, and professionals who can help guide your journey.</li>
        </ul>
        <p>
          Whether you are a student exploring STEM careers, a professional seeking to expand your
          skills, or simply curious about where your strengths lie, STEM Support is here to guide you
          every step of the way.
        </p>
        <p>
          STEM Support was created by Christian Rosario, Uriel Ngadeu, Yann Kegne, Djean Steen, and Adnaan Thadathil.
        </p>
        <p>
          Join us today and take the first step toward unlocking your full potential in STEM!
        </p>
      </div>
    </div>
  );
};

export default About; 
