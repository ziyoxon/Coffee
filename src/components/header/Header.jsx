import React from "react";
import logo from "../../assets/Logo.svg";
import searchIcon from "../../assets/search.svg";
import cartIcon from "../../assets/Vector.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar_menu">
            <li className="nav_item">
              <a href="#" className="nav_link active">
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                Menu
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                Reservation
              </a>
            </li>
          </ul>

          <div className="navbar_logo">
            <img src={logo} alt="Coffee Shop Logo" />
          </div>

          <ul className="navbar_menu">
            <li className="nav_item">
              <a href="#" className="nav_link">
                Pages
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                Shop
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                Contact
              </a>
            </li>
            <li className="nav_item">
              <img src={searchIcon} alt="Search Icon" className="icon" />
            </li>
            <li className="nav_item">
              <img src={cartIcon} alt="Cart Icon" className="icon" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
