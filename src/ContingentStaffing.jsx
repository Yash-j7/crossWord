import React from "react";
import csaImage from './assets/CSA.jpeg';

const ContingentStaffing = () => (
  <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4">
    <div className="relative text-sand-light py-12 sm:py-20 px-2 sm:px-4 md:px-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-darkbrown">
          <span className="text-brown-DEFAULT">Contingent</span> Staffing Augmentation
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed text-black italic">
          On-demand access to skilled professionals to bridge short-term or project-specific gaps.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16">
      <section className="py-8 sm:py-16">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mb-4 sm:mb-6">
                Our Contingent Staffing Augmentation services provide organizations with on-demand access to skilled professionals to meet short-term or project-specific workforce needs. We help bridge critical talent gaps quickly — whether due to peak workloads, specialized project requirements, or employee absences — without the long-term commitments of full-time hiring.
              </p>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-darkbrown mb-3">We offer</h3>
                <ul className="list-disc pl-5 space-y-2 text-darkbrown">
                  <li><span className="font-semibold">Flexible Workforce Solutions:</span> Rapid deployment of qualified professionals across technical, functional, and managerial roles.</li>
                  <li><span className="font-semibold">Scalable Support:</span> Scale teams up or down based on business priorities and project timelines.</li>
                  <li><span className="font-semibold">Talent Quality:</span> Pre-screened candidates with verified experience and domain expertise.</li>
                  <li><span className="font-semibold">Cost Efficiency:</span> Reduce overhead costs while maintaining operational agility and productivity.</li>
                </ul>
              </div>
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mt-4">
                Our contingent staffing model enables clients to stay competitive, manage workloads effectively, and maintain business continuity with a reliable, adaptable workforce.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={csaImage}
                alt="Staff Augmentation"
                className="w-full max-w-md h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default ContingentStaffing;


