import React from 'react';
import './Profile.css';

const Profile = () => {
  const authUser = JSON.parse(localStorage.getItem('isAuthUser'));

  return (
        <div className='ProfileContainer'>
            Profile Page
          {authUser.id}
        </div>

    );
};

export default Profile;
