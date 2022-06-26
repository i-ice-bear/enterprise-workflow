import React from "react";
import "./Footer.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
export default function Footer() {
  return (
    <>
      <section className="containter-fluid" id="footer-container">
        <div className="container-fluid">
          <div className="row" id="main-footer">
            <div className="col-md-3">
              <div className="typo my-5 mx-5">
                <div className="copy-right my-3 disabled">
                  <p
                    className="text-disabled my-4"
                    style={{ fontSize: "25px" }}
                  >
                    Innovation begins with us
                  </p>
                  <form action="">
                    <input
                      type="text"
                      placeholder="Contact us"
                      id="text-thumb-form"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="typo-link my-5 mx-5">
                <ul className="navbar-nav text-dark">
                  <li
                    className="nav-item disabled"
                    style={{ listStyleType: "none" }}
                  >
                    <h4 className="text-dark disabled">Wanna visit there</h4>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      Our clients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      Contacts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      Our projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="typo-link my-5 mx-5">
                <ul className="navbar-nav text-dark">
                  <li
                    className="nav-item disabled"
                    style={{ listStyleType: "none" }}
                  >
                    <h4 className="text-dark disabled">Our Work with</h4>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      Oorja on move
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      Our clients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      Copyright
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      Our projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
            <div className="typo-link my-5 mx-5">
                <ul className="navbar-nav text-dark">
                  <li
                    className="nav-item disabled"
                    style={{ listStyleType: "none" }}
                  >
                    <h4 className="text-dark disabled">For Developers</h4>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      View it on github
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      Report a bug
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                      Demand for a new feature
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <section id="copyright-container">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-badge-cc"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.708 7.755c0-1.111.488-1.753 1.319-1.753.681 0 1.138.47 1.186 1.107H7.36V7c-.052-1.186-1.024-2-2.342-2C3.414 5 2.5 6.05 2.5 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114H6.213c-.048.615-.496 1.05-1.186 1.05-.84 0-1.319-.62-1.319-1.727v-.743zm6.14 0c0-1.111.488-1.753 1.318-1.753.682 0 1.139.47 1.187 1.107H13.5V7c-.053-1.186-1.024-2-2.342-2C9.554 5 8.64 6.05 8.64 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.743z" />
                          <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                        </svg>
                      </span>{" "}
                      Bl enterprises 2021 - All rights reserved
                    </p>
                  </div>
                  <div className="col">
                    <p
                      className=""
                      style={{
                        display: "flex",
                        float: "right",
                        justifyContent: "flex-end",
                      }}
                    >
                      BL Enterprises
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
