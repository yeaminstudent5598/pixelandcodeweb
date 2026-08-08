"use client";
import React from 'react';
import Link from 'next/link';

export default function WorkSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

          /* Font styling for Work Section */
          .work-area, .underlined-heading__content, .work-title .title, .work-des p, .work-tag ul li span, .work_more .title {
            font-family: 'Poppins', sans-serif !important;
          }
          
          .work-title .title a {
            font-weight: 600;
            letter-spacing: 0.5px;
          }
          
          .work-des p {
            font-weight: 300;
            font-size: 14px;
            color: #b3b3b3;
            line-height: 1.6;
          }

          .work-tag ul li span {
            display: inline-block;
            color: #ff4e00;
            font-size: 13px;
            text-transform: uppercase;
            font-weight: 500;
            margin-right: 15px;
            letter-spacing: 0.5px;
          }

          .work_more .title a {
            font-weight: 500;
            font-size: 16px;
            letter-spacing: 0.5px;
            text-transform: capitalize;
          }
        `
      }} />

      <section className="section work-area">
        <div className="container">
          <div className="row">
            <h4 className="home-intro__overheading underlined-heading underlined-heading--animate">
              <span className="underlined-heading__wrapper">
                <span className="underlined-heading__content text-dark">
                  our work
                </span>
              </span>
            </h4>
          </div>
          <div className="row pt-40">
            
            {/* Left Column Projects */}
            <div className="col-lg-4 offset-lg-1 work-left col-md-6">
              
              {/* Project 1: Guptodhan */}
              <div className="work-item wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="work-img">
                  <img alt="Guptodhan Multi-vendor Platform" className="main-image" src="/creative_soft/mystudio/assets/img/work/1.jpg" />
                  <img alt="Guptodhan Logo" className="title-image" src="/creative_soft/mystudio/assets/img/work/resturon.png" />
                  <img alt="Project ID" className="count-image" src="/creative_soft/mystudio/assets/img/work/f4.png" />
                </div>
                <div className="work-content">
                  <div className="work-title">
                    <span className="title"><Link href="/portfolio/guptodhan">Guptodhan <i className="fas fa-caret-right arrow" /></Link></span>
                  </div>
                  <div className="work-des">
                    <p>A robust multi-vendor e-commerce platform built with modern web technologies, offering seamless store management and Google Play Store deployment readiness.</p>
                  </div>
                  <div className="work-tag">
                    <ul>
                      <li><span>Next.js</span></li>
                      <li><span>Node.js</span></li>
                      <li><span>MongoDB</span></li>
                      <li><span>MERN Stack</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project 2: Chapaghor */}
              <div className="work-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="work-img">
                  <img alt="Chapaghor Printing Press App" className="main-image" src="/creative_soft/mystudio/assets/img/work/2.jpg" />
                  <img alt="Chapaghor Logo" className="title-image" src="/creative_soft/mystudio/assets/img/work/furnishing.png" />
                  <img alt="Project ID" className="count-image" src="/creative_soft/mystudio/assets/img/work/f3.png" />
                </div>
                <div className="work-content">
                  <div className="work-title">
                    <span className="title"><Link href="/portfolio/chapaghor">Chapaghor <i className="fas fa-caret-right arrow" /></Link></span>
                  </div>
                  <div className="work-des">
                    <p>A custom web application developed for a modern printing press business, featuring dynamic categories, custom banners, and optimized static data models.</p>
                  </div>
                  <div className="work-tag">
                    <ul>
                      <li><span>Next.js</span></li>
                      <li><span>Mongoose</span></li>
                      <li><span>Express</span></li>
                      <li><span>React</span></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column Projects */}
            <div className="col-lg-4 offset-lg-1 col-md-6">
              
              {/* Project 3: Amader Agro Farm */}
              <div className="work-item wow fadeInRight" data-wow-delay="50ms" data-wow-duration="1500ms">
                <div className="work-img">
                  <img alt="Amader Agro Farm Organic Store" className="main-image" src="/creative_soft/mystudio/assets/img/work/3.jpg" />
                  <img alt="Agro Farm Logo" className="title-image" src="/creative_soft/mystudio/assets/img/work/army.png" />
                  <img alt="Project ID" className="count-image" src="/creative_soft/mystudio/assets/img/work/f1.png" />
                </div>
                <div className="work-content">
                  <div className="work-title">
                    <span className="title"><Link href="/portfolio/amader-agro-farm">Amader Agro Farm <i className="fas fa-caret-right arrow" /></Link></span>
                  </div>
                  <div className="work-des">
                    <p>A beautifully crafted digital platform dedicated to sourcing and promoting 100% authentic organic products, featuring a clean and intuitive user interface.</p>
                  </div>
                  <div className="work-tag">
                    <ul>
                      <li><span>Next.js</span></li>
                      <li><span>Tailwind CSS</span></li>
                      <li><span>React</span></li>
                      <li><span>UI/UX</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project 4: TrustBridgeBD */}
              <div className="work-item wow fadeInUp" data-wow-delay="50ms" data-wow-duration="1500ms">
                <div className="work-img">
                  <img alt="TrustBridgeBD Marketplace" className="main-image" src="/creative_soft/mystudio/assets/img/work/4.jpg" />
                  <img alt="TrustBridgeBD Logo" className="title-image" src="/creative_soft/mystudio/assets/img/work/ridezibe.png" />
                  <img alt="Project ID" className="count-image" src="/creative_soft/mystudio/assets/img/work/f2.png" />
                </div>
                <div className="work-content">
                  <div className="work-title">
                    <span className="title"><Link href="/portfolio/trustbridgebd">TrustBridgeBD <i className="fas fa-caret-right arrow" /></Link></span>
                  </div>
                  <div className="work-des">
                    <p>A scalable full-stack marketplace application engineered with a highly optimized PostgreSQL database schema and premium minimalist aesthetic design.</p>
                  </div>
                  <div className="work-tag">
                    <ul>
                      <li><span>Next.js</span></li>
                      <li><span>Prisma</span></li>
                      <li><span>PostgreSQL</span></li>
                      <li><span>Tailwind CSS</span></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          <div className="row">
            <div className="work_more">
              <span className="title">
                <Link href="/portfolio">see all (10+) works <i className="fas fa-caret-right arrow" /></Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}