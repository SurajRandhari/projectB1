import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="footer-box">
              <hr
                style={{
                  height: "7px",
                  color: "white",
                  backgroundColor: "white",
                  borderColor: "white",
                  paddingTop: "0px",
                  marginTop: "0px",
                }}
              />
              <p className="footer-content">
                Education is the passport to the future, for tomorrow belongs to
                those who prepare for it
              </p>
              <img
                className="image-fluid"
                src="images/footer/footerr.png"
                alt=""
                height="110px"
              />

              <div className="row">
                <div className="social-media">
                  <i className="social-media-icons fa-brands fa-square-facebook fa-lg"></i>
                  <i className="social-media-icons fa-brands fa-square-instagram fa-lg"></i>
                  <i className="social-media-icons fa-brands fa-square-twitter fa-lg"></i>
                  <i className="social-media-icons fa-brands fa-skype fa-lg"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <p className="footer-links">Useful Link</p>
            <ul>
              <li className="footer-ul-list">
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <i className="fa-thin fa-greater-than icon"></i> Home
                </a>
              </li>

              <li className="footer-ul-list">
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <i className="fa-thin fa-greater-than icon"></i> About as
                </a>
              </li>

              <li className="footer-ul-list">
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <i className="fa-thin fa-greater-than icon"></i> Services
                </a>
              </li>

              <li className="footer-ul-list">
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <i className="fa-thin fa-greater-than icon"></i> Terms of
                  service
                </a>
              </li>

              <li className="footer-ul-list">
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <i className="fa-thin fa-greater-than icon"></i> Privacy
                  policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <p className="footer-links">Contact Info</p>
            <ul className="contact-info">
              <li className="footer-ul-list">
                <i class="fa-solid fa-envelope fa-lg icon"></i> 
                Hinfo@contact.com
              </li>
              <li className="footer-ul-list">
                <i className="fa-solid fa-phone fa-lg icon"></i>  +91 999 852
                3254
              </li>
              <li className="footer-ul-list">
                <i class="fa-solid fa-location-dot fa-lg icon"></i>  A1, loc 2,
                sector 7, Main road ,122002,Bhilai , India
              </li>
            </ul>
          </div>
          <hr className="line" />
          <p className="footer-text">© Copyright . All Rights Reserved</p>
          <p className="footer-text">
            Designed and Developed by -
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "skyblue",
                fontWeight: "500",
              }}
            >
              Futures Foundry
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
