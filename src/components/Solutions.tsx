"use client";
import React from 'react';
import Link from 'next/link';

export default function Solutions() {
  return (
    <section className="solution-area section">
      {/* 
        3D Button & Font CSS (100% Original Design Restored)
      */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

          /* General Text Font fix for this section */
          .solution-head p, .solution_title, .nav-link, .solution_slide_content h3, .solution_slide_content p, .solution_btn {
            font-family: 'Poppins', sans-serif !important;
          }

          /* =========================================
             3D Box Button Styles (Exactly as original)
          ========================================== */
          .main_button {
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-align: stretch;
            align-items: stretch;
            width: calc(100% + 17px); 
            min-width: 90px;
            max-width: 25.667%; /* Restored original max-width */
            height: 71px;
            margin-left: -17px;
            border: none;
            background: none;
            color: #ff4e00;
            font-weight: 500;
            font-size: 18px;
            cursor: pointer;
            margin: 40px auto 120px;
            text-decoration: none;
          }

          .main_button::before, .main_button::after {
            content: "";
            position: absolute;
            top: 0;
            height: 70px;
            background-position-y: 0;
            background-size: 170px 70px;
            background-repeat: no-repeat;
            pointer-events: none;
          }

          .main_button::before{
            right: 50%;
            left: 0;
            /* Next.js public folder path */
            background-image: url('/creative_soft/mystudio/assets/img/work/btn1.png');
            background-position-x: 0;
          }

          .main_button::after{
            right:0;
            left: 50%;
            /* Next.js public folder path */
            background-image: url('/creative_soft/mystudio/assets/img/work/btn2.png');
            background-position-x: 100%;
          }

          .button__label {
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 17px 17px 17px 18px;
            transition: transform 0.2s ease-out;
            transform: translate(0, 0);
            font-family: 'Poppins', sans-serif !important;
          }

          .main_button:hover .button__label {
            transform: translate(-1px, 1px);
            color: #ff4e00;
          }

          .main_button:active .button__label {
            transform: translate(2px, -1px);
          }

          /* Mobile Responsive Fix */
          @media (max-width: 768px) {
            .main_button {
              max-width: 250px;
              margin-left: auto;
              margin-right: auto;
            }
          }
        `
      }} />

      <div className="container">
        <div className="row">
          <div className="solution-head">
            <p>
              Take full advantage of tech solutions! <br /> 
              Launch innovative digital products faster. <br /> 
              Rethink your IT strategy by embracing disruptive user-centric design &amp; software architectural patterns.
            </p>
            <h2 className="solution_title">Dedicated Solutions</h2>
            <div className="soluiton_line">
              <div className="solution-height"></div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="solution_nav">
            <ul className="nav nav-tabs" id="nav-tab2" role="tablist">
              <li>
                <a className="nav-link active" id="nav-dna-tab" data-bs-toggle="tab" href="#nav-dna" role="tab">MERN Stack MVP</a>
              </li>
              <li>
                <a className="nav-link" id="nav-modiernization-tab" data-bs-toggle="tab" href="#nav-modiernization" role="tab">Software Modernization</a>
              </li>
              <li>
                <a className="nav-link" id="nav-machine-tab" data-bs-toggle="tab" href="#nav-machine" role="tab">Machine Learning &amp; AI</a>
              </li>
            </ul>
          </div>
          
          <div className="tab-content all_solution_slider" id="nav-tabContent2">
            
            {/* single_slider 1 */}
            <div className="solution_slider tab-pane fade active show" id="nav-dna" role="tabpanel" aria-labelledby="nav-dna-tab">
              <div className="solution_slide_image">
                <img src="/creative_soft/mystudio/assets/img/solution/3.jpeg" alt="MERN Stack Solutions" />
                <div className="overlay-video">
                  <div className="text">
                    <div className="technology-video">
                      <a className="video-btn video-btn2 popup-youtube" href="https://www.youtube.com/watch?v=Z0A7OMkYQf8">
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="solution_slide_content">
                <h3>Build Fast with MERN Stack</h3>
                <p>We leverage MongoDB, Express.js, React, and Node.js to build highly scalable and performant MVPs and e-commerce platforms tailored to your business needs.</p>
                <Link href="/services/mern-stack" className="solution_btn">Read More</Link>
              </div>
            </div>

            {/* single_slider 2 */}
            <div className="solution_slider tab-pane fade" id="nav-modiernization" role="tabpanel" aria-labelledby="nav-modiernization-tab">
              <div className="solution_slide_image">
                <img src="/creative_soft/mystudio/assets/img/solution/2.jpeg" alt="Software Modernization" />
                <div className="overlay-video">
                  <div className="text">
                    <div className="technology-video">
                      <a className="video-btn video-btn2 popup-youtube" href="https://www.youtube.com/watch?v=Z0A7OMkYQf8">
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="solution_slide_content">
                <h3>Modern Web Applications</h3>
                <p>Upgrade your legacy systems with cutting-edge technologies like Next.js, Prisma, and Tailwind CSS to ensure blazing-fast performance and seamless user experiences.</p>
                <Link href="/services/web-development" className="solution_btn">Read More</Link>
              </div>
            </div>

            {/* single_slider 3 */}
            <div className="solution_slider tab-pane fade" id="nav-machine" role="tabpanel" aria-labelledby="nav-machine-tab">
              <div className="solution_slide_image">
                <img src="/creative_soft/mystudio/assets/img/solution/1.jpeg" alt="Machine Learning and AI" />
                <div className="overlay-video">
                  <div className="text">
                    <div className="technology-video">
                      <a className="video-btn video-btn2 popup-youtube" href="https://www.youtube.com/watch?v=Z0A7OMkYQf8">
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="solution_slide_content">
                <h3>Intelligent Automation</h3>
                <p>Step into the future by integrating Python-powered Machine Learning models and data science algorithms to automate operations and make smarter business decisions.</p>
                <Link href="/services/ai-integration" className="solution_btn">Read More</Link>
              </div>
            </div>
            
          </div>

          <div className="solution-head solution-head2">
            <div className="soluiton_line soluiton_line_bottom">
              <div className="solution-height"></div>
            </div>
            <p>You have ideas. We have software solutions.</p>
            <h2 className="solution_title">Time to join forces.</h2>
            
            {/* 3D Box Button (Exactly same as original design) */}
            <Link href="/contact" className="main_button">
              <span className="button__label">Start a Project</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Cutouts (Black to White Transition) */}
      <div className="home-services__cutoff">
        <div className="transparent-grid">
          <div className="transparent-grid__container">
            <div className="transparent-grid__row">
              {[...Array(12)].map((_, i) => (
                <div key={`cutoff-${i}`} className="transparent-grid__column"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}