import React from "react";
// import { nextSlide, prevSlide } from "../../Feature/Slices/sliderSlices";
import "./slide.css";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <>
      <Carousel className="slide">
        <Carousel.Item interval={1500} className="s2">
          <div className="p1"></div>
          <div className="slide-text">
            <h1 className="slide2">
              <i className="fa-brands fa-opencart"></i>e
              <span className="market">
                <b>Market</b>
              </span>
              .
            </h1>
            <p className="slogan">Ensuring the best welfare of the buyers</p>
          </div>
        </Carousel.Item>
        <Carousel.Item className="s3">
          <div className="p2"></div>
          <div className="slide-text">
            <h1 className="slide3">
              <i className="fa-brands fa-opencart"></i>e
              <span className="market">
                <b>Market</b>
              </span>
              .
            </h1>
            <p className="slogan">Your trusted e-commerce platform</p>
          </div>
        </Carousel.Item>
      </Carousel>
      <section id="features" class="section-p1">
        <div class="f-box">
          <div className="photo1"></div>
          <h6>Free shipping</h6>
        </div>
        <div className="f-box">
          <div className="photo2"></div>
          <h6>online order</h6>
        </div>
        <div class="f-box">
          <div className="photo3"></div>
          <h6>save money</h6>
        </div>
        <div class="f-box">
          <div className="photo4"></div>
          <h6>promotions</h6>
        </div>
        <div class="f-box">
          <div className="photo5"></div>
          <h6>happy sell</h6>
        </div>
        <div class="f-box">
          <div className="photo6"></div>
          <h6>24/7 support</h6>
        </div>
      </section>
    </>
  );
};

export default Slider;
