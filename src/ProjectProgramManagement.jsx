import React from "react";

const ProjectProgramManagement = () => (
  <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4">
    <div className="relative text-sand-light py-12 sm:py-20 px-2 sm:px-4 md:px-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-darkbrown">
          <span className="text-brown-DEFAULT">Program & Project</span> Management
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed text-black italic">
          Delivering initiatives on time, on budget, and aligned to strategy.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16">
      <section className="py-8 sm:py-16">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mb-4 sm:mb-6">
                Our Program and Project Management Services help organizations plan, execute, and deliver initiatives successfully—on time, within budget, and aligned to strategic objectives. We combine proven methodologies, experienced leadership, and industry-recognized certifications to drive project success from initiation to delivery.
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-darkbrown mb-3">Our Services Include</h3>
              <ul className="list-disc pl-5 space-y-2 text-darkbrown">
                <li><span className="font-semibold">Program Management:</span> End-to-end governance of complex, multi-stream initiatives with a focus on alignment, integration, and benefits realization.</li>
                <li><span className="font-semibold">Project Management:</span> Delivery of projects using best practices in scope, schedule, cost, quality, and risk management.</li>
                <li><span className="font-semibold">PMO Setup and Optimization:</span> Establishment of frameworks, tools, and governance models to enhance delivery consistency and transparency.</li>
                <li><span className="font-semibold">Agile and Hybrid Delivery:</span> Implementation of Agile, Scrum, Kanban, and hybrid approaches tailored to organizational maturity.</li>
                <li><span className="font-semibold">Risk and Change Management:</span> Proactive identification, assessment, and mitigation of risks and organizational change impacts.</li>
              </ul>
              <h3 className="text-xl sm:text-2xl font-bold text-darkbrown mt-6 mb-3">Our Certified Expertise</h3>
              <ul className="list-disc pl-5 space-y-2 text-darkbrown">
                <li>PMP® (Project Management Professional) — PMI</li>
                <li>SAFe® Agilist / Scrum Master Certifications</li>
              </ul>
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mt-4">
                With structured governance, transparent communication, and a results-driven approach, we ensure your programs and projects deliver measurable business value and sustained success.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={'/PPM.png'}
                alt="Program and Project Management Pyramid"
                className="w-full max-w-md h-auto rounded-2xl shadow-xl object-contain bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default ProjectProgramManagement;


