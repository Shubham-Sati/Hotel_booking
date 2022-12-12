import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <span className="logo">Hotel Booking</span>
        </Link>
        {user ? ( 
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">LogIn</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
