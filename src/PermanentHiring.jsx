import React from "react";
import permanentImage from './assets/permanent.png';

const PermanentHiring = () => (
  <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4">
    <div className="relative text-sand-light py-12 sm:py-20 px-2 sm:px-4 md:px-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-darkbrown">
          <span className="text-brown-DEFAULT">Permanent</span> Hiring
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed text-black italic">
          End-to-end recruitment for long-term hires who fit and thrive.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16">
      <section className="py-8 sm:py-16">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mb-4 sm:mb-6">
                Our Talent Advisory Services are designed to help organizations attract, engage, and hire the right talent—whether for short-term projects or long-term strategic roles. We combine industry expertise, data-driven insights, and a strong talent network to deliver recruitment solutions that align with your business goals.
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-darkbrown mb-3">Permanent Hiring</h3>
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed">
                Finding the right long-term talent is critical to business success. Our permanent hiring services focus on identifying high-quality candidates who not only meet technical requirements but also fit your organization’s culture and values. We manage the full recruitment lifecycle—from sourcing and screening to final offer negotiation—ensuring a seamless experience for both clients and candidates.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={permanentImage}
                alt="Permanent Hiring"
                className="w-full max-w-md h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default PermanentHiring;


