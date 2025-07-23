import React, { useEffect } from "react";
import respect from "./assets/respect.jpeg";
import excellence from "./assets/excellence.jpeg";
import integrity from "./assets/integrity.jpg";
import results from "./assets/results.jpg";

const About = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Custom smooth scroll for a more professional feel
        setTimeout(() => {
          const navbarOffset = 96; // Approx height of navbar (adjust if needed)
          const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
          const targetY = elementTop - navbarOffset;
          const startY = window.pageYOffset;
          const distance = targetY - startY;
          const duration = 1200; // ms (was 600)
          let startTime = null;

          function scrollStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = progress < 0.5
              ? 2 * progress * progress
              : -1 + (4 - 2 * progress) * progress;
            window.scrollTo(0, startY + distance * ease);
            if (progress < 1) {
              window.requestAnimationFrame(scrollStep);
            }
          }
          window.requestAnimationFrame(scrollStep);
        }, 250); // Slightly longer delay for layout
      }
    }
  }, []);

  return (
    <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4">
      {/* Hero Section */}
      <div id="about-crossword" className="relative text-sand-light py-12 sm:py-20 px-2 sm:px-4 md:px-16 scroll-mt-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-darkbrown">
            About <span className="text-brown-DEFAULT">Crossword</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed text-black bold italic">
            Excellence is Our Second Nature, the first is exceeding expectations
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16">
        {/* Crossword Story */}
        <section className="py-8 sm:py-20">
          <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 relative overflow-hidden border border-sand-dark">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sand-dark via-brown-DEFAULT to-sand-dark"></div>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-darkbrown mb-4 sm:mb-6 tracking-tight">
                Our Story
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-sand-dark to-brown-DEFAULT rounded-full mb-6 sm:mb-8"></div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-xl text-brown-DEFAULT leading-relaxed mb-4 sm:mb-8 font-medium">
                Crossword is a diversity supplier with global presence specializing in business services with the blend of talent, technology, and a relentless commitment for the success of our customers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-darkbrown leading-relaxed">
                <div className="space-y-4 sm:space-y-6">
                  <p>For years, we have been providing a generous repository of manpower and consistent availability of external subject matter experts with the best speed and quality.</p>
                  <p>We understand how critical talent is to every organization, as well as how the world of work and the workplace is evolving.</p>
                  <p>Crossword offers the most effective means to help you acquire, manage and optimize the right talent whenever you need it.</p>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <p>Our goal is to meet expectations of excellence – those of our customers, our employees, our candidates and those of our community.</p>
                  <p>Combining the depth of our multidisciplinary team of professionals and boundless innovation with our "customer-centric" approach to service, we have the right resources to help companies of all sizes cultivate real business value at the right price.</p>
                  <p>We further differentiate ourselves with our agile engagement model and proven methodology which attracts premier talent and helps our customers achieve their staffing goals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crossword Way */}
        <section id="crossword-way" className="py-8 sm:py-20 scroll-mt-24">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-darkbrown mb-4 sm:mb-6 tracking-tight">
              The Crossword Way
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-sand-dark to-brown-DEFAULT rounded-full mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-xl text-brown-DEFAULT max-w-3xl mx-auto leading-relaxed">
              Our core values guide every decision and interaction, creating a foundation for excellence and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16">
            {/* Respect Card */}
            <div className="group bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-sand-dark">
              <div className="text-center">
                <div className="relative mb-4 sm:mb-6">
                  <img 
                    src={respect} 
                    alt="Respect" 
                    className="w-20 sm:w-32 h-20 sm:h-32 object-cover rounded-full mx-auto border-4 border-sand-light shadow-lg group-hover:border-sand-dark transition-colors duration-300" 
                  />
                  <div className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-sand-dark rounded-full flex items-center justify-center">
                    <span className="text-sand-light font-bold text-xs sm:text-sm">R</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg sm:text-2xl text-darkbrown mb-2 sm:mb-4">Respect</h3>
                <p className="text-brown-DEFAULT leading-relaxed text-sm sm:text-base">
                  Our employees, clients, consultants, and communities are our foundation. Together we create an atmosphere that fosters teamwork, excellence, leadership, and transparency.
                </p>
              </div>
            </div>
            {/* Excellence Card */}
            <div className="group bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-brown-DEFAULT">
              <div className="text-center">
                <div className="relative mb-4 sm:mb-6">
                  <img 
                    src={excellence} 
                    alt="Excellence" 
                    className="w-20 sm:w-32 h-20 sm:h-32 object-cover rounded-full mx-auto border-4 border-sand-light shadow-lg group-hover:border-brown-DEFAULT transition-colors duration-300" 
                  />
                  <div className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-brown-DEFAULT rounded-full flex items-center justify-center">
                    <span className="text-sand-light font-bold text-xs sm:text-sm">E</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg sm:text-2xl text-brown-DEFAULT mb-2 sm:mb-4">Excellence</h3>
                <p className="text-darkbrown leading-relaxed text-sm sm:text-base">
                  We pursue excellence in everything we do. We believe that sustainable success is achieved by mastering the small things and approaching work with passion for innovation.
                </p>
              </div>
            </div>
            {/* Integrity Card */}
            <div className="group bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-sand-dark">
              <div className="text-center">
                <div className="relative mb-4 sm:mb-6">
                  <img 
                    src={integrity} 
                    alt="Integrity" 
                    className="w-20 sm:w-32 h-20 sm:h-32 object-cover rounded-full mx-auto border-4 border-sand-light shadow-lg group-hover:border-sand-dark transition-colors duration-300" 
                  />
                  <div className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-sand-dark rounded-full flex items-center justify-center">
                    <span className="text-sand-light font-bold text-xs sm:text-sm">I</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg sm:text-2xl text-darkbrown mb-2 sm:mb-4">Integrity</h3>
                <p className="text-brown-DEFAULT leading-relaxed text-sm sm:text-base">
                  As a unit and as individuals, we share responsibility for preserving the trust of our partners. We uphold the highest ethical standards and never compromise our values.
                </p>
              </div>
            </div>
            {/* Results Card */}
            <div className="group bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-brown-DEFAULT">
              <div className="text-center">
                <div className="relative mb-4 sm:mb-6">
                  <img 
                    src={results} 
                    alt="Results" 
                    className="w-20 sm:w-32 h-20 sm:h-32 object-cover rounded-full mx-auto border-4 border-sand-light shadow-lg group-hover:border-brown-DEFAULT transition-colors duration-300" 
                  />
                  <div className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-brown-DEFAULT rounded-full flex items-center justify-center">
                    <span className="text-sand-light font-bold text-xs sm:text-sm">R</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg sm:text-2xl text-brown-DEFAULT mb-2 sm:mb-4">Results</h3>
                <p className="text-darkbrown leading-relaxed text-sm sm:text-base">
                  Our success is defined by delivering optimal results. We focus on providing strategic solutions that are valuable to the specific needs of our partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission - styled like other sections */}
        <section id="mission" className="py-8 sm:py-20 scroll-mt-24">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-darkbrown mb-4 sm:mb-6 tracking-tight">
              Our Mission
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-sand-dark to-brown-DEFAULT rounded-full mx-auto mb-4 sm:mb-6"></div>
          </div>
          <div className="bg-sand-light rounded-3xl p-4 sm:p-10 md:p-16 text-center border border-sand-dark">
            <div className="space-y-4 sm:space-y-6 text-brown-DEFAULT leading-relaxed max-w-4xl mx-auto">
              <p className="text-base sm:text-lg">
                Crossword is all about enabling growth and inspiring success. We help drive success for both people and companies by helping them achieve positive growth through building strong relationships and developing a deep understanding of the people we work with.
              </p>
              <p className="text-base sm:text-lg">
                Our corporate culture is one of integrity and loyalty. These core values are evident in all that we do, ensuring that your experience with our industry experts and recruitment specialists will be a positive one.
              </p>
            </div>
          </div>
        </section>

        {/* Crossword Cares */}
        <section id="crossword-cares" className="py-8 sm:py-20 scroll-mt-24">
          <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 relative overflow-hidden border border-sand-dark">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sand-dark via-brown-DEFAULT to-sand-dark"></div>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-darkbrown mb-4 sm:mb-6 tracking-tight">
                Crossword <span className="text-brown-DEFAULT">Cares</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-sand-dark to-brown-DEFAULT rounded-full mb-4 sm:mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 text-darkbrown leading-relaxed">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg">
                  Our purpose is to positively impact the lives of our employees, clients, consultants, and the communities in which we operate. This purpose allows us to foster a company culture that is collaborative, celebrates the individual and the team, and elevates our commitment to the community.
                </p>
                <p className="text-base sm:text-lg">
                  We thrive to make a difference. It takes each of us to make a difference for all of us. Our efforts are to inspire and connect people, invest in opportunities that accelerate problem solving, and empower people to work toward eradicating poverty, unemployment, climate change, hunger and more.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg">
                  We are driven by the belief that sustainable, meaningful employment has the power to change the world. We take an active role in promoting inclusive workplaces that foster innovation, enable high performance and allow everyone to achieve their full potential.
                </p>
                <p className="text-base sm:text-lg">
                  We believe in creating a world of responsible and educated citizens who are socially aware. We encourage environmental sustainability, enriching the quality of life for all the communities around, and fulfilling social responsibilities as good corporate citizens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diversity, Equity, and Inclusion */}
        <section id="dei" className="py-8 sm:py-20 scroll-mt-24">
          <div className="bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-10 md:p-16 relative overflow-hidden border border-sand-dark">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sand-dark via-brown-DEFAULT to-sand-dark"></div>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-darkbrown mb-4 sm:mb-6 tracking-tight">
                Diversity, Equity, and <span className="text-brown-DEFAULT">Inclusion</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-sand-dark to-brown-DEFAULT rounded-full mb-4 sm:mb-8"></div>
              <p className="text-base sm:text-xl font-semibold text-brown-DEFAULT mb-4 sm:mb-8">
                Our commitment to a better and equal world
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8 text-darkbrown leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg">
                    Diversity and Inclusion is not a destination, it is ingrained in our daily culture. As an organization, we recognize and establish behaviors within us to support meaningful, lasting change in the world.
                  </p>
                  <p className="text-base sm:text-lg">
                    We are a nationally certified Minority-owned Business Enterprise (MBE) and as such, we have a firsthand understanding of the benefits of diversity and the challenges of achieving it in the business environment.
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg">
                    Our mission is to live the experience through our consultants, clients, colleagues, and communities. Diversity encourages creative thinking, fosters innovation, and leads to more effective problem-solving.
                  </p>
                  <p className="text-base sm:text-lg">
                    We are working toward a world where everyone, regardless of race, gender, religion, sexual orientation, ability or Veteran status, has equal access to opportunities and feels valued and respected.
                  </p>
                </div>
              </div>
              <div className="bg-sand-light rounded-2xl p-4 sm:p-8 mt-6 sm:mt-12 border border-sand-dark">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="w-10 sm:w-16 h-10 sm:h-16 bg-sand-dark rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                      <span className="text-sand-light font-bold text-base sm:text-xl">DT</span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-darkbrown mb-2 sm:mb-3">Diverse Talent Partners</h3>
                    <p className="text-xs sm:text-sm text-brown-DEFAULT">
                      Our partnership with diverse organizations allows our talent acquisition team to network and connect with diverse talent pools.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 sm:w-16 h-10 sm:h-16 bg-brown-DEFAULT rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                      <span className="text-sand-light font-bold text-base sm:text-xl">DE</span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-brown-DEFAULT mb-2 sm:mb-3">Diversity Education</h3>
                    <p className="text-xs sm:text-sm text-darkbrown">
                      Learning programs for Diversity & Inclusion content, including Unconscious Bias, Skills for Inclusive Conversations, and Diversity Recruiting.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 sm:w-16 h-10 sm:h-16 bg-sand-dark rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                      <span className="text-sand-light font-bold text-base sm:text-xl">DN</span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-darkbrown mb-2 sm:mb-3">Diverse Networks</h3>
                    <p className="text-xs sm:text-sm text-brown-DEFAULT">
                      Crossword partners with Coding Camps and schools focused on underrepresented minorities to attract a diverse candidate pool.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="bg-gray-500 text-sand-light mb-6 sm:mb-10 py-8 sm:py-16 px-2 sm:px-4 md:px-16 mt-10 sm:mt-20 rounded-3xl shadow-xl text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">Ready to Experience the Crossword Difference?</h3>
            <p className="text-base sm:text-xl opacity-90 mb-4 sm:mb-8">
              Let's work together to achieve your staffing goals and build a more diverse, successful future.
            </p>
            <button className="bg-sand-light text-darkbrown px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-brown-DEFAULT hover:text-black transition-colors duration-300 shadow-lg text-sm sm:text-base">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;