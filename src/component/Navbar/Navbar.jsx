import React, { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="nav">
      <h2 className="logo">
        <NavLink className="nav-link active" to="/">
          <i className="fa-brands fa-opencart"></i>e
          <span className="market">
            <b>Market</b>
          </span>
          .
        </NavLink>
      </h2>
      <div className="right-nav">
        <ul>
          <li onClick={() => setMenu("home")}>
            {" "}
            <NavLink className="nav-link active " to="/">
              Home
            </NavLink>
            {menu === "home" ? <hr /> : ""}
          </li>
          <li onClick={() => setMenu("product")}>
            {" "}
            <NavLink className="nav-link active" to="/products">
              Product
            </NavLink>
            {menu === "product" ? <hr /> : ""}
          </li>
          <li onClick={() => setMenu("about")}>
            <NavLink className="nav-link active" to="/about">
              About
            </NavLink>
            {menu === "about" ? <hr /> : ""}
          </li>
          <li onClick={() => setMenu("contact")}>
            {" "}
            <NavLink className="nav-link active" to="/contact">
              Contact
            </NavLink>
            {menu === "contact" ? <hr /> : ""}
          </li>
        </ul>

        <button className="login ">
          <NavLink className="nav-link active" to="/login">
            <i className="fa-solid fa-right-to-bracket"></i> Login
          </NavLink>
        </button>
        {/* <button className="signup">
          <NavLink className="nav-link active" to="/register">
            <i className="fa-solid fa-user-plus"></i> Sign Up
          </NavLink>
        </button> */}
        <button className="cart">
          <NavLink className="nav-link active" to="/cart">
            <i className="fa-brands fa-opencart"></i> Cart ({state.length})
          </NavLink>{" "}
        </button>
      </div>
      <button className="menu" onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Responsive screen */}

      {showModal && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button className="" onClick={() => setShowModal(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </li>
            <li>
              <NavLink
                className="nav-link active "
                to="/"
                onClick={() => setShowModal(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link active "
                to="/products"
                onClick={() => setShowModal(false)}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link active "
                to="/about"
                onClick={() => setShowModal(false)}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                className="nav-link active "
                to="/contact"
                onClick={() => setShowModal(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <button
                className="login click "
                onClick={() => setShowModal(false)}
              >
                <NavLink className="nav-link active" to="/login">
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </NavLink>
              </button>
            </li>
            <li>
              <button
                className="cart click"
                onClick={() => setShowModal(false)}
              >
                <NavLink className="nav-link active" to="/cart">
                  <i className="fa-brands fa-opencart"></i> Cart ({state.length}
                  )
                </NavLink>{" "}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
