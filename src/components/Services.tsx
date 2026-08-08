"use client";
import React from 'react';
import Link from 'next/link';

export default function ServiceSection() {
  return (
    <section className="service-area homepage__services home-services section">
      <div className="container">
        <div className="row">
          <div className="service-head">
            <h2 className="service-title">OUR SERVICES</h2>
            <div className="home-services__splitter" />
            <div className="home-services__wrapper">
              
              <div className="home-services__item">
                <Link className="home-services__item-link" href="/services/mern-stack">
                  <figure className="home-services__item-figure">
                    <img alt="MERN Stack Development" className="home-services__item-image" src="/creative_soft/mystudio/assets/img/service/2.png" />
                  </figure>
                  <div className="home-services__item-name">
                    <span className="home-services__item-name-wrapper">MERN Stack <br /> Development</span>
                  </div>
                </Link>
              </div>
              
              <div className="home-services__item">
                <Link className="home-services__item-link" href="/services/ui-ux-design">
                  <figure className="home-services__item-figure">
                    <img alt="UI/UX Design" className="home-services__item-image" src="/creative_soft/mystudio/assets/img/service/4.png" />
                  </figure>
                  <div className="home-services__item-name">
                    <span className="home-services__item-name-wrapper">UI/UX <br /> Design</span>
                  </div>
                </Link>
              </div>
              
              <div className="home-services__item">
                <Link className="home-services__item-link" href="/services/video-editing">
                  <figure className="home-services__item-figure">
                    <img alt="Video Editing" className="home-services__item-image" src="/creative_soft/mystudio/assets/img/service/3.png" />
                  </figure>
                  <div className="home-services__item-name">
                    <span className="home-services__item-name-wrapper">Video <br /> Editing</span>
                  </div>
                </Link>
              </div>
              
              <div className="home-services__item">
                <Link className="home-services__item-link" href="/services/devops">
                  <figure className="home-services__item-figure">
                    <img alt="DevOps & Server Management" className="home-services__item-image" src="/creative_soft/mystudio/assets/img/service/1.png" />
                  </figure>
                  <div className="home-services__item-name">
                    <span className="home-services__item-name-wrapper">DevOps & <br /> Server Management</span>
                  </div>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Grid Lines */}
      <div className="transparent-grid">
        <div className="transparent-grid__container">
          <div className="transparent-grid__row">
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
            <div className="transparent-grid__column" />
          </div>
        </div>
      </div>
      
      <div className="home-services__cutoff">
        <div className="transparent-grid">
          <div className="transparent-grid__container">
            <div className="transparent-grid__row">
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
              <div className="transparent-grid__column" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}