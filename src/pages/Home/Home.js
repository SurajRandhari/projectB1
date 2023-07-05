
// ---------------------------------------

import React from "react";
import Banner from "../../components/caraosal/Banner";
import "./Home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CaraTesti from "../../components/caraosal/carasoul2/CaraTesti";

const aboutData = [
  {
    id: 1,
    text: "VAINAVIN THE MARKET GURUKUL avinash pandey an educational institution that provides training and education in the field of stock trading and investment. The main aim of the institute is to equip individuals with the knowledge and skills necessary to succeed in the stock market. * The courses offered at the institute cover a wide range of topics including stock market analysis, trading strategies, risk management, portfolio management, and financial planning. * The training is delivered by experienced professionals who have a deep understanding of the stock market and years of experience in trading and investment.",
  },
  {
    id: 2,
    text: "* The courses offered at the institute cover a wide range of topics including stock market analysis, trading strategies, risk management, portfolio management, and financial planning. * The training is delivered by experienced professionals who have a deep understanding of the stock market and years of experience in trading and investment. * The training programs are designed to meet the needs of both novice and experienced traders, and are delivered through a combination of theoretical and practical training methods. * The goal of the institute is to help individuals gain the confidence and skills necessary to succeed in the stock market, and to achieve financial freedom through informed investment AINAVIN THE MARKET GURUKUL avinash pandey an educational institution that provides training and education in the field of stock trading and investment. The main aim of the institute is to equip individuals with the knowledge and skills necessary to succeed in the stock market. * The courses offered at the institute cover a wide range of topics including stock market analysis, trading strategies, risk management, portfolio management, and financial planning. * The training is delivered by experienced professionals who have a deep understanding of the stock market and years of experience in trading and investment.",
  },
];

const cardsData = [
  {
    icon: "fa-solid fa-face-smile-beam",
    heading: "1000",
    subtitle: "Our clients' smiles are the best reward for our hard work.",
    link: "https://futuresfoundry.com/demo/vainavin/about-us",
  },
  {
    icon: "fa-solid fa-music",
    heading: "122",
    subtitle: "Happy Clients quos rerum natus nemo nesciunt quidem.Happy Cl.",
    link: "https://futuresfoundry.com/demo/vainavin/about-us",
  },
  {
    icon: "fa-solid fa-user-secret",
    heading: "133",
    subtitle: "Happy Clients quos rerum natus nemo nesciunt quidem.",
    link: "https://futuresfoundry.com/demo/vainavin/about-us",
  },
];

const whyLearnData = {
  mission: {
    heading: "Our Mission",
    content: "Our mission is to provide high-quality education and training on stock market investing and trading, delivered through innovative and interactive programs. We aim to make our courses accessible to anyone who is interested in learning about the stock market, regardless of their background or experience. Through our programs, we strive to equip our students with the tools and strategies to make informed investment decisions and succeed in the stock market.",
    // image: "./images/mission-image.png", // Update the image path
    image: "./images/1683280509_fb08f0a35096dde55b9f.png", // Update the image path
  },
  vision: {
    heading: "Our Vision",
    content: "To empower individuals with the knowledge and skills to navigate the stock market confidently and achieve their financial goals.",
    image: "./images/1683280509_3ac9a96ccd1fb287dff8.png", // Update the image path
  },
};

const howToMakeMoneyData = [
  {
    id: 1,
    image: "images/1683369194_60fab73d157a693b43b4.png",
    title: "Educate yourself",
  },
  {
    id: 2,
    image: "images/1683369194_1ac0983dda4d1f0a4e9e.jpg",
    title: "Set goals",
  },
  {
    id: 3,
    image: "images/1683369194_20328a40e0eec8348bc7.png",
    title: "Develop a plan",
  },
];

const blogData = [
  {
    id: 1,
    imageSrc: "images/1683194752_6a7d5e2494e8eeae9ea7.jpg",
    title: "Terms & Condition",
    date: "2023-04-13 17:23:23",
    content: "qwerty qwerty dssssssssssssssssssssss",
    link: "https://futuresfoundry.com/demo/vainavin/blog-detail/1",
  },
  {
    id: 2,
    imageSrc: "images/1682503466_3cb73bacbdfb41ca2c1a.jpg",
    title: "my blog",
    date: "2023-04-13 17:23:23",
    content: "dfdghdfghdfffffffffffffffffffffffffff dfdghdfghdfffffffffff",
    link: "https://futuresfoundry.com/demo/vainavin/blog-detail/2",
  },
  {
    id: 3,
    imageSrc: "images/1682351300_15a02f0002ee59b88706.png",
    title: "tes",
    date: "2023-04-13 17:22:04",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    link: "https://futuresfoundry.com/demo/vainavin/blog-detail/3",
  },
];

