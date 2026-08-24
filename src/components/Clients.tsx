"use client";
import React from 'react';

export default function ClientsSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

          /* Font styling for the heading */
          .client-content .icon-title h2 {
            font-family: 'Poppins', sans-serif !important;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-bottom: 20px;
          }

          /* =========================================
             Vertical Marquee Animation Setup
          ========================================== */
          .marquee-container {
            height: 250px; /* ফিক্সড হাইট, যাতে বক্সগুলো সাদা অংশে না চলে যায় */
            overflow: hidden;
            position: relative;
            /* ওপর এবং নিচে হালকা ফেড ইফেক্ট (Fade Effect) */
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
            mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          }

          .marquee-track {
            display: flex;
            flex-direction: column;
            gap: 20px;
            /* স্ক্রলিং অ্যানিমেশন - 15 সেকেন্ডে লুপ হবে */
            animation: scrollVertical 15s linear infinite;
          }

          /* মাউস হোভার করলে স্ক্রলিং থেমে যাবে */
          .marquee-track:hover {
            animation-play-state: paused;
          }

          .marquee-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          /* নিখুঁত লুপ অ্যানিমেশন */
          @keyframes scrollVertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(calc(-50% - 10px)); }
          }

          /* =========================================
             Individual Text Logo Box Styling
          ========================================== */
          .text-logo-box {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 90px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.02);
            padding: 15px;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .text-logo-box span {
            font-family: 'Poppins', sans-serif !important;
            font-weight: 600;
            font-size: 16px;
            color: #b3b3b3;
            text-align: center;
            line-height: 1.3;
            transition: color 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          /* Hover Effects */
          .text-logo-box:hover {
            border-color: #ff4e00;
            background: rgba(255, 78, 0, 0.05);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(255, 78, 0, 0.1);
          }

          .text-logo-box:hover span {
            color: #ff4e00;
          }

          /* Responsive for Mobile */
          @media (max-width: 575px) {
            .marquee-grid {
              grid-template-columns: 1fr;
            }
            .marquee-container {
              height: 300px;
            }
          }
        `
      }} />
      
      <section className="section clients-area pb-40">
        <div className="container container-menu">
          <div className="row align-items-center">
            
            {/* Video Section */}
            <div className="col-lg-6">
              <div className="client-video">
                <img alt="Pixel & Code Promo Video" src="/creative_soft/mystudio/assets/img/client/video.jpg" />
                <div className="technology-video">
                  <a className="video-btn popup-youtube" href="https://www.youtube.com/watch?v=Z0A7OMkYQf8">
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Clients Text Logo Section */}
            <div className="col-lg-6">
              <div className="client-content">
                <div className="icon-title">
                  <h2>Trusted by 10+ Innovative Brands</h2>
                </div>
                
                {/* Marquee Animation Wrapper */}
                <div className="marquee-container">
                  <div className="marquee-track">
                    
                    {/* First Set of Brands */}
                    <div className="marquee-grid">
                      <div className="text-logo-box"><span>Guptodhan</span></div>
                      <div className="text-logo-box"><span>Boiprint</span></div>
                      <div className="text-logo-box"><span>Chapaghor</span></div>
                      <div className="text-logo-box"><span>Pilot Green Tea</span></div>
                      <div className="text-logo-box"><span>Moda Source <br/> International</span></div>
                      <div className="text-logo-box"><span>Tiba.com</span></div>
                    </div>

                    {/* Second Set of Brands (লুপটি স্মুথ রাখার জন্য ডুপ্লিকেট করা হয়েছে) */}
                    <div className="marquee-grid">
                      <div className="text-logo-box"><span>Guptodhan</span></div>
                      <div className="text-logo-box"><span>Boiprint</span></div>
                      <div className="text-logo-box"><span>Chapaghor</span></div>
                      <div className="text-logo-box"><span>Pilot Green Tea</span></div>
                      <div className="text-logo-box"><span>Moda Source <br/> International</span></div>
                      <div className="text-logo-box"><span>Tiba.com</span></div>
                    </div>

                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}