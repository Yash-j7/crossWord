import { useState, useEffect } from "react";
import {
  ChevronDown,
  Users,
  Globe,
  MessageCircle,
  Monitor,
  Cloud,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Shield,
} from "lucide-react";
import Cross from "./Cross";

import cloudGif from "./assets/cloud.gif";
import computerGif from "./assets/computer.gif";
import conversationGif from "./assets/conversation.gif";
import domainsGif from "./assets/domains.gif";
import internetGif from "./assets/internet.gif";
import bgImg from "./assets/bg.jpg";
import { Link } from "react-router-dom";

const gifSections = [
  {
    gif: cloudGif,
    alt: "Cloud Solutions",
    icon: Cloud,
    desc: "Leverage cutting-edge cloud technologies to scale your business operations efficiently. Our cloud solutions provide seamless integration, enhanced security, and unlimited scalability for modern enterprises.",
    features: [
      "Scalable Infrastructure",
      "Enhanced Security",
      "Cost Optimization",
      "24/7 Support",
    ],
  },
  {
    gif: computerGif,
    alt: "Technology Integration",
    icon: Monitor,
    desc: "Transform your business with our comprehensive technology integration services. We bridge the gap between traditional processes and modern digital solutions.",
    features: [
      "System Integration",
      "Digital Transformation",
      "Automation",
      "Performance Optimization",
    ],
  },
  {
    gif: conversationGif,
    alt: "Expert Consultation",
    icon: MessageCircle,
    desc: "Connect with our team of industry experts who provide strategic guidance and innovative solutions tailored to your unique business challenges.",
    features: [
      "Strategic Planning",
      "Industry Expertise",
      "Custom Solutions",
      "Ongoing Support",
    ],
  },
  {
    gif: domainsGif,
    alt: "Domain Expertise",
    icon: Users,
    desc: "Our specialized domain experts bring deep industry knowledge across various sectors, ensuring you receive the most relevant and effective solutions.",
    features: [
      "Multi-Industry Experience",
      "Specialized Knowledge",
      "Best Practices",
      "Proven Results",
    ],
  },
  {
    gif: internetGif,
    alt: "Global Connectivity",
    icon: Globe,
    desc: "Expand your reach with our global network of professionals and resources. We connect businesses worldwide with the right talent and solutions.",
    features: [
      "Global Network",
      "Cross-Cultural Expertise",
      "Time Zone Coverage",
      "Local Understanding",
    ],
  },
];

function useCounter(target, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    let raf;
    function update() {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    }
    update();
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return count;
}

