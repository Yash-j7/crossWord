import { useState, useEffect } from "react";
import {
  ChevronDown,
  Users,
  Globe,
  MessageCircle,
  Monitor,
  Cloud,
} from "lucide-react";
import Cross from "./Cross";

import cloudGif from "./assets/cloud.gif";
import computerGif from "./assets/computer.gif";
import conversationGif from "./assets/conversation.gif";
import domainsGif from "./assets/domains.gif";
import internetGif from "./assets/internet.gif";
import bgImg from "./assets/bg.jpg";

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

  return (
    <>
      {/* Hero Section with Neutral Background */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden"
      >
        {/* Removed background overlay */}
        <div className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-darkbrown mb-6 tracking-tight leading-tight">
              <span>CROSSWORD</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-brown-DEFAULT">
                STAFFING SOLUTIONS
              </span>
            </h1>
          </div>

          {/* Bridging the Gap Phrase */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brown-DEFAULT tracking-wide uppercase">
              BRIDGING THE GAP BETWEEN PEOPLE AND OPPORTUNITIES
            </h2>
          </div>

          {/* Crossword-style arrangement */}
          {/* <div className="mb-10 flex flex-col items-center justify-center">
            <pre className="font-mono text-base sm:text-lg md:text-xl text-darkbrown leading-tight whitespace-pre text-center">
{`P R O J E C T
E
O
P
L
E
T
R
A
T
E
G
Y
E C H N O L O G Y
P R O C    S S

P R O J E C T
E
O
P
L
E
T
R
A
T
E
G
Y
E C H N O L O G Y
P R O C    S S`}
            </pre>
          </div> */}

          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-brown-DEFAULT leading-relaxed mb-8 font-light">
              A diversity supplier with global presence specializing in business
              services with the perfect blend of
              <span className="font-semibold text-darkbrown">
                {" "}
                talent, technology, and relentless commitment{" "}
              </span>
              to customer success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-sand-light/80 backdrop-blur-sm rounded-2xl p-6 border border-sand-dark hover:bg-sand-light transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl font-bold text-darkbrown mb-2">
                  {years}+
                </div>
                <div className="text-brown-DEFAULT text-sm">
                  Years Experience
                </div>
              </div>
              <div className="bg-sand-light/80 backdrop-blur-sm rounded-2xl p-6 border border-sand-dark hover:bg-sand-light transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl font-bold text-darkbrown mb-2">
                  {experts}+
                </div>
                <div className="text-brown-DEFAULT text-sm">
                  Expert Professionals
                </div>
              </div>
              <div className="bg-sand-light/80 backdrop-blur-sm rounded-2xl p-6 border border-sand-dark hover:bg-sand-light transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl font-bold text-darkbrown mb-2">
                  {clients}+
                </div>
                <div className="text-brown-DEFAULT text-sm">Global Clients</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-sand-dark text-sand-light px-8 py-4 rounded-full font-semibold text-lg hover:bg-brown-DEFAULT transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Get Started
            </button>
            <button className="border-2 border-sand-dark text-darkbrown px-8 py-4 rounded-full font-semibold text-lg hover:bg-sand-dark hover:text-sand-light transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-brown-DEFAULT/70" />
          </div>
        </div>
      </section>

      {/* Crossword Section */}
      {/* <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkbrown">
              Our <span className="text-brown-DEFAULT">Core Values</span>
            </h2>
            <p className="text-lg mt-5 sm:text-xl text-brown-DEFAULT max-w-3xl mx-auto leading-relaxed">
              Connecting People, Projects, and Solutions{" "}
            </p>
          </div>
          <Cross />
        </div>
      </section> */}

      {/* Services Section */}
      <section className="pt-8 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-darkbrown mb-6">
              Our <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our comprehensive suite of services can transform
              your business operations and drive sustainable growth.
            </p>
          </div>

          <div className="space-y-24">
            {gifSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div
                  key={idx}
                  id={`section-${idx}`}
                  className={`flex flex-col ${
                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12 lg:gap-16`}
                >
                  {/* Image Section */}
                  <div className="flex-1 lg:max-w-lg">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-sand-dark to-brown-light rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <img
                        src={section.gif}
                        alt={section.alt}
                        className="relative w-full h-80 object-cover rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 max-w-2xl">
                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-100 rounded-2xl">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-darkbrown">
                          {section.alt}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {section.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {section.features.map((feature, featureIdx) => (
                          <div
                            key={featureIdx}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-600 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="bg-darkbrown text-sand-light px-6 py-3 rounded-xl font-semibold hover:bg-brown-DEFAULT transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brown-DEFAULT">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-darkbrown mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-darkbrown mb-8 leading-relaxed">
            Join hundreds of satisfied clients who trust Crossword Staffing
            Solutions for their business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sand-dark text-sand-light px-8 py-4 rounded-full font-semibold text-lg hover:bg-brown-DEFAULT transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Your Journey
            </button>
            <button className="border-2 border-sand-dark text-darkbrown px-8 py-4 rounded-full font-semibold text-lg hover:bg-sand-dark hover:text-sand-light transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
