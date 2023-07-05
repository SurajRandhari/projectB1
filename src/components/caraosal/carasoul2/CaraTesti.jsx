import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CaraTesti = () => {
  const options = {
    items: 3, // Display 3 items at a time
    nav: true, // Show navigation buttons
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      "<i class='owl-nav-icon owl-prev fas fa-chevron-left'></i>",
      "<i class='owl-nav-icon owl-next fas fa-chevron-right'></i>",
    ],
  };

  const data = [
    {
      image: "images/1681901424_bd91b8fc8f2eae3392e5.png",
      name: "Megha Khandelwal",
      designation: "asjasjasj",
      content: "ytfcgb",
    },
    {
      image: "images/1681969868_cfa8672db6a856c4fb4c.png",
      name: "demo",
      designation: "qqqqqqqq",
      content: "tfgbnhbv",
    },
    {
      image: "images/1681991267_7f2c3048ed1e94f829e3.png",
      name: "demo",
      designation: "qqqqqqqq",
      content: "yu iuyjhmn",
    },
    // Add more data items as needed
  ];

  return (
    <section className="testimonials-div">
      <div className="container">
        <div className="section-title">
          <h2>TESTIMONIALS</h2>
          <p>TESTIMONIALS</p>
        </div>

        <OwlCarousel {...options}>
          {data.map((item, index) => (
            <div
              className="slide"
              key={index}
              style={{
                width: "365.333px",
                height: "250px",
                marginRight: "5px",
                backgroundColor: "white",
              }}
            >
              <div className="row">
                <div className="col-3">
                  <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="col-9">
                  <p className="testimonials-heading">{item.name}</p>
                  <p className="testimonials-sub-heading">{item.designation}</p>
                </div>
              </div>
              <div className="row mt-4 text-center">
                <p className="testimonial-content">{item.content}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default CaraTesti;
