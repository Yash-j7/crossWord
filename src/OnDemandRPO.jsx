import React from "react";
import rpoImage from './assets/RPO.png';

const OnDemandRPO = () => (
  <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4">
    <div className="relative text-sand-light py-12 sm:py-20 px-2 sm:px-4 md:px-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-darkbrown">
          <span className="text-brown-DEFAULT">On-Demand</span> RPO
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed text-black italic">
          Scalable recruiting support that acts as an extension of your HR team.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16">
      <section className="py-8 sm:py-16">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-darkbrown mb-3">Recruitment Process Outsourcing</h3>
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mb-4 sm:mb-6">
                Our on-demand RPO model provides scalable recruiting support when you need it most. Whether it’s ramping up for a large hiring drive or filling critical roles quickly, we act as an extension of your HR team. We bring advanced sourcing tools, process efficiency, and dedicated recruitment experts to accelerate hiring while maintaining quality and compliance.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={rpoImage}
                alt="On-demand RPO"
                className="w-full max-w-md h-auto rounded-2xl shadow-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default OnDemandRPO;


