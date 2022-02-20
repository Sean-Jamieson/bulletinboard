// src/app.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import NavBar from './components/nav-bar';
import Home from './components/Home';
import Profile from './components/profile';

import './App.css';

const App = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();

  if(isLoading) {
    return <p> Is loading... </p>
  }
  if(isAuthenticated) {
    document.cookie = `email=${user.email}`;
  }
  

  return (
    <div id="app">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;