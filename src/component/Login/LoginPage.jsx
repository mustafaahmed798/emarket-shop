import React, { useState } from "react";
import "./login.css";
import Lottie from "lottie-react";
import login from "./anime/login.json";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [model, setModel] = useState(false);
  return (
    <div className="contain">
      <div className="parent">
        <div className="anime">
          <Lottie
            loop={true}
            style={{ height: "350px", width: "100%" }}
            animationData={login}
          />
        </div>
        <div
          className="loginp"
          id="loginModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title " id="exampleModalLabel">
                  Login
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div
                      id="emailHelp"
                      className="form-text"
                      style={{ color: "#f4f4f4" }}
                    >
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <NavLink to="/">
                    <button
                      type="submit"
                      className="btn btn-outline-primary w-100 mt-2 sub"
                    >
                      Login
                    </button>
                  </NavLink>
                  <p>
                    if you don't have an account{" "}
                    <button onClick={() => setModel(true)}>
                      <NavLink className="regist">Signup</NavLink>
                    </button>
                  </p>
                </form>
                <button className="btn btn-primary w-100 mb-3 mt-4 goo">
                  <span className="fa fa-google me-2 "></span> Sign in With
                  Google
                </button>
                <button className="btn btn-primary w-100 mb-4 goo">
                  <span className="fa fa-facebook me-2"></span> Sign in With
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {model && (
        <div className="register">
          <div className="contains">
            <>
              <button className="closee" onClick={() => setModel(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <h2>Create your account</h2>
              <form id="signup-form-inner">
                <div className="name">
                  <div>
                    <label htmlFor="first-name">First name:</label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required=""
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name">Last name:</label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required=""
                    />
                  </div>
                </div>
                <div className="pass">
                  <div>
                    <label htmlFor="email">Email or mobile number:</label>

                    <input type="email" id="email" name="email" required="" />
                  </div>
                  <div>
                    <label htmlFor="password">New password:</label>

                    <input
                      type="password"
                      id="password"
                      name="password"
                      required=""
                    />
                  </div>
                </div>
                <div className="select">
                  <div>
                    <label htmlFor="birthday">Date of birth:</label>

                    <input
                      type="month"
                      id="birthday"
                      name="birthday"
                      required=""
                    />
                  </div>
                  <div>
                    <label htmlFor="gender">Gender:</label>

                    <select id="gender" name="gender" required="">
                      <option value="" />
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                </div>
                <div className="checks">
                  <input
                    type="checkbox"
                    id="facebook-contact"
                    name="facebook-contact"
                  />
                  <label htmlFor="facebook-contact">
                    agree with terms and condition
                  </label>
                </div>
                <button type="submit">Sign Up</button>
              </form>
              <p id="signup-message" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
