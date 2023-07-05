import React from "react";

const About = () => {
  return (
    <div>
      <div className="conainer example">
        <img
          className="image-fluid"
          alt=""
          src="images/about/images/bannerabt.jpg"
          height="300px"
          width="100%"
        />
        <h1 className="overlay-text">About us</h1>
      </div>

      {/* <!-- Vision Mission Selfmission ----> */}
      <div className="container">
        <div className="container">
          <div className="section-title" style={{ marginTop: "40px" }}>
            <h2>ABOUT</h2>
            <p>ABOUT US</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="parent col-lg-6 d-flex justify-content-center align-items-center">
              <img
                className="image image-fluid"
                src="images/about/images/abt1.jpg"
                width="100%"
                alt=""
              />
            </div>

            <div className="col-lg-6 services-content">
              <p className="services-heading">AVINASH PANDEY </p>
              <p className="services-content"></p>
              <p>
                To become a youth icon at an early age is not easy as pie. Years
                of hard work, passion, and determination go into becoming one of
                the youngest millionaires and digital entrepreneurs. Pushkar Raj
                Thakur wants to promote #GoSelfMade across the country and has
                started to touch the sky with his recent feat of receiving the
                honor of getting his name written into the Guinness Book of
                World Records 2022. He achieved this master stroke by holding
                the largest social media event of 2022, named Social Media
                Growth Conclave 2022. Featured in publications such as Times of
                India and Hindustan Times, PRT trains in Digital Marketing,
                Entrepreneurship, Online Business Development, and other such
                core disciplines to help you grow as an individual as well as an
                organization.
              </p>
              <p>
                To become a youth icon at an early age is not easy as pie. Years
                of hard work, passion, and determination go into becoming one of
                the youngest millionaires and digital entrepreneurs. Pushkar Raj
                Thakur wants to promote #GoSelfMade across the country and has
                started to touch the sky with his recent feat of receiving the
                honor of getting his name written into the Guinness Book of
                World Records 2022. He achieved this master stroke by holding
                the largest social media event of 2022, named Social Media
                Growth Conclave 2022. Featured in publications such as Times of
                India and Hindustan Times, PRT trains in Digital Marketing,
                Entrepreneurship, Online Business Development, and other such
                core disciplines to help you grow as an individual as well as an
                organization.
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 services-content ">
              <p className="services-heading"> Our Mission</p>
              <p className="services-content">
                {" "}
                Vainavin the Market Gurukul is to Educate, Empower, and
                Transform Individuals into Investors through Comprehensive and
                Practical Stock Market classNamees. We Strive to Provide
                High-Quality Education, Cutting-Edge Tools, and Personalized
                Guidance to Help Our Students Gain Confidence, Build Wealth, and
                Achieve Financial Independence in the Dynamic World of Stock
                Market Investing."{" "}
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="images/about/images/abt2.png"
                alt=""
                style={{ float: "right" }}
                className="image-fluid mission-image"
                width="100%"
                height="300px"
              />
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img
                src="images/about/images/abt3.png"
                className="image-fluid mission-image"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-lg-6 services-content">
              <p className="services-heading">Our Vision</p>

              <p className="services-content">
                {" "}
                The Market Gurukul is to become the premier destination for
                stock market education, providing comprehensive and practical
                learning experiences to empower individuals with the knowledge,
                skills, and confidence needed to succeed in the dynamic world of
                stock market investing. Our aim is to inspire and educate
                investors, equipping them with the understanding of stock market
                fundamentals, technical analysis, risk management, and trading
                strategies to make informed investment decisions and achieve
                financial prosperity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Team ----> */}
      <div class="testimonials-div">
        <div class="container">
          <div class="about-us">
            <br />
            <p class="sub-heading">
              TEAM<span style={{ color: "#233B49" }}>---------------</span>
            </p>
            <h3>CHECK OUR TEAM</h3>
          </div>

          <div class="owl-carousel">
            <img
              src="images/about/images/abttt001.png"
              height="280px"
              width="244px"
              alt=""
            />

            <img
              src="images/about/images/abttt002.png"
              height="280px"
              width="244px"
              alt=""
            />

            <img
              src="images/about/images/abttt003.jpg"
              height="280px"
              width="244px"
              alt=""
            />

            <img
              src="images/about/images/abttt004.jpg"
              height="280px"
              width="244px"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