function Home() {
  const years = useCounter(5, 2200);
  const experts = useCounter(50, 2200);
  const clients = useCounter(30, 2200);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    window.scrollBy({
      top: 400, // scroll down 200px
      behavior: "smooth" // smooth animation
    });
  };

  return (
    <>
      {/* Hero Section with Neutral Background */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-2 sm:px-4 touch-pan-y"
      >
        {/* Removed background overlay */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto text-center">
          <div className="mb-8 sm:mb-12 animate-fade-in-up">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-darkbrown mb-4 sm:mb-6 tracking-tight leading-tight">
              <span>CROSSWORD</span>
              <br />
              <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-brown-DEFAULT">
                STAFFING SOLUTIONS
              </span>
            </h1>
          </div>

          {/* Bridging the Gap Phrase */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brown-DEFAULT tracking-wide uppercase px-2">
              BRIDGING THE GAP BETWEEN PEOPLE AND OPPORTUNITIES
            </h2>
          </div>

          <div className="mb-12 sm:mb-16 max-w-5xl mx-auto animate-fade-in-up animation-delay-400 px-2">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-brown-DEFAULT leading-relaxed mb-8 sm:mb-10 font-light">
              A diversity supplier with global presence specializing in business
              services with the perfect blend of
              <span className="font-semibold text-darkbrown">
                {" "}
                talent, technology, and relentless commitment{" "}
              </span>
              to customer success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div className="group bg-sand-light/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-sand-dark/50 hover:bg-sand-light/100 transition-all duration-500 hover:transform hover:scale-105 sm:hover:scale-110 hover:shadow-2xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-darkbrown mb-2 sm:mb-3 group-hover:text-brown-DEFAULT transition-colors">
                  {years}+
                </div>
                <div className="text-brown-DEFAULT text-sm sm:text-base font-medium">
                  Years Experience
                </div>
              </div>
              <div className="group bg-sand-light/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-sand-dark/50 hover:bg-sand-light/100 transition-all duration-500 hover:transform hover:scale-105 sm:hover:scale-110 hover:shadow-2xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-darkbrown mb-2 sm:mb-3 group-hover:text-brown-DEFAULT transition-colors">
                  {experts}+
                </div>
                <div className="text-brown-DEFAULT text-sm sm:text-base font-medium">
                  Expert Professionals
                </div>
              </div>
              <div className="group bg-sand-light/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-sand-dark/50 hover:bg-sand-light/100 transition-all duration-500 hover:transform hover:scale-105 sm:hover:scale-110 hover:shadow-2xl sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-darkbrown mb-2 sm:mb-3 group-hover:text-brown-DEFAULT transition-colors">
                  {clients}+
                </div>
                <div className="text-brown-DEFAULT text-sm sm:text-base font-medium">Global Clients</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 animate-fade-in-up animation-delay-600 px-2">
            <Link to="/contact">
            <button className="group bg-sand-dark text-sand-light px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-lg sm:text-xl hover:bg-brown-DEFAULT active:bg-brown-DEFAULT transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 active:scale-95 shadow-2xl hover:shadow-3xl w-full sm:w-auto min-h-[48px] touch-manipulation">
              Get Started
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline group-hover:rotate-180 transition-transform duration-300" />
            </button>
            </Link>
            <button onClick={handleScroll} className="group border-2 border-sand-dark text-darkbrown px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-lg sm:text-xl hover:bg-sand-dark hover:text-sand-light active:bg-sand-dark active:text-sand-light transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl w-full sm:w-auto min-h-[48px] touch-manipulation">
              Learn More
            </button>
          </div>

          <div className="animate-bounce animate-infinite-slow">
            <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-brown-DEFAULT/70" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        data-animate
        className="pt-12 sm:pt-16 pb-16 sm:pb-24 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-4 sm:right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-br from-blue-100/30 to-brown-light/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-4 sm:left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-tr from-brown-light/30 to-blue-100/30 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 
              
            `}
          >
            {/* ${
              isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200/50 mb-4 sm:mb-6">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#D6A99D] mr-2" />
              <span className="text-xs sm:text-sm font-medium text-darkbrown">Industry-Leading Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-darkbrown mb-6 sm:mb-8 px-2">
              Our <span className="text-[#D6A99D]">Expertise</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
              Discover how our comprehensive suite of services can transform
              your business operations and drive sustainable growth.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed px-2">
              With years of experience in the staffing industry, we specialize
              in delivering{" "}
              <span className="font-semibold text-darkbrown bg-sand-light/50 px-1 sm:px-2 py-1 rounded text-sm sm:text-base">
                tailored workforce solutions
              </span>{" "}
              that meet the unique needs of businesses across diverse
              industries—including
              <span className="text-[#D6A99D] font-medium bg-blue-50/50 px-1 sm:px-2 py-1 rounded ml-1 text-sm sm:text-base">
                {" "}
                IT, Pharma, Life Sciences, Manufacturing, and Consulting
              </span>
              . Our expertise lies in bridging the gap between top talent and
              leading organizations, ensuring every placement drives long-term
              success.
            </p>
          </div>

          <div className="text-center mb-12 sm:mb-16 lg:mb-20 bg-sand-light/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-blue-100">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-darkbrown mb-4 sm:mb-6 px-2">
              Our <span className="text-[#D6A99D]">Approach</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 px-2">
              Built on precision, integrity, and a deep understanding of the
              industries we serve, our approach focuses on creating lasting
              partnerships that benefit both businesses and professionals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {[
                {
                  title: "People-First Philosophy",
                  desc: "We go beyond matching resumes to roles—we understand culture, values, and long-term goals.",
                  icon: Users,
                },
                {
                  title: "Technology Integration",
                  desc: "Blending advanced technology with market insights for precise talent matching.",
                  icon: Monitor,
                },
                {
                  title: "Human Touch",
                  desc: "Every placement is crafted with personal attention to drive growth and innovation.",
                  icon: MessageCircle,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group text-center hover:transform hover:scale-105 transition-all duration-300 p-4"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-[#D6A99D] rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-sand-light" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-darkbrown mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {gifSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div
                  key={idx}
                  id={`section-${idx}`}
                  className={`flex flex-col ${
                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24 animate-fade-in-up animation-delay-${idx * 100}`}
                >
                  {/* Image Section */}
                  <div className="flex-1 lg:max-w-xl w-full">
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-r from-sand-dark to-brown-light rounded-2xl sm:rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                        <img
                          src={section.gif}
                          alt={section.alt}
                          className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-all duration-700 group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent group-hover:from-blue-900/40"></div>
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex items-center gap-2 sm:gap-3">
                          <div className="p-2 sm:p-3 bg-sand-light/90 backdrop-blur-sm rounded-xl sm:rounded-2xl">
                            <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#D6A99D]" />
                          </div>
                          <span className="text-sand-light font-semibold text-sm sm:text-lg">{section.alt}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 max-w-3xl w-full px-2 sm:px-0">
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div className="p-3 sm:p-4 bg-blue-100/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-blue-200/50">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#D6A99D]" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-darkbrown">
                          {section.alt}
                        </h3>
                      </div>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-light">
                        {section.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {section.features.map((feature, featureIdx) => (
                          <div
                            key={featureIdx}
                            className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-sand-light/50 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-sand-dark/20 hover:bg-sand-light/80 transition-all duration-300 hover:transform hover:translate-x-1 sm:hover:translate-x-2"
                          >
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                            <span className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg group-hover:text-[#D6A99D] transition-colors duration-200">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* <button className="group bg-darkbrown text-sand-light px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-brown-DEFAULT active:bg-brown-DEFAULT transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 active:scale-95 shadow-xl hover:shadow-2xl relative overflow-hidden w-full sm:w-auto min-h-[44px] touch-manipulation">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-sand-light/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </button> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        data-animate
        className="py-16 sm:py-20 lg:py-24 px-2 sm:px-4 lg:px-8 bg-brown-DEFAULT relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-gradient-to-br from-sand-dark/30 to-brown-light/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-gradient-to-tr from-brown-light/30 to-sand-dark/30 rounded-full blur-3xl"></div>
        </div>
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-sand-light/50 border border-sand-dark/50 mb-6 sm:mb-8">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-darkbrown mr-2" />
            <span className="text-xs sm:text-sm font-medium text-darkbrown">Ready to Scale Your Business?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-darkbrown mb-6 sm:mb-8 px-2">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-darkbrown mb-8 sm:mb-10 leading-relaxed font-light px-2">
            Join hundreds of satisfied clients who trust Crossword Staffing
            Solutions for their business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2">
            <Link to="/careers">
            <button className="group bg-sand-dark text-sand-light px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-lg sm:text-xl hover:bg-brown-DEFAULT active:bg-brown-DEFAULT transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 active:scale-95 shadow-2xl hover:shadow-3xl relative overflow-hidden w-full sm:w-auto min-h-[48px] touch-manipulation">
              Start Your Journey
            </button>
            </Link>
            <Link to="/contact">
            <button className="group border-2 sm:border-3 border-sand-dark text-darkbrown px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-lg sm:text-xl hover:bg-sand-dark hover:text-sand-light active:bg-sand-dark active:text-sand-light transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 active:scale-95 shadow-xl hover:shadow-2xl w-full sm:w-auto min-h-[48px] touch-manipulation">
              Contact Us Today
            </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animate-infinite-slow {
          animation: bounce 2s infinite;
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation: fade-in-up 0.4s ease-out forwards;
          }
        }
        
        /* Touch-friendly hover states */
        @media (hover: none) {
          .group:hover .group-hover\\:scale-105 {
            transform: scale(1.02);
          }
          .group:hover .group-hover\\:scale-110 {
            transform: scale(1.05);
          }
          .group:hover .group-hover\\:translate-x-1 {
            transform: translateX(0.25rem);
          }
          .group:hover .group-hover\\:translate-x-2 {
            transform: translateX(0.5rem);
          }
        }
        
        /* Smooth scrolling for mobile */
        @media (max-width: 768px) {
          html {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Prevent horizontal scroll on mobile */
          body {
            overflow-x: hidden;
          }
          
          /* Better touch targets */
          button, a, [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Performance optimizations for mobile */
        @media (max-width: 768px) {
          .animate-fade-in-up {
            will-change: transform, opacity;
          }
          
          .group {
            will-change: transform;
          }
        }
      `}</style>
    </>
  );
}

export default Home;