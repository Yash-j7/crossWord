import React from "react";
import healthcareImage from './assets/Healthcare.webp';

const Healthcare = () => (
  <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4">
    <div className="relative text-sand-light py-12 sm:py-20 px-2 sm:px-4 md:px-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-darkbrown">
          <span className="text-brown-DEFAULT">Healthcare</span> & Life Sciences
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed text-black bold italic">
          Driving transformation in healthcare and life sciences — together.
        </p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16">
      <section className="py-8 sm:py-16">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown mb-4 sm:mb-6 tracking-tight">Why Healthcare & Life Sciences?</h2> */}
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mb-4 sm:mb-6">
                The healthcare and life sciences sector is undergoing rapid transformation — and Crossword is positioned at the forefront. With digital advancements, evolving regulations, and a heightened focus on personalized care, the demand for talent that combines clinical insight with technological expertise has never been greater. Crossword delivers flexible, future-ready teams that empower organizations to meet these challenges with confidence.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={healthcareImage} 
                alt="Healthcare and Life Sciences" 
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
              <li>Clinical Research</li>
              <li>Regulatory Affairs</li>
              <li>Quality Assurance</li>
              <li>Medical Affairs</li>
              <li>Biostatistics</li>
              <li>Data Management</li>
            </ul>
            <ul className="space-y-1 sm:space-y-2 text-darkbrown text-base sm:text-lg font-medium">
              <li>Pharmaceutical Development</li>
              <li>Drug Safety</li>
              <li>Clinical Operations</li>
              <li>Medical Writing</li>
              <li>Health Economics</li>
              <li>Market Access</li>
              <li>Digital Health</li>
              <li>Healthcare IT</li>
              <li>Medical Devices</li>
              <li>Biotechnology</li>
              <li>Diagnostics</li>
              <li>Healthcare Analytics</li>
            </ul>
            <ul className="space-y-1 sm:space-y-2 text-brown-DEFAULT text-base sm:text-lg font-medium">
              <li>Healthcare Consulting</li>
              <li>Healthcare Operations</li>
              <li>Healthcare Finance</li>
              <li>Healthcare Compliance</li>
              <li>Healthcare Marketing</li>
              <li>Healthcare Sales</li>
              <li>Healthcare Administration</li>
              <li>Healthcare Technology</li>
              <li>Healthcare Strategy</li>
              <li>Healthcare Innovation</li>
              <li>Healthcare Transformation</li>
              <li>Healthcare Leadership</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Healthcare;
