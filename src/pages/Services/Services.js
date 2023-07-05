import React from "react";

const Services = () => {
  // Dynamic data
  const servicesData = [
    {
      image: "images/services/images/s1.jpg",
      heading: "Personal finance advice",
      content:
        "To become a youth icon at an early age is not easy as pie. Years of hard work, passion, and determination go into becoming one of the youngest millionaires and digital entrepreneurs. Pushkar Raj Thakur wants to promote #GoSelfMade across the country and has started to touch the sky with his recent feat of receiving the honor of getting his name written into the Guinness Book of World Records 2022. He achieved this master stroke by holding the largest social media event of 2022, named Social Media Growth Conclave 2022. Featured in publications such as Times of India and Hindustan Times, PRT trains in Digital Marketing, Entrepreneurship, Online Business Development, and other such core disciplines to help you grow as an individual as well as an organization.     To become a youth icon at an early age is not easy as pie. Years of hard work, passion, and determination go into becoming one of the youngest millionaires and digital entrepreneurs. Pushka",
    },
    {
      image: "images/services/images/s2.jpg",
      heading: "India Stock Market Investors",
      content:
        "Baap of Chart has a mission to eradicate poverty and financial shortfalls, especially for the people who slog long hours at their jobs and are mostly underpaid. BOC with its very lenient terms and conditions will help support every subscriber financially with an exponential return rate fuelling a comfortable lifestyle. BOC will also eradicate so-called advisors and strategists from the market and simplify wealth creation. BOC through its simple formulas will make it possible for any individual with a basic knowledge of mathematics to trade profitably and will change the mindset of the people who have been misled to believe that trading mastery is only achieved through complex charts, convoluted indicators, and other trading jargon, glorified by so-called “expert registered analysts",
    },
    // Add more service objects as needed
  ];
  const containersData = [
    {
      image: "images/services/images/ss1.png",
      heading: "doubt session",
      content: "gf",
    },
    {
      image: "images/services/images/ss2.jpg",
      heading: "algo trading",
      content:
        "It scans stocks in all supported markets every night, based on standards of Technical Analysis",
    },
    {
      image: "images/services/images/ss2.jpg",
      heading: "HOW DOES IT WORK?",
      content:
        "It scans stocks in all supported markets every night, based on standards of Technical Analysis",
    },
    // Add more container objects as needed
  ];

  const faqData = [
    {
      image: "images/services/images/Help.png",
      question: "FAQ 1",
      answer: "Answer 1",
    },
    {
      image: "images/services/images/Help.png",
      question: "FAQ 2",
      answer: "Answer 2",
    },
    // Add more FAQ objects as needed
  ];



  return (
    <div>
      {/* ... existing code ... */}
      <div className="conainer example">
        <img
          className="image-fluid"
          alt="Services"
          src="images/services/images/bannerserivce.jpg"
          height="300px"
          width="100%"
        />

        <h1 className="overlay-text">Services</h1>
      </div>

      <div className="container" style={{ marginTop: "40px" }}>
        <div className="section-title" style={{ marginBottom: "10px" }}>
          <h2>SERVICES</h2>
          <p>CHECK OUR SERVICES</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={servicesData[0].image}
              className="image-fluid"
              width="100%"
              alt=""
            />
          </div>
          <div className="col-lg-6 services-content">
            <p className="services-heading">{servicesData[0].heading}</p>
            <p className="services-content">{servicesData[0].content}</p>
          </div>
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-lg-6 services-content">
            <p className="services-heading">{servicesData[1].heading}</p>
            <p className="services-content">{servicesData[1].content}</p>
          </div>
          <div className="col-lg-6">
            <img
              src={servicesData[1].image}
              className="image-fluid"
              width="100%"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* ... remaining code ... */}
          {/* <!-- card ----> */}

      <div className="container">
        <div
          className="row d-flex justify-content-center"
          style={{ marginTop: "90px" }}
        >
          {containersData.map((container, index) => (
            <div className="col-lg-4 services-card" key={index}>
              <img src={container.image} height="57px" alt="" />

              <p className="services-card-heading">{container.heading}</p>
              <p className="services-card-content">{container.content}</p>
            </div>
          ))}
        </div>
      </div>
 {/* <!-- Faq ----> */}
 <div className="container">
      <div className="services-div">
        <p className="sub-heading">
          FAQ <span style={{ color: "#233B49" }}>---------------</span>
        </p>
        <h3>FREQUENTLY ASKED QUESTIONS</h3>
      </div>

      {faqData.map((faq, index) => (
        <div className="row" key={index}>
          <div className="col-lg-5">
            <p className="services-faq">
              <img src={faq.image} alt="" />
              {faq.question}
            </p>
          </div>
          <div className="col-lg-7">
            <p className="services-faq-content">{faq.answer}</p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;
