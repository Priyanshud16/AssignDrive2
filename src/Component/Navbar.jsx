// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Define styles separately

const Navbar = () => {
  return (
    <nav className="navbar" style={{display:"flex",justifyContent:"space-around"}}>
     <Link to="/signup"  style={{color:"white",textDecoration:"none"}}>Signup</Link>
     <Link to="/InfiniteScrolling" style={{color:"white",textDecoration:"none"}} >Infinite Scrolling</Link>
    </nav>
  );
};

export default Navbar;
