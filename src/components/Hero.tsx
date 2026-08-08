"use client";
import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-area section">
      <div className="container-fluid">
        <div className="row">
          <h4 className="home-intro__overheading underlined-heading underlined-heading--animate">
            <span className="underlined-heading__wrapper">
              <span className="underlined-heading__content">
                we are
              </span>
            </span>
          </h4>
        </div>
        <div className="row">
          <div className="slider-main">
            <div className="hero-slider owl-carousel owl-theme">
              <div className="hero-single titlt" data-tilt data-tilt-max={20}>
                <img alt="Pixel and Code Web Development" src="/creative_soft/mystudio/assets/img/banner/1.png" />
              </div>
              <div className="hero-single titlt" data-tilt data-tilt-max={20}>
                <img alt="Pixel and Code UI/UX Design" src="/creative_soft/mystudio/assets/img/banner/2.png" />
              </div>
              <div className="hero-single titlt" data-tilt data-tilt-max={20}>
                <img alt="Pixel and Code Digital Marketing" src="/creative_soft/mystudio/assets/img/banner/3.png" />
              </div>
            </div>
            
            {/* Pixel & Code Custom Content */}
            <span className="hero__text_more">Digital Solutions Agency</span>
            <p className="hero__subtitle">
              A dedicated team of UI/UX Designers, Frontend & Backend Engineers ready to take your business to new heights with modern technology.
            </p>
            
            <div className="down-butn">
              <a className="down" href="#!"><i className="fas fa-caret-down" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}