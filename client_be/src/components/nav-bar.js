// src/components/nav-bar.js

import React from 'react';
import { Link } from 'react-router-dom';

import AuthNav from './auth-nav';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <AuthNav />
          <Link to="/">HOME!</Link>
          <Link to="/profile">PROFILE!</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;