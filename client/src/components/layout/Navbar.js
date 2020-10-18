import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar bg-primary">
        <h1>
            <i className={icon}></i> {title}
        </h1>
        <ul>
          <li>
            <Link to="/">Add Address</Link>
          </li>
  
          <li>
            <Link to="/addresses">Your Addresses</Link>
          </li>
        </ul>
      </nav>
    )
}

Navbar.defaultProps = {
    title: "marmalade Address Book",
    icon: "fas fa-address-card",
  };

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Navbar
