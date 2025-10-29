import React from "react";

const ManagedServiceProvider = () => (
  <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4">
    <div className="relative text-sand-light py-12 sm:py-20 px-2 sm:px-4 md:px-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-darkbrown">
          <span className="text-brown-DEFAULT">Managed Service Provider</span> (MSP)
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed text-black italic">
          Centralized, transparent, and compliant contingent workforce management.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16">
      <section className="py-8 sm:py-16">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mb-4 sm:mb-6">
                Our Managed Service Provider (MSP) solutions help organizations optimize and streamline their contingent workforce management through a single, centralized program. We take full ownership of the end-to-end talent management process—covering vendor coordination, compliance, cost control, and workforce performance—allowing your teams to focus on core business priorities.
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-darkbrown mb-3">Our MSP Services Include</h3>
              <ul className="list-disc pl-5 space-y-2 text-darkbrown">
                <li><span className="font-semibold">Vendor Management:</span> End-to-end coordination and governance of multiple staffing vendors to ensure quality, consistency, and compliance.</li>
                <li><span className="font-semibold">Talent Procurement:</span> Efficient sourcing and onboarding of contingent, contract, and temporary staff through standardized processes and technology.</li>
                <li><span className="font-semibold">Cost Optimization:</span> Transparent pricing, spend analytics, and performance metrics to drive savings and efficiency.</li>
                <li><span className="font-semibold">Compliance and Risk Management:</span> Ensuring adherence to labor laws, contract policies, and organizational standards.</li>
                <li><span className="font-semibold">Technology Enablement:</span> Integration of leading Vendor Management Systems (VMS) for better visibility, reporting, and process automation.</li>
              </ul>
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mt-4">
                Our MSP model brings together strategic oversight, operational excellence, and advanced analytics to help businesses achieve greater agility, cost savings, and workforce scalability.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={'/MSP.png'}
                alt="Managed Services Diagram"
                className="w-full max-w-md h-auto rounded-2xl shadow-xl object-contain bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default ManagedServiceProvider;


