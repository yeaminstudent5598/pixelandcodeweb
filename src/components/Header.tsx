"use client";
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

          /* Desktop Layout Fixes */
          @media (min-width: 992px) {
            .main-menu-wrap {
              display: flex !important;
              align-items: center !important;
              justify-content: space-between !important;
              width: 100% !important;
              height: 124px !important;
            }
            .site-logo { width: 20%; display: flex; align-items: center; height: 100%; }
            .main-menu-area { width: 60%; display: flex; justify-content: center !important; height: 100%; }
            // .header-log-reg { width: 20%; display: flex !important; justify-content: flex-end !important; align-items: center !important; height: 100%; padding-right: 15px; }
            
            .mainmenu > ul {
              display: flex !important;
              align-items: center;
              justify-content: center;
              gap: 30px;
              margin: 0;
              padding: 0;
              height: 100%;
            }
            .mainmenu > ul > li {
              list-style: none;
              display: inline-block;
              position: relative;
              height: 100%;
            }
          }

          .mainmenu > ul > li > a {
            font-family: 'Poppins', sans-serif !important;
            font-weight: 500 !important;
            letter-spacing: 0.5px;
            text-transform: capitalize !important;
            white-space: nowrap !important;
          }

          /* ==========================================
             Mega Menu Overlap Fix (100% Solved)
          ============================================= */
          .sub-menu_mega {
            width: 950px !important;
            max-width: 90vw;
            height: auto !important; 
            padding-bottom: 30px !important;
          }
          .sub-menu__wrapper {
            display: flex !important;
            flex-wrap: nowrap !important;
            width: 100%;
            min-height: 350px;
          }
          .sub-menu__wrapper--left {
            flex: 0 0 300px !important;
            min-width: 300px !important; 
            padding-right: 30px !important;
          }
          .sub-menu__wrapper--right {
            flex: 1 !important; 
            display: flex !important;
            flex-direction: column !important; /* Stack top and bottom */
            justify-content: space-between !important;
          }

          /* Top Section (Core Services) */
          .sub-nav_right {
            width: 100% !important;
          }
          .sub-nav_right > ul {
            display: flex !important;
            flex-wrap: wrap !important;
            margin: 0 !important; 
            padding: 0 !important;
          }
          .sub-nav_right > ul > li {
            flex: 0 0 50% !important;
            max-width: 50% !important;
            float: none !important; /* Cancel old float causing overlap */
            margin-bottom: 15px !important;
          }
          .sub-nav_right > ul > li > a {
            height: auto !important; 
            padding: 5px 0 !important;
            display: flex;
            align-items: center;
          }

          /* Bottom Section (Packages & Video) */
          .sub-nav_bottom {
            display: flex !important;
            flex-wrap: nowrap !important;
            justify-content: space-between;
            align-items: center !important;
            width: 100% !important;
            clear: both !important; /* Ensure it stays below floats */
            margin-top: 20px !important;
            padding-top: 25px !important;
            border-top: 1px solid rgba(255, 78, 0, 0.2);
          }
          .nav-bottom-left { flex: 1; }
          .nav-bottom-left ul { margin: 0 !important; padding: 0 !important; }
          .nav-bottom__right {
            flex: 0 0 250px !important; 
            width: 250px !important;
          }
          .sub-menu__bottom-thumbnail {
            width: 100%;
            position: relative;
            border-radius: 5px;
            overflow: hidden;
          }
          .sub-menu__bottom-thumbnail img {
            width: 100%;
            height: auto;
            display: block;
          }
          .sub-menu__bottom-thumbnail .technology-video a {
            position: absolute;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            right: auto !important;
            bottom: auto !important;
            margin: 0 !important;
          }
          .video_des {
            flex: 0 0 130px !important;
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }

          /* Logo Style */
          .brand-logo-container {
            display: flex;
            align-items: center;
            text-decoration: none;
            gap: 12px;
          }
          .brand-text {
            font-family: 'Poppins', sans-serif;
            font-size: 26px;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
            line-height: 1;
          }
          .brand-text span { color: #2563EB; }
        `
      }} />

      <header className="header-area">
        <div className="header-btm-area">
          <div className="container container-menu">
            <div className="main-menu-wrap">
              
              <div className="site-logo">
                <Link className="brand-logo-container" href="/">
                  <img className="img-fluid" src="/logo-01.svg" alt="Pixel & Code Icon" style={{ height: '40px', width: 'auto', display: 'block' }} />
                  <h2 className="brand-text">Pixel <span>&</span> Code</h2>
                </Link>
              </div>
              
              <div className="main-menu-area text-right">
                <nav className="mainmenu" style={{ display: 'block' }}>
                  <ul>
                    <li><Link href="/">Home</Link><span className="overly-main_icon" /></li>
                    <li><Link href="/about">About Us</Link><span className="overly-main_icon" /></li>
                    <li><Link href="/services">Services <i className="fas fa-angle-down ang-btn" /></Link>
                      <span className="overly-main_icon" />
                      
                      <nav className="sub-menu_mega" style={{ textAlign: 'left' }}>
                        <section className="sub-menu__wrapper">
                          <div className="sub-menu__wrapper--left">
                            <h4> Why Work With Us </h4>
                            <div className="left_box">
                              <div className="icon">
                                <Link href="/portfolio"><img alt="portfolio" src="/creative_soft/mystudio/assets/img/submenu/user.png" /></Link>
                              </div>
                              <h4><Link href="/portfolio">Our Portfolio</Link></h4>
                              <p>Take a look at the brands and products we've helped launch and grow.</p>
                            </div>
                            <div className="left_box">
                              <div className="icon">
                                <Link href="/about"><img alt="team" src="/creative_soft/mystudio/assets/img/submenu/users.png" /></Link>
                              </div>
                              <h4><Link href="/about">Meet Our Team</Link></h4>
                              <p>A dedicated team of developers, designers &amp; marketers behind every project.</p>
                            </div>
                          </div>
                          
                          <div className="sub-menu__wrapper--right">
                            <h4 className="sub-menu__title">Core Services</h4>
                            <div className="sub-nav_right">
                              <ul>
                                <li><Link href="/services/web-development"><i className="fas fa-code" /> Web Development</Link></li>
                                <li><Link href="/services/graphics-design"><i className="fas fa-palette" /> Graphics Design</Link></li>
                                <li><Link href="/services/digital-marketing"><i className="fas fa-bullhorn" /> Digital Marketing</Link></li>
                                <li><Link href="/services/video-editing"><i className="fas fa-video" /> Video Editing</Link></li>
                                <li><Link href="/services/ui-ux-design"><i className="fas fa-pencil-ruler" /> UI/UX Design</Link></li>
                                <li><Link href="/services/meta-marketing"><i className="fab fa-facebook" /> Meta Marketing</Link></li>
                              </ul>
                            </div>
                            
                            <div className="sub-nav_bottom">
                              <div className="nav-bottom-left">
                                <h4 className="sub-menu__title">Packages</h4>
                                <ul>
                                  <li><Link href="/packages/silver"><i className="fas fa-star" /> Silver Starter</Link></li>
                                  <li><Link href="/packages/gold"><i className="fas fa-chart-line" /> Gold Growth</Link></li>
                                  <li><Link href="/packages/diamond"><i className="fas fa-gem" /> Diamond Pro</Link></li>
                                </ul>
                              </div>
                              
                              <div className="nav-bottom__right">
                                <div className="sub-menu__bottom-thumbnail">
                                  <img alt="Pixel & Code showreel" src="/creative_soft/mystudio/assets/img/submenu/men.jpg" />
                                  <div className="technology-video">
                                    <a className="video-btn popup-youtube" href="#!">
                                      <i className="fas fa-play" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="video_des">
                                <p>See how we turn ideas into pixel-perfect digital products.</p>
                              </div>
                            </div>
                          </div>
                        </section>
                      </nav>
                    </li>
                    
                    <li><Link href="/portfolio">Portfolio</Link><span className="overly-main_icon" /></li>
                    <li><Link href="/packages">Packages</Link><span className="overly-main_icon" /></li>
                    <li><Link href="/store">Store</Link><span className="overly-main_icon" /></li>
                    <li><Link href="/contact">Contact</Link><span className="overly-main_icon" /></li>
                  </ul>
                </nav>
              </div>
              
              <div className="header-icon">
                <a className="sidebar-toggle-btn" href="#!"><i className="fas fa-bars" /></a>
              </div>
              
              <div className="header-log-reg">
                <Link className="main-menu__estimate-text" href="/contact">Get an estimate</Link>
                <span className="overly-main_icon" />
              </div>
              
              <div className="header-toggle-btn">
                <a className="sidebar-toggle-btn" href="#!">Menu <i className="fa fa-bars" /></a>
              </div>
            </div>
            
            <div className="site-header__separator separator-dense">
              {[...Array(12)].map((_, i) => <div key={i} className="separator-dense__cell" />)}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}