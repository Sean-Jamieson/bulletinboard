// src/views/profile.js

import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  return (
    <div>
      <div>
        <div >
          <img
            src={picture}
            alt="Profile"
            
          />
        </div>
        <div >
          <h2>{name}</h2>
          <p >{email}</p>
        </div>
      </div>
      <div >
      </div>
    </div>
  );
};

export default Profile;