
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userService from '../../service/user-service';
import { PropagateLoader } from 'react-spinners';
import ProfileHeader from '../avatar/profile-header';

const ProfilePage = () => {
    const { email } = useParams();
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await userService.getUserByEmail(email);
                setUserData(response);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [email]);

    return (
        <div>
            {!isLoading ? (
                <ProfileHeader name={userData.name} email={userData.email}/>
            ) : (
                <div className='container mt-5  p-5 d-flex  justify-content-center mb-5'>
                    <PropagateLoader color='#49ceff' />
                </div>
            )}
        </div>
    );
};

const Avatar = ({ name }) => {
    const avatarChar = name.charAt(0).toUpperCase();

    return (
        <div style={avatarStyle}>
            {avatarChar}
        </div>
    );
};

const avatarStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#3498db',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
};

export default ProfilePage;