import React from "react";
import './userPage.css';

const UserPage = () => {
    return (
        <div>
            <div className="profile-container">
                {/* profile start with core info*/}
                <div className="profile-header">
                    {/* Field banner - change className to science/math/engineering/technology */}
                    <div className="field-banner engineering">Engineering</div>
                    {/* Profile Pic can be changed linked to images folder*/}
                    <img src="../Images/user_5735921.png" alt="Profile Picture" className="profile-pic"/>
                {/* Details below are placeholder for backend to store actual data*/}
                    <div className="username">First Name Last Name</div>
                    <div className="bio">Interested in civil engineering. Likes playing tennis and video games. Enjoys drinking coffee and eating pasta.</div>
                </div>
                {/* profile detail info, email, dates, and status of user*/}
                <div className="profile-details">
                    <div className="detail-card email">
                        <div className="detail-label">Email</div>
                        <div className="detail-value email">firstnameLastname@example.com</div>
                    </div>
            
                    <div className="detail-card join-date">
                        <div className="detail-label">Join Date</div>
                        <div className="detail-value">April 13, 2025</div>
                    </div>
            
                    <div className="detail-card">
                        <div className="detail-label">Account Status</div>
                        <div className="detail-value">Active</div>
                    </div>
            
                    <div className="detail-card last-active">
                        <div className="detail-label">Last Active</div>
                        <div className="detail-value">
                            <span className="status-indicator status-active"></span>
                            8 hours ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;