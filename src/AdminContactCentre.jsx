import React from "react";

const AdminContactCentre = () => (
  <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4">
    <div className="relative text-sand-light py-12 sm:py-20 px-2 sm:px-4 md:px-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-darkbrown">
          Administrative & <span className="text-brown-DEFAULT">Contact Centre</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed text-black bold italic">
          Administrative, Clerical & Professional Recruitment
        </p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16">
      <section className="py-8 sm:py-16">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown mb-4 sm:mb-6 tracking-tight">Why Administrative & Contact Centre?</h2>
          <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mb-4 sm:mb-6">
            Improve office efficiency with temporary, temp-to-hire or direct hire administrative help. Or find the professionals you need to lead your team or provide specialized expertise.
          </p>
          <p className="text-base sm:text-lg text-darkbrown leading-relaxed mb-4 sm:mb-6">
            As the first point of contact for all customer interaction, there’s no denying that call centers are imperative for a seamless customer experience. 80% of consumers prefer talking to an agent on the phone, making call centers an integral part of business.
          </p>
        </div>
      </section>
      <section className="py-8 sm:py-12">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-darkbrown mb-4 sm:mb-8">Administrative & Professional Positions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <ul className="space-y-1 sm:space-y-2 text-brown-DEFAULT text-base sm:text-lg font-medium">
              <li>Administrative Staff</li>
              <li>Data Entry</li>
              <li>Office Managers</li>
              <li>Marketing Professionals</li>
              <li>Payroll Professionals</li>
              <li>Business Consultants</li>
              <li>Operations Management</li>
              <li>Benefits Enrollment Specialist</li>
            </ul>
            <ul className="space-y-1 sm:space-y-2 text-darkbrown text-base sm:text-lg font-medium">
              <li>General Office Staff</li>
              <li>Administrative Assistants</li>
              <li>Executive Assistants</li>
              <li>Human Resources Professionals</li>
              <li>IT Professionals</li>
              <li>Production Management</li>
              <li>Procurement Professionals</li>
              <li>Collections Assistants</li>
            </ul>
            <ul className="space-y-1 sm:space-y-2 text-brown-DEFAULT text-base sm:text-lg font-medium">
              <li>Accounting & Finance Professionals</li>
              <li>Contact Center Staffing Solutions</li>
              <li>Customer Support Specialists</li>
              <li>Inbound Sales Specialists</li>
              <li>Third Party Verification Staff</li>
              <li>Inbound Call Center Agent</li>
              <li>Call Center Supervisor</li>
              <li>Benefits Of Working with A Call Center Staffing Agency</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-12">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-darkbrown mb-4 sm:mb-8">Contact Center Positions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <ul className="space-y-1 sm:space-y-2 text-brown-DEFAULT text-base sm:text-lg font-medium">
              <li>Help Desk Staff</li>
              <li>Outbound Sales Specialists</li>
              <li>Technical Support Specialist</li>
              <li>Outbound Call Center Agent</li>
              <li>Call Center Trainer</li>
              <li>Reduce Hiring Costs</li>
              <li>Increase Retention Rates</li>
            </ul>
            <ul className="space-y-1 sm:space-y-2 text-darkbrown text-base sm:text-lg font-medium">
              <li>Inbound Call Center Agent</li>
              <li>Call Center Supervisor</li>
              <li>Call Center Staffing Agency</li>
              <li>Retention Rates</li>
              <li>Screening Candidates</li>
              <li>Skills Assessment</li>
              <li>Customer Experience</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default AdminContactCentre; 