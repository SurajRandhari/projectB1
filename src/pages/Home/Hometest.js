import React from "react";
import Banner from "../../components/caraosal/Banner";

import "./Home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CaraTesti from "../../components/caraosal/carasoul2/CaraTesti";

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
              <div className="col-lg-6">
                <p className="about-us-div">
                  VAINAVIN THE MARKET GURUKUL avinash pandey an educational
                  institution that provides training and education in the field
                  of stock trading and investment. The main aim of the institute
                  is to equip individuals with the knowledge and skills
                  necessary to succeed in the stock market. * The courses
                  offered at the institute cover a wide range of topics
                  including stock market analysis, trading strategies, risk
                  management, portfolio management, and financial planning. *
                  The training is delivered by experienced professionals who
                  have a deep understanding of the stock market and years of
                  experience in trading and investment.
                </p>
              </div>
              <div className="col-lg-6">
                <p className="about-us-div">
                  * The courses offered at the institute cover a wide range of
                  topics including stock market analysis, trading strategies,
                  risk management, portfolio management, and financial planning.
                  * The training is delivered by experienced professionals who
                  have a deep understanding of the stock market and years of
                  experience in trading and investment. * The training programs
                  are designed to meet the needs of both novice and experienced
                  traders, and are delivered through a combination of
                  theoretical and practical training methods. * The goal of the
                  institute is to help individuals gain the confidence and
                  skills necessary to succeed in the stock market, and to
                  achieve financial freedom through informed investment AINAVIN
                  THE MARKET GURUKUL avinash pandey an educational institution
                  that provides training and education in the field of stock
                  trading and investment. The main aim of the institute is to
                  equip individuals with the knowledge and skills necessary to
                  succeed in the stock market. * The courses offered at the
                  institute cover a wide range of topics including stock market
                  analysis, trading strategies, risk management, portfolio
                  management, and financial planning. * The training is
                  delivered by experienced professionals who have a deep
                  understanding of the stock market and years of experience in
                  trading and investment.
                </p>
                <br />
                <a href="https://futuresfoundry.com/demo/vainavin/about-us">
                  <button className="learn-more-button">Learn More</button>
                </a>
              </div>
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

        {/* <!-- Card ----> */}
        <div className="container mb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 card-col">
              <div className="row">
                <div className="col-2">
                  <i className="icon-style fa-solid fa-face-smile-beam fa-2xl"></i>
                </div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-12">
                      <p className="card-para-heading">1000</p>
                    </div>
                    <div className="col-12">
                      <p className="card-subtitle">
                        <span className="card-subtitle1">
                          Our clients' smiles are the best reward for our hard
                          w.
                        </span>
                      </p>
                    </div>
                    <div className="col-12">
                      <br />
                      <p className="learn-more">
                        <a
                          href="https://futuresfoundry.com/demo/vainavin/about-us"
                          // style="text-decoration: none; color: #233b49"
                        >
                          Learn more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 card-col">
              <div className="row">
                <div className="icon-style col-2 d-flex justify-content-start">
                  <i className="fa-solid fa-music fa-2xl"></i>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <div className="row">
                    <div className="col-12">
                      <p className="card-para-heading">122</p>
                    </div>
                    <div className="col-12">
                      <p className="card-subtitle">
                        <span className="card-subtitle1">
                          Happy Clients quos rerum natus nemo nesciunt
                          quidem.Happy Cl.
                        </span>
                      </p>
                    </div>
                    <div className="col-12">
                      <br />
                      <p className="learn-more">
                        <a
                          href="https://futuresfoundry.com/demo/vainavin/about-us"
                          // style="text-decoration: none; color: #233b49"
                        >
                          Learn more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 card-col">
              <div className="row">
                <div className="col-2 d-flex justify-content-start">
                  <i className="icon-style fa-solid fa-user-secret fa-2xl"></i>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <div className="row">
                    <div className="col-12">
                      <p className="card-para-heading">133</p>
                    </div>
                    <div className="col-12">
                      <p className="card-subtitle">
                        <span className="card-subtitle1">
                          Happy Clients quos rerum natus nemo nesciunt quidem.
                        </span>
                      </p>
                    </div>
                    <div className="col-12">
                      <br />
                      <p className="learn-more">
                        <a
                          href="https://futuresfoundry.com/demo/vainavin/about-us"
                          // style="text-decoration: none; color: #233b49"
                        >
                          Learn more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- why stock market ----> */}
      <section>
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
              <p className="mission-heading">Our Mission</p>

              <p className="about-us-div">
                Our mission is to provide high-quality education and training on
                stock market investing and trading, delivered through innovative
                and interactive programs. We aim to make our courses accessible
                to anyone who is interested in learning about the stock market,
                regardless of their background or experience. Through our
                programs, we strive to equip our students with the tools and
                strategies to make informed investment decisions and succeed in
                the stock market.
              </p>
            </div>
            <div className="mission col-lg-6 text-center">
              <img
                className="mission-image"
                src="images/1683280509_fb08f0a35096dde55b9f.png"
                alt="..."
              />
            </div>
          </div>

          <div className="vision row">
            <div className="mission col-lg-6 text-center">
              <img
                className="mission-image"
                src="images/1683280509_3ac9a96ccd1fb287dff8.png"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <p className="mission-heading">Our Vision</p>

              <p className="about-us-div">
                To empower individuals with the knowledge and skills to navigate
                the stock market confidently and achieve their financial goals.
              </p>
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
            <div className="col-lg-4 mt-2">
              <div className="card">
                <img
                  className="image-fluid card-img"
                  src="images/1683369194_60fab73d157a693b43b4.png"
                  alt="..."
                  width="100%"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Educate yourself</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-2">
              <div className="card">
                <img
                  className="image-fluid card-img"
                  src="images/1683369194_1ac0983dda4d1f0a4e9e.jpg"
                  alt="..."
                  width="100%"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Set goals</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-2">
              <div className="card">
                <img
                  className="image-fluid card-img"
                  src="images/1683369194_20328a40e0eec8348bc7.png"
                  alt="..."
                  width="100%"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Develop a plan</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* <!-- Testimonial 2 ----> */}
      <section className="testimonials-div">
        <div className="container">
          <div className="section-title">
            <h2>TESTIMONIALs</h2>
            <p>TESTIMONIALS</p>
          </div>

          <div className="owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "3d(0px,0px,0px,)",
                  transition: "all 0s ease 0s",
                  width: "1502px",
                }}
              >
                <div
                  className="owl-item active"
                  style={{ width: "365.333px", marginRight: "10px" }}
                >
                  <div
                    className="slide"
                    style={{
                      backgroundColor: "white",
                      height: "250px",
                      width: "100%",
                    }}
                  >
                    <div className="row">
                      <div className="col-3">
                        <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                          <img
                            src="images/1681901424_bd91b8fc8f2eae3392e5.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-9">
                        <p className="testimonials-heading">Megha Khandelwal</p>
                        <p className="testimonials-sub-heading">asjasjasj</p>
                      </div>
                    </div>
                    <div className="row mt-4 text-center">
                      <p className="testimonial-content">ytfcgb</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "365.333px", marginRight: "10px" }}
                >
                  <div
                    className="slide"
                    style={{
                      backgroundColor: "white",
                      height: "250px",
                      width: "100%",
                    }}
                  >
                    <div className="row">
                      <div className="col-3">
                        <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                          <img
                            src="images/1681969868_cfa8672db6a856c4fb4c.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-9">
                        <p className="testimonials-heading">demo</p>
                        <p className="testimonials-sub-heading">qqqqqqqq</p>
                      </div>
                    </div>
                    <div className="row mt-4 text-center">
                      <p className="testimonial-content">tfgbnhbv</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "365.333px", marginRight: "10px" }}
                >
                  <div
                    className="slide"
                    style={{
                      backgroundColor: "white",
                      height: "250px",
                      width: "100%",
                    }}
                  >
                    <div className="row">
                      <div className="col-3">
                        <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                          <img
                            src="images/1681991267_7f2c3048ed1e94f829e3.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-9">
                        <p className="testimonials-heading">demo</p>
                        <p className="testimonials-sub-heading">qqqqqqqq</p>
                      </div>
                    </div>
                    <div className="row mt-4 text-center">
                      <p className="testimonial-content">yu iuyjhmn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="owl-nav">
              <button className="owl-prev" type="button" role="presentation">
                <span aria-label="Previous"></span>
              </button>
              <button className="owl-next" type="button" role="presentation">
                <span aria-label="Next"></span>
              </button>
            </div>
            <div className="owl-dots">
              <button className="owl-dot active" role="button">
                <span></span>
              </button>
              <button className="owl-dot" role="button">
                <span></span>
              </button>
            </div>
          </div>        
        </div>
      </section>

      {/* <Owldemo1 /> */}
      <CaraTesti />

      {/* /* <!-- Blog ----> */}

      <section>
        <div className="container">
          <div className="section-title">
            <h2>BLOG</h2>
            <p>RECENT BLOG</p>
          </div>
          <div className="row">
            <div className="col-lg-4 mt-3">
              <div className="blog-div">
                <div className="row">
                  <img
                    className="image-fluid"
                    src="images/1683194752_6a7d5e2494e8eeae9ea7.jpg"
                    height="300px"
                    alt=""
                  />
                </div>
                <div className="row m-2">
                  <p className="blog-heading">Terms & Condition</p>
                  <p className="blog-sub-heading">
                    2023-04-13 17:23:23   
                    <i className="fa-solid fa-comments"></i>
                  </p>

                  <p className="blog-content1" style={{ fontSize: "10px" }}></p>
                  <p>qwerty qwerty dssssssssssssssssssssss</p>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <div className="blog-div">
                <div className="row">
                  <img
                    className="image-fluid"
                    src="images/1682503466_3cb73bacbdfb41ca2c1a.jpg"
                    height="300px"
                    alt=""
                  />
                </div>
                <div className="row m-2">
                  <p className="blog-heading">my blog</p>
                  <p className="blog-sub-heading">
                    2023-04-13 17:23:23   
                    <i className="fa-solid fa-comments"></i>
                  </p>

                  <p className="blog-content1" style={{ fontSize: "10px" }}></p>
                  <p>
                    dfdghdfghdfffffffffffffffffffffffffff
                    dfdghdfghdfffffffffffffffffffffffffff dfdghdfghdfffffffffff
                    <br />
                    <a
                      href="https://futuresfoundry.com/demo/vainavin/blog-detail/7"
                      className="read-more"
                    >
                      Read more..
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <div className="blog-div">
                <div className="row">
                  <img
                    className="image-fluid"
                    src="images/1682351300_15a02f0002ee59b88706.png"
                    height="300px"
                    alt=""
                  />
                </div>
                <div className="row m-2">
                  <p className="blog-heading">tes</p>
                  <p className="blog-sub-heading">
                    2023-04-13 17:22:04   
                    <i className="fa-solid fa-comments"></i>
                  </p>

                  <p className="blog-content1" style={{ fontSize: "10px" }}></p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptas sequi aperiam optio, quisquam <br />
                    <a
                      href="https://futuresfoundry.com/demo/vainavin/blog-detail/6"
                      className="read-more"
                    >
                      Read more..
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
