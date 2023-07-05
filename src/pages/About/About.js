import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const About = () => {
  const aboutData = {
    title: "Title",
    name: "AVINASH PANDEY",
    paragraphs: [
      "To become a youth icon at an early age is not easy as pie. Yearsof hard work, passion, and determination go into becoming one of the youngest millionaires and digital entrepreneurs. Pushkar Raj Thakur wants to promote #GoSelfMade across the country and has started to touch the sky with his recent feat of receiving the honor of getting his name written into the Guinness Book of World Records 2022. He achieved this master stroke by holding the largest social media event of 2022, named Social Media Growth Conclave 2022. Featured in publications such as Times of India and Hindustan Times, PRT trains in Digital Marketing, Entrepreneurship, Online Business Development, and other such core disciplines to help you grow as an individual as well as an organization.",
      "To become a youth icon at an early age is not easy as pie. Years of hard work, passion, and determination go into becoming one of the youngest millionaires and digital entrepreneurs. Pushkar Raj Thakur wants to promote #GoSelfMade across the country and has started to touch the sky with his recent feat of receiving the honor of getting his name written into the Guinness Book of World Records 2022. He achieved this master stroke by holding the largest social media event of 2022, named Social Media Growth Conclave 2022. Featured in publications such as Times of India and Hindustan Times, PRT trains in Digital Marketing, Entrepreneurship, Online Business Development, and other such core disciplines to help you grow as an individual as well as an organization.",
      // Add more paragraphs if needed
    ],
    missionTitle: "Our Mission",
    missionContent: " Vainavin the Market Gurukul is to Educate, Empower, and Transform Individuals into Investors through Comprehensive and Practical Stock Market classNamees. We Strive to Provide High-Quality Education, Cutting-Edge Tools, and Personalized Guidance to Help Our Students Gain Confidence, Build Wealth, and Achieve Financial Independence in the Dynamic World of Stock Market Investing.",
    visionTitle: "Our Vision",
    visionContent: "The Market Gurukul is to become the premier destination for stock market education, providing comprehensive and practical learning experiences to empower individuals with the knowledge, skills, and confidence needed to succeed in the dynamic world of stock market investing. Our aim is to inspire and educate investors, equipping them with the understanding of stock market fundamentals, technical analysis, risk management, and trading strategies to make informed investment decisions and achieve financial prosperity.",
    bannerImage: "images/about/images/bannerabt.jpg",
    aboutImage: "images/about/images/abt1.jpg",
    missionImage: "images/about/images/abt2.png",
    visionImage: "images/about/images/abt3.png",
    testimonials: [
      "images/about/images/abttt001.png",
      "images/about/images/abttt002.png",
      "images/about/images/abttt003.jpg",
      "images/about/images/abttt004.jpg",
    ],
  };

  return (
    <div>
      <div className="container example">
        <img
          className="image-fluid"
          alt=""
          src={aboutData.bannerImage}
          height="300px"
          width="100%"
        />
        <h1 className="overlay-text">{aboutData.title}</h1>
      </div>

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
                src={aboutData.aboutImage}
                width="100%"
                alt=""
              />
            </div>

            <div className="col-lg-6 services-content">
              <p className="services-heading">{aboutData.name}</p>
              <p className="services-content"></p>
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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
              <p className="services-heading">{aboutData.missionTitle}</p>
              <p className="services-content">{aboutData.missionContent}</p>
            </div>
            <div className="col-lg-6">
              <img
                src={aboutData.missionImage}
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
                src={aboutData.visionImage}
                className="image-fluid mission-image"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-lg-6 services-content">
              <p className="services-heading">{aboutData.visionTitle}</p>
              <p className="services-content">{aboutData.visionContent}</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="testimonials-div">
          <div className="container">
            <div className="about-us">
              <br />
              <p className="sub-heading">
                TEAM<span style={{ color: "#233B49" }}>---------------</span>
              </p>
              <h3>CHECK OUR TEAM</h3>
            </div>

            <OwlCarousel
              className="owl-theme"
              items={4}
              loop={true}
              autoplay={true}
              margin={10} // Add margin to adjust spacing between testimonial images
            >
              {aboutData.testimonials.map((testimonial, index) => (
                <div key={index}>
                  <img
                    src={testimonial}
                    height="280px"
                    width="244px"
                    alt=""
                  />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
