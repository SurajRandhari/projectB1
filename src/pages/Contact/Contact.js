import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="conainer example">
        <img
          className="image-fluid"
          src="images/contact/contact.png"
          alt="Contact Us"
          height="300px"
          width="100%"
        />
        <h1 className="overlay-text">Contact Us</h1>
      </div>

      <div className="container">
        <div className="container">
          <div className="services-div">
            <p className="sub-heading">
              CONTACT <span style={{ color: "#233B49" }}>---------------</span>
            </p>
            <h3>CONTACT US</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p className="blog-content">
              Get to the top of your game in boosting your business by just
              having a consultation with us. You are open to an array of
              services that include business coaching, boosting motivation,
              learning finance, how to become a successful entrepreneur, etc.{" "}
            </p>
          </div>

          <div className="col-lg-6" style={{ paddingLeft: "80px" }}>
            <p className="send-us-a-message">Send Us A Message</p>
            <p className="blog-content">
              We are there to answer all your queries
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div
              className="row contact-card"
              style={{ marginLeft: "5px", marginRight: "5px" }}
            >
              <i
                className="fa-solid fa-location-dot fa-2xl contact-us-icon"
                style={{ marginTop: "20px" }}
              ></i>
              <p className="icon-heading">Our Address</p>
              <p className="icon-content">
                {" "}
                B-648 (O) STREET NO.37 SMRITI NAGAR <br /> NEAR WE CARE SPORTS
                INJURY CLINIC DURG Chhattisgarh 490020{" "}
              </p>
            </div>

            <div
              className="row"
              style={{ marginLeft: "5px", marginRight: "5px" }}
            >
              <div className="col-lg-6 contact-card">
                <i
                  className="fa-solid fa-envelope fa-2xl"
                  style={{ marginTop: "20px" }}
                ></i>
                <p className="icon-heading">Email Us</p>
                <p className="icon-content">
                  info@vainavinthemarketgurukul.com
                  <br />
                  info@vainavinthemarketgurukul.com
                </p>
              </div>
              <div className="col-lg-6 contact-card">
                <i
                  className="fa-solid fa-phone-volume fa-2xl"
                  style={{ marginTop: "20px" }}
                ></i>
                <p className="icon-heading">Call Us</p>
                <p className="icon-content">
                  91+9752061009
                  <br />
                  91+9752061009
                </p>
              </div>
            </div>
          </div>

          <div
            class="thank-you col-lg-6"
            id="thank-you-div"
            style={{ display: "none" }}
          >
            <i class="fa-regular fa-face-smile fa-2xl"></i>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "black",
                marginTop: "20px",
              }}
            >
              Thank you for getting in touch!{" "}
            </p>
            <p>
              We appreciate you contacting us Vainavin. One of our colleagues
              will get back in touch with you soon!Have a great day!{" "}
            </p>
          </div>

          <div
            className="col-lg-6"
            style={{ boxSizing: "border-box" }}
            id="query-form"
          >
            <form
              id="contest-us"
              name="contest-us"
              action="https://futuresfoundry.com/demo/vainavin/Contactus/query"
              method="post"
            >
              <div className="row contact-card-details">
                <div className="row">
                  <div className="col-6 is-valid">
                    <br />
                    <input
                      type="text"
                      id="frame"
                      required
                      className="input-text-box-1"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-6 is-valid">
                    <br />
                    <input
                      type="text"
                      id="email"
                      required
                      className="input-text-box-1"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-6 is-valid">
                    <br />
                    <input
                      type="text"
                      id="subject"
                      required
                      className="input-text-box-1"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <textarea
                        name="message"
                        className="form-control input-text-box-2"
                        placeholder="Message"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  <div className="btn">
                    <button type="submit" className="send-message">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
