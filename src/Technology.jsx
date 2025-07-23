import React from "react";
import { useState, useEffect } from "react";
import technologyImg from "./assets/tech2.jpg";
import tech from "./assets/tech.png";

const Technology = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 min-h-screen">
      {/* Enhanced Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={technologyImg}
            alt="Technology"
            className="w-full h-full object-cover object-center"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          {/* Enhanced overlay with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-purple-900/30 to-teal-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-black/20 to-transparent animate-pulse"></div>
        </div>
        
        {/* Enhanced floating elements with better positioning */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/25 to-purple-500/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-br from-emerald-400/25 to-teal-400/25 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-2/3 right-1/4 w-28 h-28 bg-gradient-to-br from-pink-400/20 to-violet-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          
          {/* Geometric shapes for modern touch */}
          <div className="absolute top-1/4 right-1/3 w-16 h-16 border border-white/10 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border border-blue-400/20 rotate-12 animate-pulse"></div>
        </div>
        
        {/* Enhanced content overlay */}
        <div className="relative z-20 max-w-8xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-10">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">
                  Innovation • Excellence • Growth
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-shimmer">
                Technology
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl mt-2">
                Solutions
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/95 drop-shadow-xl">
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Empowering Digital Transformation
              </span>
            </div>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 leading-relaxed drop-shadow-lg">
              Building exceptional technology teams is essential for achieving measurable results in today's rapidly evolving digital landscape.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md max-w-4xl mx-auto">
              We connect you with certified experts and cultivate a digital-first, agile culture that drives innovation and creates lasting consumer value through cutting-edge IT solutions.
            </p>
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 overflow-hidden backdrop-blur-sm border border-white/20">
              <span className="relative z-10 flex items-center gap-3">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button className="group px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
              Learn More
            </button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">500+</div>
              <div className="text-white/80 font-medium">Expert Specialists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">98%</div>
              <div className="text-white/80 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">50+</div>
              <div className="text-white/80 font-medium">Technologies</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-white/80 rounded-full mt-2 animate-bounce"></div>
          </div>
          <div className="text-white/60 text-xs mt-2 font-medium tracking-widest">SCROLL</div>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <section className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 items-center">
          {/* Enhanced image section */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-700 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
              <img 
                src={tech} 
                alt="Technology Innovation" 
                className="relative rounded-3xl shadow-2xl w-full max-w-lg object-cover transform transition-all duration-500 hover:scale-105 hover:rotate-1" 
              />
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                AI Powered
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse delay-500">
                24/7 Support
              </div>
            </div>
          </div>
          
          {/* Enhanced text content */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-6 bg-gradient-to-br from-white/40 to-gray-50/40 rounded-3xl blur-sm"></div>
            <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 border border-gray-200/60">
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Why Choose Us?
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8 tracking-tight leading-tight">
                  Technology Excellence
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg font-medium">
                    We deliver comprehensive, secure IT services tailored to your unique business requirements, optimizing operations while enabling remote workforce productivity.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg font-medium">
                    Gain competitive advantage through our global network of certified technology experts who champion digital transformation and agile methodologies.
                  </p>
                </div>
              </div>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600 font-medium">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Key Functional Areas */}
        <section className="py-16 sm:py-20">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-white/60 to-gray-50/60 rounded-3xl blur-sm"></div>
            <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 border border-gray-200/60">
              <div className="text-center mb-16">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  Our Expertise
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 tracking-tight">
                  Key Functional Areas
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive technology solutions across all major domains
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {[
                  {
                    title: "Planning & Design",
                    icon: "🎯",
                    color: "blue",
                    items: ["Development & Deployment", "Testing & Quality Analysis", "Mobile, Web & Cloud Solutions", "Infrastructure Administration", "Data Management", "Enterprise Solutions", "Database Administration"]
                  },
                  {
                    title: "Product & Project Management",
                    icon: "📋",
                    color: "purple",
                    items: ["Agile / Scrum Masters", "Product Managers", "Program & Project Managers", "Enterprise Architects", "Business Analysts", "System Analysts"]
                  },
                  {
                    title: "Application Innovation",
                    icon: "🚀",
                    color: "emerald",
                    items: ["Architects", "Designers & Developers", "Programmers", "Full Stack Developers", "DevOps Engineers", "Machine Learning Specialists"]
                  },
                  {
                    title: "Data & Analytics",
                    icon: "📊",
                    color: "amber",
                    items: ["Data Architects", "Data Engineers", "ETL Experts", "Data Scientists", "BI Specialists", "Data Visualization Experts", "Report Developers"]
                  },
                  {
                    title: "Cloud & Cybersecurity",
                    icon: "🔒",
                    color: "red",
                    items: ["Network Engineers", "System Engineers", "Security Engineers", "Migration & Support", "Virtualization Engineers", "Data Center Operators", "Cloud Migration Specialists"]
                  },
                  {
                    title: "User Experience",
                    icon: "🎨",
                    color: "cyan",
                    items: ["Creative Directors", "Art Directors", "UX Experts", "UI Researchers", "UI/UX Designers", "Usability Testers"]
                  }
                ].map((area, index) => (
                  <div key={index} className="group relative">
                    <div className={`bg-gradient-to-br from-${area.color}-50 to-${area.color}-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-${area.color}-200/50 hover:border-${area.color}-300 transform hover:-translate-y-2`}>
                      <div className="flex items-center mb-6">
                        <div className={`text-2xl mr-3 p-2 bg-${area.color}-100 rounded-lg`}>
                          {area.icon}
                        </div>
                        <h4 className={`text-lg font-bold text-${area.color}-900 group-hover:text-${area.color}-700 transition-colors leading-tight`}>
                          {area.title}
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {area.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                            <span className={`w-2 h-2 bg-${area.color}-400 rounded-full mr-3 flex-shrink-0`}></span>
                            <span className={`text-${area.color}-800 text-sm font-medium`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced ERP & CRM Section */}
              <div className="mt-12 group">
                <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/50 hover:border-slate-300">
                  <div className="flex items-center mb-6">
                    <div className="text-2xl mr-3 p-2 bg-slate-100 rounded-lg">
                      ⚙️
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                      ERP & CRM Platform Specialists
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {["SAP", "Oracle Applications", "Microsoft Dynamics", "Salesforce"].map((platform, index) => (
                      <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="w-3 h-3 bg-slate-400 rounded-full mr-3"></span>
                        <span className="text-slate-800 text-sm font-medium">{platform}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New CTA Section */}
        <section className="py-20 text-center">
          <div className="bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have accelerated their digital transformation with our expert technology teams.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              Start Your Journey
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

// Add custom CSS for animations
const customStyles = `
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
  
  .animate-shimmer {
    animation: shimmer 2s linear infinite;
    background-image: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    background-size: 200px 100%;
    background-repeat: no-repeat;
  }
  
  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }
`;

export default Technology;
