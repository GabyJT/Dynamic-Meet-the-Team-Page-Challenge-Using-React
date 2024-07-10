import React from 'react';
import './Profile.css';

const Profile = ({ name, role, photo }) => {
    return (
        <div className="profile">
            <img src={photo} alt={name} className="profile-photo" />
            <h2 className="profile-name">{name}</h2>
            <p className="profile-role">{role}</p>
        </div>
    );
};

export default Profile;
