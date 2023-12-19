import React from "react";
import Avatar from "./avatar";
import './profile-header.css'


const ProfileHeader = ({ name, email }) => {

    return (
        <div className="profile-header-container">
            <Avatar name={name} />
            <h2>{name}</h2>
            <p>Email: {email}</p>
        </div>
    )
}

export default ProfileHeader