import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { Link,Outlet } from "react-router-dom";
import "./navbar.scss";
import {
  FaBars,
  FaTimes,
  FaCanadianMapleLeaf,
  FaShoppingCart,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar({ handleModal }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleMenu = () => {
    setClick(false);
    handleModal();
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#111" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaCanadianMapleLeaf className="navbar-icon" />
              COMMERCE
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                  <FaShoppingCart className="navbar-icon" />
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/" className="btn-link">
                    <Button buttonStyle="btn--outline" onClick={handleModal}>
                      LOG IN
                    </Button>
                  </Link>
                ) : (
                  <Link to="/" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--wide"
                      onClick={handleMenu}
                    >
                      LOG IN
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <Outlet />
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
