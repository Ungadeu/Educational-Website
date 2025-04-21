import React from 'react';
import 'resourceHub.css';

const ResourceHub = () => {
    return (
        <div>
            {/*Header with buttons*/}
            <div className="header">
                {/* update the button to link to websites in main using <a href=""</a>*/}
                <a href="index.html" className="section-link">  
                    <div className="button">Home</div>
                </a>
                <a href="Engineering.html" className="section-link">
                    <div className="button">Engineering</div>
                </a>
                <a href="Technology.html" className="section-link">
                    <div className="button">Technology</div>
                </a>
                <a href="Mathematics.html" className="section-link">
                    <div className="button">Mathematics</div>
                </a>
                <a href="About.html" className="section-link">
                    <div className="button">About Us</div>
                </a>
            </div>
            <div className="banner">
                <h1>The STEM Community Hub</h1>
            </div>

            {/* Main page layout */}
            <div className="main-layout">
                {/* Section 1 */}
                <a href="resourceMain/resourceMain.html" className="section-link">
                    <div className="section">
                        <h2>STEM Resources</h2>
                        <img src="Images/product-management_10869057.png" alt=" stem resource icon"/> 
                    </div>
                </a>
                {/* Section 2 */}
                <div className="section">
                    <h2>STEM Forum</h2>
                    <img src="Images/message_11144914.png" alt="stem forum icon"/> 
                </div>
                (/* Section 3 */)
                <a href="userpage/userPage.html" className="section-link">
                    <div className="section">
                        <h2>User Page</h2>
                        <img src="Images/user_5735921.png" alt="user icon"/>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ResourceHub;