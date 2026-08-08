"use client";
import React from 'react';

export default function AchievementsSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

          /* Font styling for Achievements Section */
          .patnar_area, .underlined-heading__content, .patnar-content h5 a {
            font-family: 'Poppins', sans-serif !important;
          }
          
          .patnar-content h5 a {
            font-weight: 600 !important;
            font-size: 17px !important;
            letter-spacing: 0.3px;
            color: #ffffff !important;
            transition: color 0.3s ease;
          }

          .patnar-content h5 a:hover {
            color: #ff4e00 !important; /* Theme Orange */
          }
        `
      }} />

      <section className="section patnar_area bg-cover" style={{backgroundImage: 'url("assets/img/patnar/back.jpg")'}}>
        <div className="container">
          <div className="row">
            <h4 className="home-intro__overheading underlined-heading underlined-heading--animate">
              <span className="underlined-heading__wrapper">
                <span className="underlined-heading__content text-light">
                  achievements
                </span>
              </span>
            </h4>
          </div>
          <div className="row pt-60">
            
            {/* Achievement 1: Web & MERN */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="patnar_item wow fadeInUp" data-wow-delay="50ms" data-wow-duration="1500ms">
                <div className="image">
                  <img alt="MERN Stack Experts" src="/creative_soft/mystudio/assets/img/patnar/1.png" />
                </div>
                <div className="patnar-content">
                  <h5><a href="#!">Top MERN Stack & Web Agency</a></h5>
                </div>
              </div>
            </div>

            {/* Achievement 2: Graphics Design */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="patnar_item wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                <div className="image">
                  <img alt="Graphics Design Studio" src="/creative_soft/mystudio/assets/img/patnar/4.png" />
                </div>
                <div className="patnar-content">
                  <h5><a href="#!">Creative Graphics & Brand Design</a></h5>
                </div>
              </div>
            </div>

            {/* Achievement 3: Video Editing */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="patnar_item wow fadeInUp" data-wow-delay="150ms" data-wow-duration="1500ms">
                <div className="image">
                  <img alt="Video Editing Production" src="/creative_soft/mystudio/assets/img/patnar/2.png" />
                </div>
                <div className="patnar-content">
                  <h5><a href="#!">Professional Video Editing & Production</a></h5>
                </div>
              </div>
            </div>

            {/* Achievement 4: UI/UX Design */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="patnar_item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="image">
                  <img alt="UI/UX Design Studio" src="/creative_soft/mystudio/assets/img/patnar/3.png" />
                </div>
                <div className="patnar-content">
                  <h5><a href="#!">Top Custom UI/UX Product Design Studio</a></h5>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Transparent Grid Overlay */}
        <div className="transparent-grid">
          <div className="transparent-grid__container">
            <div className="transparent-grid__row">
              {[...Array(12)].map((_, i) => (
                <div key={`ach-grid-${i}`} className="transparent-grid__column" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}