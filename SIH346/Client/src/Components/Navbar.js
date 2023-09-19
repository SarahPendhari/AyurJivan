import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import hindi from '../Hindi.json';
import english from '../english.json';
import logo from './images/logo.png';
import notescontext from '../Components/context/notes/notecontext';
import mainlogo from "../Components/images/mainlogo.png"
const Navbar = () => {
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          backgroundColor: '#F4F4F4',
          gap: '45%',
          color: 'green',
          position: 'fixed',
          width: '100%',
        }}
      >
        <a href="/">
          <img src={mainlogo} alt="Logo" style={{ paddingLeft: '4rem', height: '5rem' }} />
        </a>
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '40%',
            listStyle: 'none',
          }}
        >
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.2rem' }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dosha" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.2rem' }}>
              Prakriti
            </Link>
          </li>
          <li>
            <Link to="/diet" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.2rem' }}>
              Diet
            </Link>
          </li>
          <li>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.2rem' }}>
              Profile
            </Link>
          </li>
          <li>
            <button
              style={{
                fontSize: '1.2rem',
                width: '8rem',
                height: '3rem',
                color: 'white',
                borderRadius: '2rem',
                backgroundColor: 'gray',
                border:"none"
              }}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