const Home = () => {
  return (
    <div>
      <Banner />
      <section>
        <div className="container">
          <div className="section-title">
            <h2>ABOUT</h2>
            <p>ABOUT US</p>
          </div>
         
          <div className="about-us">
              <div className="row">
                {aboutData.map((aboutItem) => (
                  <div className="col-lg-6" key={aboutItem.id}>
                    <p className="about-us-div">{aboutItem.text}</p>
                    <div className="learn-more-container">
                      <a href="https://futuresfoundry.com/demo/vainavin/about-us">
                        <button className="learn-more-button">Learn More</button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>

        
 {/* ----------whatsApp ------- */}
    
        <div
          className="whatsapp-div"
          style={{
            position: "fixed",
            zIndex: "99999999",
            bottom: "10px",
            right: "10px",
          }}
        >
          <div></div>
          <button
            style={{
              fontSize: "24px",
              color: "rgb(255,255,255)",
              background:
                "linear-gradient(90deg, rgb(18, 198, 101) 0.85%, rgb(0, 148, 70) 100%)",
              borderRadius: "50%",
              padding: "10px",
              outline: "none",
              border: "medium none",
              cursor: "pointer",
              height: "60px",
              width: "60px",
            }}
          >
            <img
              data-cy="chat-widget-icon"
              src="https://stkiwiwebdev.z23.web.core.windows.net/assets/svg/whatsapp-icon.svg"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </button>
        </div>
  {/* Card */}
        <div className="container mb-4">
        <div className="row d-flex justify-content-center">
          {cardsData.map((card, index) => (
            <div key={index} className="col-lg-4 card-col">
              <div className="row">
                <div className="col-2">
                  <i className={`icon-style ${card.icon} fa-2xl`}></i>
                </div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-12">
                      <p className="card-para-heading">{card.heading}</p>
                    </div>
                    <div className="col-12">
                      <p className="card-subtitle">
                        <span className="card-subtitle1">{card.subtitle}</span>
                      </p>
                    </div>
                    <div className="col-12">
                      <br />
                      <p className="learn-more">
                        <a href={card.link}>Learn more</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
       </section>


   {/* <!-- why stock market ----> */}
         <section>
   {/* // Render the "why learn with us?" section */}
                  <div className="container">
                      <div className="section-title">
                        <h2>MARKET</h2>
                        <p>why learn with us?</p>
                      </div>

                      <div className="row">
                        <img
                          className="image-fluid stock-image"
                          src="images/1683280509_2691cee948000a24f984.png"
                          alt="..."
                          width="100%"
                        />
                      </div>

                      <div className="mission row">
                        <div className="col-lg-6">
                          <p className="mission-heading">{whyLearnData.mission.heading}</p>
                          <p className="about-us-div">{whyLearnData.mission.content}</p>
                        </div>
                        <div className="mission col-lg-6 text-center">
                          <img
                            className="mission-image"
                            src={whyLearnData.mission.image}
                            alt="..."
                          />
                        </div>
                      </div>

                      <div className="vision row">
                        <div className="mission col-lg-6 text-center">
                          <img
                            className="mission-image"
                            src={whyLearnData.vision.image}
                            alt="..."
                          />
                          </div>
                        <div className="col-lg-6">
                          <p className="mission-heading">{whyLearnData.vision.heading}</p>
                          <p className="about-us-div">{whyLearnData.vision.content}</p>
                        </div>
                      </div>
                    </div>
            </section>

     {/* <!-- How to make money ----> */}
             <section>
        <div className="container">
          <div className="section-title">
            <h2>H.T.M.M</h2>
            <p>HOW TO MAKE MONEY</p>
          </div>
          <div className="row">
            {howToMakeMoneyData.map((item) => (
              <div className="col-lg-4 mt-2" key={item.id}>
                <div className="card">
                  <img
                    className="image-fluid card-img"
                    src={item.image}
                    alt="..."
                    width="100%"
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaraTesti />

      <section>
        <div className="container">
          <div className="section-title">
            <h2>BLOG</h2>
            <p>RECENT BLOG</p>
          </div>
          <div className="row">
            {blogData.map((blog) => (
              <div className="col-lg-4 mt-3" key={blog.id}>
                <div className="blog-div">
                  <div className="row">
                    <img
                      className="image-fluid"
                      src={blog.imageSrc}
                      height="300px"
                      alt=""
                    />
                  </div>
                  <div className="row m-2">
                    <p className="blog-heading">{blog.title}</p>
                    <p className="blog-sub-heading">
                      {blog.date} &nbsp;
                      <i className="fa-solid fa-comments"></i>
                    </p>

                    <p className="blog-content1" style={{ fontSize: "10px" }}></p>
                    <p>{blog.content}</p>
                    <p></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
