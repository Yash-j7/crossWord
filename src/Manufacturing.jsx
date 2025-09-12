import React from "react";
import manufacturingImage from './assets/manufacturing.jpg';

const Manufacturing = () => (
  <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4">
    <div className="relative text-sand-light py-12 sm:py-20 px-2 sm:px-4 md:px-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-darkbrown">
          <span className="text-brown-DEFAULT">Manufacturing</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed text-black bold italic">
          Powering the future of manufacturing with smart, skilled talent.
        </p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16">
      <section className="py-8 sm:py-16">
        <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 border border-sand-dark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown mb-4 sm:mb-6 tracking-tight">Why Manufacturing?</h2> */}
              <p className="text-base sm:text-lg text-brown-DEFAULT leading-relaxed mb-4 sm:mb-6">
                Manufacturing is entering a new era — driven by automation, smart factories, and global sourcing. As organizations digitize operations and embrace Industry 4.0, the need for agile, cross-functional talent is critical. Backed by industry experience, Crossword has supported global leaders across industrial engineering, consumer goods, home improvement, logistics, and supply chain operations. From modernizing plant floors to streamlining global production, we help build future-ready workforces that power the next generation of manufacturing.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={manufacturingImage} 
                alt="Manufacturing Industry" 
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
              <li>Industrial Engineering</li>
              <li>Production Management</li>
              <li>Quality Control</li>
              <li>Process Engineering</li>
              <li>Manufacturing Engineering</li>
              <li>Plant Operations</li>
            </ul>
            <ul className="space-y-1 sm:space-y-2 text-darkbrown text-base sm:text-lg font-medium">
              <li>Supply Chain Management</li>
              <li>Logistics</li>
              <li>Procurement</li>
              <li>Inventory Management</li>
              <li>Lean Manufacturing</li>
              <li>Six Sigma</li>
              <li>Automation</li>
              <li>Robotics</li>
              <li>Industry 4.0</li>
              <li>Smart Manufacturing</li>
              <li>Digital Transformation</li>
              <li>IoT Implementation</li>
            </ul>
            <ul className="space-y-1 sm:space-y-2 text-brown-DEFAULT text-base sm:text-lg font-medium">
              <li>Consumer Goods</li>
              <li>Home Improvement</li>
              <li>Automotive</li>
              <li>Aerospace</li>
              <li>Electronics</li>
              <li>Food & Beverage</li>
              <li>Pharmaceutical Manufacturing</li>
              <li>Chemical Processing</li>
              <li>Textile Manufacturing</li>
              <li>Metal Fabrication</li>
              <li>Plastics Manufacturing</li>
              <li>Packaging</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Manufacturing;
