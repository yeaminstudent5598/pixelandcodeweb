"use client";
import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

          /* ==========================================
             Minimal & Clean White Sidebar Styling
          ========================================== */
          .sidebar-wrap, .sidebar-inner, .sidebar-content {
            font-family: 'Poppins', sans-serif !important;
            background-color: #ffffff !important;
            color: #1a1a1a !important;
          }

          .sidebar-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding: 40px 50px;
            overflow-y: auto;
          }

          /* Close Button */
          .sidebar-close-btn {
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease;
          }
          .sidebar-close-btn i {
            color: #1a1a1a !important;
            font-size: 16px;
          }
          .sidebar-close-btn:hover {
            background: #ff4e00;
          }
          .sidebar-close-btn:hover i {
            color: #ffffff !important;
          }

          /* Main Menu Links with Proper Spacing for '+' Icon */
          .overlay-menu__main-menu {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 0;
            margin: 20px 0;
          }

          .menu_item_link {
            font-family: 'Poppins', sans-serif !important;
            font-weight: 600 !important;
            font-size: 18px !important;
            color: #1a1a1a !important;
            letter-spacing: 0.5px;
            text-decoration: none;
            display: flex !important;
            align-items: center;
            justify-content: space-between !important;
            padding: 8px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            transition: color 0.3s ease;
          }

          .menu_item_link span {
            display: inline-flex;
            align-items: center;
            margin-left: 15px !important;
          }

          .menu_item_link span i {
            font-size: 12px;
            color: #777777;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .menu_item_link:hover {
            color: #ff4e00 !important;
          }

          .menu_item_link:hover span i {
            color: #ff4e00 !important;
            transform: rotate(90deg);
          }

          /* Submenu & Categories Text */
          .overlay-categories__label {
            font-family: 'Poppins', sans-serif !important;
            font-weight: 600 !important;
            font-size: 18px !important;
            line-height: 1.4 !important;
            color: #1a1a1a !important;
            margin-bottom: 15px;
          }
          
          .overlay-categories p, 
          .overlay-submenu__animated-row {
            font-family: 'Poppins', sans-serif !important;
            font-weight: 300 !important;
            font-size: 14px !important;
            color: #555555 !important;
          }

          .overlay-categories__menu li a {
            font-family: 'Poppins', sans-serif !important;
            font-weight: 400 !important;
            font-size: 14px !important;
            color: #444444 !important;
            letter-spacing: 0.3px;
            transition: color 0.3s ease;
          }
          .overlay-categories__menu li a:hover {
            color: #ff4e00 !important;
          }

          /* Map & Location Text */
          .map-image__hex-title {
            font-family: 'Poppins', sans-serif !important;
            font-weight: 600 !important;
            color: #1a1a1a !important;
          }
          .map-image__hex-text {
            font-family: 'Poppins', sans-serif !important;
            font-weight: 400 !important;
            font-size: 12px !important;
            color: #555555 !important;
          }

          /* ==========================================
             Fixed Footer Layout (Contact & Socials)
          ========================================== */
          .sidebar-footer-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            border-top: 1px solid rgba(0, 0, 0, 0.08);
            padding-top: 25px;
            margin-top: 30px;
            gap: 20px;
            flex-wrap: wrap;
          }

          .contact-info ul {
            padding: 0;
            margin: 0 0 15px 0;
            list-style: none;
          }

          .contact-info ul li {
            font-family: 'Poppins', sans-serif !important;
            font-weight: 400 !important;
            font-size: 14px !important;
            color: #333333 !important;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .contact-info ul li i {
            color: #ff4e00 !important;
          }

          .social-icon {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .social-icon ul {
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .social-icon ul li span {
            color: #333333 !important;
            font-weight: 500;
            font-size: 14px;
          }

          .social-icon ul li a {
            color: #1a1a1a !important;
            background: rgba(0, 0, 0, 0.05);
            width: 35px;
            height: 35px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .social-icon ul li a:hover {
            background: #ff4e00 !important;
            color: #ffffff !important;
          }

          /* Let's Talk Button Clean Styling */
          .contact_now_btn .main_button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #1a1a1a !important;
            color: #ffffff !important;
            padding: 12px 25px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-decoration: none;
            transition: background 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .contact_now_btn .main_button:hover {
            background: #ff4e00 !important;
          }

          .contact_now_btn .main_button span {
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          /* Back Button in Submenu */
          .overlay-submenu__back {
            color: #1a1a1a !important;
            background: none;
            border: none;
            cursor: pointer;
          }
          .overlay-submenu__back:hover {
            color: #ff4e00 !important;
          }
        `
      }} />

      <div className="sidebar-wrap">
        <div className="sidebar-inner">
          <div className="sidebar-close">
            <div className="sidebar-close-btn">
              <i className="fa fa-times" />
            </div>
          </div>
          <div className="sidebar-content">
            
            {/* Top Area: Logo & Menu */}
            <div>
              <div className="sidebar-logo">
                <Link href="/">
                  <img 
                    alt="Pixel & Code Logo" 
                    className="img-fluid" 
                    src="/logo-01.svg" 
                    style={{ height: '45px', width: 'auto' }}
                  />
                </Link>
              </div>
              
              <div className="overlay-menu">
                <div className="overlay-menu__inner">
                  <div className="overlay-menu__content">
                    
                    {/* Sidebar Navigation Tabs */}
                    <ul className="overlay-menu__main-menu nav nav-tabs" id="nav-tab" role="tablist">
                      <li className="overlay-menu__main-item" style={{ width: '100%' }}>
                        <a className="menu_item_link" data-bs-toggle="tab" href="#nav-home" id="nav-home-tab" role="tab">Home <span><i className="fas fa-plus" /></span></a>
                      </li>
                      <li className="overlay-menu__main-item" style={{ width: '100%' }}>
                        <a className="menu_item_link" data-bs-toggle="tab" href="#nav-about" id="nav-about-tab" role="tab">About Us <span><i className="fas fa-plus" /></span></a>
                      </li>
                      <li className="overlay-menu__main-item" style={{ width: '100%' }}>
                        <a className="menu_item_link" data-bs-toggle="tab" href="#nav-service" id="nav-service-tab" role="tab">Services <span><i className="fas fa-plus" /></span></a>
                      </li>
                      <li className="overlay-menu__main-item" style={{ width: '100%' }}>
                        <a className="menu_item_link" data-bs-toggle="tab" href="#nav-works" id="nav-works-tab" role="tab">Portfolio <span><i className="fas fa-plus" /></span></a>
                      </li>
                      <li className="overlay-menu__main-item" style={{ width: '100%' }}>
                        <a className="menu_item_link overly-menu_item_small" data-bs-toggle="tab" href="#nav-carrer" id="nav-carrer-tab" role="tab">Careers <span><i className="fas fa-plus" /></span></a>
                      </li>
                      <li className="overlay-menu__main-item" style={{ width: '100%' }}>
                        <a className="menu_item_link overly-menu_item_small" data-bs-toggle="tab" href="#nav-contact" id="nav-contact-tab" role="tab">Contact<span> <i className="fas fa-plus" /></span></a>
                      </li>
                    </ul>

                    {/* Sidebar Tab Contents */}
                    <div className="tab-content all_slide-menu-items" id="nav-tabContent">
                      
                      {/* Home Tab */}
                      <div className="overlay-submenu tab-pane fade" id="nav-home" role="tabpanel">
                        <div className="overlay-submenu__item overlay-submenu__item--hidden">
                          <div className="overlay-submenu__column overlay-submenu__column--content">
                            <button className="overlay-submenu__back animated-icon overlay-submenu__animated-row">
                              <span className="overlay-icon">
                                <i className="fas fa-long-arrow-alt-right" />
                              </span>
                            </button>
                            <div className="overlay-categories overlay-submenu__animated-row">
                              <div className="overlay-categories__label overlay-submenu__animated-row">
                                Scale your business with Next-Gen Technologies. Pixel & Code is here to help.
                              </div>
                              <p className="overlay-submenu__animated-row">Expert developers & designers ready to elevate your brand.</p>
                              <ul className="overlay-categories__menu overlay-submenu__animated-row">
                                <li><Link href="/services/mern-stack">MERN Stack (Next.js/Node.js) MVP</Link></li>
                                <li><Link href="/services/ui-ux-design">Premium UI/UX Product Design</Link></li>
                                <li><Link href="/services/video-editing">Professional Video Editing</Link></li>
                                <li><Link href="/services/ai-integration">AI & Machine Learning Solutions</Link></li>
                              </ul>
                              <div className="overly_subbtn overly_subbtn2">
                                <Link className="main_button" href="/about">
                                  <span className="button__label">Read More</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="overlay-submenu__column overlay-submenu__column--thumb overlay-submenu__animated-thumb">
                            <img alt="home" src="/creative_soft/mystudio/assets/img/submenu/home.png" />
                          </div>
                        </div>
                      </div>

                      {/* About Tab */}
                      <div className="overlay-submenu tab-pane fade" id="nav-about" role="tabpanel">
                        <div className="overlay-submenu__item overlay-submenu__item--hidden">
                          <div className="overlay-submenu__column overlay-submenu__column--content">
                            <button className="overlay-submenu__back animated-icon">
                              <span className="overlay-icon">
                                <i className="fas fa-long-arrow-alt-right" />
                              </span>
                            </button>
                            <div className="overlay-categories">
                              <div className="overlay-categories__label">We build powerful software & stunning digital experiences</div>
                              <p>
                                At Pixel & Code, we don't just write code; we build scalable digital solutions. From robust MERN stack architectures and intelligent Python integrations to pixel-perfect UI/UX design and dynamic video editing, our dedicated team is at the forefront of modern technology.
                              </p>
                              <div className="overly_subbtn overly_subbtn2">
                                <Link className="main_button" href="/about">
                                  <span className="button__label">Meet the Team</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="overlay-submenu__column overlay-submenu__column--thumb overlay-submenu__animated-thumb">
                            <img alt="about" src="/creative_soft/mystudio/assets/img/submenu/about.png" />
                          </div>
                        </div>
                      </div>

                      {/* Service Tab */}
                      <div className="overlay-submenu tab-pane fade" id="nav-service" role="tabpanel">
                        <div className="overlay-submenu__item overlay-submenu__item--hidden">
                          <div className="overlay-submenu__column overlay-submenu__column--content">
                            <button className="overlay-submenu__back animated-icon">
                              <span className="overlay-icon">
                                <i className="fas fa-long-arrow-alt-right" />
                              </span>
                            </button>
                            <div className="content mCustomScrollbar light" data-mcs-theme="minimal-light" id="custom_scroll1">
                              <div className="overlay-categories">
                                <p>Core Services</p>
                                <ul className="overlay-categories__menu">
                                  <li><Link href="/services/mern-stack">MERN Stack Web Apps</Link></li>
                                  <li><Link href="/services/ui-ux-design">UI/UX & Product Design</Link></li>
                                  <li><Link href="/services/video-editing">Video Editing & Production</Link></li>
                                  <li><Link href="/services/devops">DevOps & Cloud VPS Setup</Link></li>
                                </ul>
                              </div>
                              <div className="overlay-categories">
                                <p>Advanced Solutions</p>
                                <ul className="overlay-categories__menu">
                                  <li><Link href="/solutions/e-commerce">Next.js E-Commerce Platforms</Link></li>
                                  <li><Link href="/solutions/ai">Python & Data Science</Link></li>
                                  <li><Link href="/solutions/custom-erp">Custom ERP Systems</Link></li>
                                </ul>
                                <div className="overly_subbtn pt-20">
                                  <Link className="main_button" href="/services">
                                    <span className="button__label">View All Services</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="overlay-submenu__column overlay-submenu__column--thumb overlay-submenu__animated-thumb">
                            <img alt="service" src="/creative_soft/mystudio/assets/img/submenu/service.png" />
                          </div>
                        </div>
                      </div>

                      {/* Portfolio Tab */}
                      <div className="overlay-submenu tab-pane fade" id="nav-works" role="tabpanel">
                        <div className="overlay-submenu__item overlay-submenu__item--hidden">
                          <div className="overlay-submenu__column overlay-submenu__column--content">
                            <button className="overlay-submenu__back animated-icon">
                              <span className="overlay-icon">
                                <i className="fas fa-long-arrow-alt-right" />
                              </span>
                            </button>
                            <div className="content mCustomScrollbar light" data-mcs-theme="minimal-light" id="custom_scroll2">
                              <div className="overlay-categories">
                                <p>Expertise</p>
                                <ul className="overlay-categories__menu">
                                  <li><Link href="/portfolio">Next.js & Tailwind Apps</Link></li>
                                  <li><Link href="/portfolio">Node.js API Architecture</Link></li>
                                  <li><Link href="/portfolio">Figma UI/UX Prototypes</Link></li>
                                  <li><Link href="/portfolio">Promo Video Editing</Link></li>
                                </ul>
                              </div>
                              <div className="overlay-categories">
                                <p>Recent Projects</p>
                                <ul className="overlay-categories__menu">
                                  <li><Link href="/portfolio">Guptodhan (Multi-vendor Platform)</Link></li>
                                  <li><Link href="/portfolio">TrustBridgeBD (Marketplace)</Link></li>
                                  <li><Link href="/portfolio">Chapaghor (Printing App)</Link></li>
                                  <li><Link href="/portfolio">Amader Agro Farm (Organic eCom)</Link></li>
                                </ul>
                                <div className="overly_subbtn">
                                  <Link className="main_button" href="/portfolio">
                                    <span className="button__label">See All Work</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="overlay-submenu__column overlay-submenu__column--thumb overlay-submenu__animated-thumb">
                            <img alt="portfolio" src="/creative_soft/mystudio/assets/img/submenu/work.png" />
                          </div>
                        </div>
                      </div>

                      {/* Careers Tab */}
                      <div className="overlay-submenu tab-pane fade" id="nav-carrer" role="tabpanel">
                        <div className="overlay-submenu__item overlay-submenu__item--hidden">
                          <div className="overlay-submenu__column overlay-submenu__column--content">
                            <button className="overlay-submenu__back animated-icon">
                              <span className="overlay-icon">
                                <i className="fas fa-long-arrow-alt-right" />
                              </span>
                            </button>
                            <div className="content mCustomScrollbar light" data-mcs-theme="minimal-light" id="custom_scroll4">
                              <div className="overlay-categories">
                                <p>Open Positions</p>
                                <ul className="overlay-categories__menu">
                                  <li><Link href="/careers">Frontend Developer (Next.js)</Link></li>
                                  <li><Link href="/careers">Backend Engineer (Node.js/Prisma)</Link></li>
                                  <li><Link href="/careers">UI/UX Designer (Figma)</Link></li>
                                  <li><Link href="/careers">Professional Video Editor</Link></li>
                                  <li><Link href="/careers">Python / AI Enthusiast</Link></li>
                                </ul>
                                <div className="overly_subbtn pt-20">
                                  <Link className="main_button" href="/careers">
                                    <span className="button__label">Apply Now</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="overlay-submenu__column overlay-submenu__column--thumb overlay-submenu__animated-thumb">
                            <img alt="careers" src="/creative_soft/mystudio/assets/img/submenu/carrer.png" />
                          </div>
                        </div>
                      </div>

                      {/* Contact Tab */}
                      <div className="overlay-submenu tab-pane fade" id="nav-contact" role="tabpanel">
                        <div className="overlay-submenu__item overlay-submenu__item--hidden">
                          <div className="overlay-submenu__column overlay-submenu__column--content">
                            <button className="overlay-submenu__back animated-icon">
                              <span className="overlay-icon">
                                <i className="fas fa-long-arrow-alt-right" />
                              </span>
                            </button>
                            <div className="overlay-categories">
                              <div className="overlay-categories__label overlay-submenu__animated-row">
                                Got a project in mind? We'd love to hear from you.
                              </div>
                              <p>Phone</p>
                              <ul className="overlay-categories__menu">
                                <li><a href="tel:+8801234567890">+880 12345 67890</a></li>
                              </ul>
                            </div>
                            <div className="overlay-categories">
                              <p>Email</p>
                              <ul className="overlay-categories__menu">
                                <li><a href="mailto:hello@pixelandcode.com">hello@pixelandcode.com</a></li>
                              </ul>
                            </div>
                            <div className="overlay-categories">
                              <p>Head Office</p>
                              <ul className="overlay-categories__menu">
                                <li><span>Shariatpur Sadar, Shariatpur, Bangladesh</span></li>
                              </ul>
                            </div>
                            <div className="overly_subbtn overly_contact">
                              <Link className="main_button" href="/contact">
                                <span className="button__label">Start a Project</span>
                              </Link>
                            </div>
                          </div>
                          <div className="overlay-submenu__column overlay-submenu__column--thumb map-image">
                            <img alt="map" className="world_main-img" src="/creative_soft/mystudio/assets/img/submenu/world.png" />
                            
                            {/* Pixel & Code Map Pin */}
                            <div className="map-image__pin" style={{ top: '45%', left: '68%' }}>
                              <div className="map-image__hex">
                                <span className="map-image__hex-title">Pixel & Code</span>
                                <span className="map-image__hex-text">Shariatpur Sadar, BD</span>
                                <img alt="hexa" src="/creative_soft/mystudio/assets/img/submenu/map_dot.png" />
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Area (Contact & Socials & Button Fixed) */}
            <div className="sidebar-footer-wrapper">
              <div className="sidebar-footer-left">
                <div className="contact-info">
                  <ul>
                    <li><i className="fa fa-envelope" /> hello@pixelandcode.com</li>
                    <li><i className="fa fa-phone" /> +880 12345 67890</li>
                  </ul>
                </div>
                <div className="social-icon">
                  <ul>
                    <li><span>Follow Us:</span></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a></li>
                  </ul>
                </div>
              </div>
              
              <div className="sidebar-footer-right">
                <div className="contact_now_btn">
                  <Link href="/contact">
                    <span>Let's Talk <i className="fas fa-long-arrow-alt-right" /></span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}