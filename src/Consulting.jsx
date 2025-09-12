import React from "react";
import consultingImage from './assets/consulting.jpg';

const Consulting = () => (
  <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4">
    <div className="relative text-sand-light py-12 sm:py-20 px-2 sm:px-4 md:px-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-darkbrown">
          <span className="text-brown-DEFAULT">Consulting</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed text-black bold italic">
          Insight. Agility. Impact. Where strategy meets innovation, that's Crossword Consulting.
        </p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16">
      <section className="py-8 sm:py-16">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown mb-4 sm:mb-6 tracking-tight">Why Consulting?</h2> */}
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mb-4 sm:mb-6">
                In a world where change is constant, consulting is no longer about advice — it's about impact. Collabera is helping organizations transform challenges into opportunities by blending deep expertise with digital innovation and fresh perspectives. With our future-ready consulting teams, we don't just guide the future of business — we help create it.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={consultingImage} 
                alt="Consulting Services" 
                className="w-full max-w-md h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-12">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-darkbrown mb-4 sm:mb-8">Key Areas & Roles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <ul className="space-y-1 sm:space-y-2 text-brown-DEFAULT text-base sm:text-lg font-medium">
              <li>Strategy Consulting</li>
              <li>Digital Transformation</li>
              <li>Change Management</li>
              <li>Business Process Improvement</li>
              <li>Technology Consulting</li>
              <li>Management Consulting</li>
            </ul>
            <ul className="space-y-1 sm:space-y-2 text-darkbrown text-base sm:text-lg font-medium">
              <li>Project Management</li>
              <li>Program Management</li>
              <li>Portfolio Management</li>
              <li>Agile Consulting</li>
              <li>Data Analytics Consulting</li>
              <li>Cloud Consulting</li>
              <li>Cybersecurity Consulting</li>
              <li>IT Strategy</li>
              <li>Business Analysis</li>
              <li>Process Optimization</li>
              <li>Organizational Design</li>
              <li>Performance Improvement</li>
            </ul>
            <ul className="space-y-1 sm:space-y-2 text-brown-DEFAULT text-base sm:text-lg font-medium">
              <li>Financial Consulting</li>
              <li>Operations Consulting</li>
              <li>HR Consulting</li>
              <li>Marketing Consulting</li>
              <li>Sales Consulting</li>
              <li>Customer Experience</li>
              <li>Supply Chain Consulting</li>
              <li>Risk Management</li>
              <li>Compliance Consulting</li>
              <li>Innovation Consulting</li>
              <li>Growth Strategy</li>
              <li>M&A Consulting</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Consulting;
