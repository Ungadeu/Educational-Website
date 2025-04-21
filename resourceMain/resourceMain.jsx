import React from "react";
import './resourceMain.css';
import './resourceMain.js';

const ResourceMain = () => {
    return (
        <div>
            {/* Main Navigation Buttons */}
            <div className="top-buttons">
                <a href="" className="top-btn">STEM Forum</a>
                <a href="../resourceHub.html" className="top-btn">Community Hub</a>
                <a href="../userpage/userPage.html" className="top-btn">User Profile</a>
            </div>
    
            <div className="nav-buttons">
                <button className="nav-btn" onclick="scrollToSection('part1')">STEM News</button>
                <button className="nav-btn" onclick="scrollToSection('part2')">STEM Education</button>
                <button className="nav-btn" onclick="scrollToSection('part3')">STEM Careers</button>
                <button className="nav-btn" onclick="scrollToSection('part4')">STEM Research</button>
            </div>
    
            {/* Part 1 */}
            <div id="part1" className="section part1-bg">
                <div className="section-heading">
                    <h2>STEM News</h2>
                </div>
        
                <div className="heading-group-container">
                    {/* Group 1 */}
                    <div className="heading-group">
                        <div className="group-heading">Science News</div>
                        <div className="square-button">news</div>
                        <div className="square-button">news</div>
                        <div className="square-button">news</div>
                    </div>
            
                    {/* Group 2 */}
                    <div className="heading-group">
                        <div className="group-heading">Technology News</div>
                        <div className="square-button">news</div>
                        <div className="square-button">news</div>
                        <div className="square-button">news</div>
                    </div>
            
                    {/* Group 3 */}
                    <div className="heading-group">
                        <div className="group-heading">Engineering News</div>
                        <div className="square-button">news</div>
                        <div className="square-button">news</div>
                        <div className="square-button">news</div>
                    </div>
            
                    {/* Group 4 */}
                    <div className="heading-group">
                        <div className="group-heading">Mathematics News</div>
                        <div className="square-button">news</div>
                        <div className="square-button">news</div>
                        <div className="square-button">news</div>
                    </div>
                </div>
            </div>
    
            {/* Part 2 */}
            <div id="part2" className="section part2-bg">
                <div className="section-heading">
                    <h2>STEM Education</h2>
                </div>
        
                <div className="page-buttons">
                    <button className="square-button page-btn">Science</button>
                    <a href="../Technology.html">
                        <button className="square-button page-btn">Technology</button>
                    </a>
                    <a href="../Engineering.html">   
                        <button className="square-button page-btn">Engineering</button>
                    </a>
                    <a href="../Mathematics.html">   
                        <button className="square-button page-btn">Mathematics</button>
                    </a>
                </div>
            </div>
    
            {/* Part 3 */}
            <div id="part3" className="section part3-bg">
                <div className="section-heading">
                    <h2>STEM Careers</h2>
                </div>
    
                <div className="bubble-path">
                    {/* Main Bubbles Row */}
                    <div className="main-bubbles-container">
                        <div className="main-bubble" onclick="showBubbleSet(1)">Science</div>
                        <div className="main-bubble" onclick="showBubbleSet(2)">Technology</div>
                        <div className="main-bubble" onclick="showBubbleSet(3)">Engineering</div>
                        <div className="main-bubble" onclick="showBubbleSet(4)">Mathematics</div>
                    </div>
        
                    {/* Bubble Sets Container */}
                    <div className="bubble-sets-container">
                        {/* Bubble Set 1 */}
                        <div id="bubble-set-1" className="bubble-set hidden">
                            <div className="sub-bubble">Clinical Technician</div>
                            <div className="sub-bubble">Forensic Science Techinician</div>
                            <div className="sub-bubble">Chemist</div>
                            <div className="sub-bubble">Biologist</div>
                            <div className="sub-bubble">Researcher</div>
                            <div className="sub-bubble">Biomedical Engineer</div>
                        </div>
            
                        {/* Bubble Set 2 */}
                        <div id="bubble-set-2" className="bubble-set hidden">
                            <div className="sub-bubble">Database Administrator</div>
                            <div className="sub-bubble">Data Anaylst</div>
                            <div className="sub-bubble">Web Developer</div>
                            <div className="sub-bubble">Software Engineer</div>
                            <div className="sub-bubble">Cybersecurity Specialist</div>
                            <div className="sub-bubble">Cloud Engineer</div>
                        </div>
            
                        {/* Bubble Set 3 */}
                        <div id="bubble-set-3" className="bubble-set hidden">
                            <div className="sub-bubble">Marine Engineer</div>
                            <div className="sub-bubble">Mechanical Engineer</div>
                            <div className="sub-bubble">Computer Engineer</div>
                            <div className="sub-bubble">Civil Engineer</div>
                            <div className="sub-bubble">Nuclear Engineer</div>
                            <div className="sub-bubble">Electrical Engineer</div>
                        </div>
            
                        {/* Bubble Set 4 */}
                        <div id="bubble-set-4" className="bubble-set hidden">
                            <div className="sub-bubble">Mathematics Teacher</div>
                            <div className="sub-bubble">Accountant</div>
                            <div className="sub-bubble">Financial Analyst</div>
                            <div className="sub-bubble">Statistician</div>
                            <div className="sub-bubble">Mathematician</div>
                            <div className="sub-bubble">Economist</div>
                        </div>
                    </div>
                </div>
            </div>
    
            {/* Part 4 */}
            <div id="part4" className="section part4-bg">
                <div className="section-heading">
                    <h2>STEM Research</h2>
                </div>
        
                <div className="heading-group-container">
                    {/* Group 1 */}
                    <div className="heading-group">
                        <div className="group-heading">Science Research</div>
                        <div className="square-button">Research</div>
                        <div className="square-button">Research</div>
                        <div className="square-button">Research</div>
                    </div>
            
                    {/* Group 2 */}
                    <div className="heading-group">
                        <div className="group-heading">Technology Research</div>
                        <div className="square-button">Research</div>
                        <div className="square-button">Research</div>
                        <div className="square-button">Research</div>
                    </div>
            
                    {/* Group 3 */}
            <       div className="heading-group">
                        <div className="group-heading">Engineering Research</div>
                        <div className="square-button">Research</div>
                        <div className="square-button">Research</div>
                        <div className="square-button">Research</div>
                    </div>
            
                    {/* Group 4 */}
                    <div className="heading-group">
                        <div className="group-heading">Mathematics Research</div>
                        <div className="square-button">Research</div>
                        <div className="square-button">Research</div>
                        <div className="square-button">Research</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceMain;