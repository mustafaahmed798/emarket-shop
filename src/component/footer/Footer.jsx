import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer">
          <div className="contact">
            <h2 className="logo">
              <NavLink className="nav-link active" to="/">
                <i className="fa-brands fa-opencart"></i>e
                <span className="market">
                  <b>Market</b>
                </span>
                .
              </NavLink>
            </h2>
            <br /> <br />
            <br />
            <h3>Contact</h3>
            <address>
              <p>
                <b>Address:</b> Wellington Road, Street 32. San Francisco
              </p>
              <p>
                <b>Phone:</b> Wellington Road, Street 32. San Francisco
              </p>
              <p>
                <b>Hours</b> 10:00 - 18:00. Mon - Sat
              </p>
            </address>
            <h3>Follow Us</h3>
            <br />
            <div className="socials">
              <a href="#">
                <i className="fa-brands fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
              <a href="#">
                <i className="fa-brands fa-telegram" />
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
            </div>
          </div>
          <div className="about">
            <h3>About</h3>
            <br />
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="myaccount ">
            <h3>My account</h3>
            <br />
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
          </div>
          <div className="install">
            <h3>Install App</h3>
            <br />
            <p>From App Store or Google Play</p>
            <div className="download">
              <a href="#">
                <img src="images/pay/app.jpg" alt="" />
              </a>
              <a href="#">
                <img src="images/pay/play.jpg" alt="" />
              </a>
            </div>
            <p>Secured Payment Gateways</p>
            <img src="images/pay/pay.png" className="master" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
