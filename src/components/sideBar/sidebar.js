import React from 'react';
import './sidebar.css'; // We'll define the styles in here
import { NavLink } from 'react-router';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">VISION UI FREE</h2>
      <nav className="sidebar-nav">
        <NavLink exact="true" to="/" className="sidebar-link" activeclassname="active">
          Dashboard
        </NavLink>
        <NavLink to="/tables" className="sidebar-link" activeclassname="active">
          Tables
        </NavLink>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
};

export default Sidebar;
