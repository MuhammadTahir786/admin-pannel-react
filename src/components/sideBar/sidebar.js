import React from 'react';
import './sidebar.css'; // We'll define the styles in here
import { NavLink } from 'react-router';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">VISION UI FREE</h2>
      <nav className="sidebar-nav">
        <NavLink exact="true" to="/dashboard" className="sidebar-link" activeclassname="active">
          Dashboard
        </NavLink>
        <NavLink to="/tables" className="sidebar-link" activeclassname="active">
          Tables
        </NavLink>
        <NavLink to="/billing" className="sidebar-link" activeclassname="active">
          Billing
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
