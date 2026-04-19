import React from "react";
import Slider from "react-slick";
import styles from "./HeroSlider.module.css";
import slide1 from "../../../assets/images/slide1.jpg";
import slide2 from "../../../assets/images/slide2.jpg";
import slide3 from "../../../assets/images/slide3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider() {
  const heroSlides = [slide1, slide2, slide3];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className={styles.sliderSection}>
      <Slider {...settings}>
        {heroSlides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div
              className={styles.blurBackground}
              style={{ backgroundImage: `url(${slide})` }}
            ></div>

            <div className={styles.overlay}></div>

            <div className={styles.content}>
              <img
                src={slide}
                alt={`ChaArt Slide ${index + 1}`}
                className={styles.slideImage}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;