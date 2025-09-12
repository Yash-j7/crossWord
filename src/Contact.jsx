import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "e8680ba9-fec6-443d-98ad-cd061eb0230b");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="bg-[#E4E0E1] min-h-screen py-8 px-2 sm:py-12 sm:px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-sand-light rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 border border-sand-dark mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkbrown mb-2 sm:mb-4 text-center">
          Contact <span className="text-brown-DEFAULT">Us</span>
        </h1>
        <p className="text-base sm:text-lg text-brown-DEFAULT mb-4 sm:mb-8 text-center font-medium">
          Let's connect! Whether you have a question, want to discuss your
          staffing needs, or just want to say hello, our team is here to help
          you succeed.
        </p>
        <div className="flex-1 flex flex-col gap-2 sm:gap-4 items-center md:items-start">
          <div className="flex items-center gap-2 sm:gap-3 text-darkbrown text-sm sm:text-base">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brown-DEFAULT" />
            <span className="font-semibold text-center md:text-left">
              410 Peachtree Parkway, Suite 4245, Cumming, GA 30041
            </span>
          </div>

          {/* India Office */}
          <div className="flex items-center gap-2 sm:gap-3 text-darkbrown text-sm sm:text-base">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brown-DEFAULT" />
            <span className="font-semibold text-center md:text-left">
              E-102, Safal Parivesh, HDFC Bank Lane, Prahlad Nagar,
              <br />
              Ahmedabad - 3800015, India
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-darkbrown text-sm sm:text-base">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brown-DEFAULT" />
            <span className="font-semibold">PH 404 805 6664</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-darkbrown text-sm sm:text-base">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brown-DEFAULT" />
            <span className="font-semibold">info@crosswordstaffing.com</span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
          <div className="flex flex-col gap-1 sm:gap-2">
            <label
              htmlFor="name"
              className="font-semibold text-darkbrown text-sm sm:text-base"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-sand-dark focus:outline-none focus:ring-2 focus:ring-brown-DEFAULT bg-white text-darkbrown font-medium text-sm sm:text-base"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label
              htmlFor="email"
              className="font-semibold text-darkbrown text-sm sm:text-base"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-sand-dark focus:outline-none focus:ring-2 focus:ring-brown-DEFAULT bg-white text-darkbrown font-medium text-sm sm:text-base"
              placeholder="you@email.com"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <label
              htmlFor="message"
              className="font-semibold text-darkbrown text-sm sm:text-base"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-sand-dark focus:outline-none focus:ring-2 focus:ring-brown-DEFAULT bg-white text-darkbrown font-medium text-sm sm:text-base"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sand-dark to-brown-light text-sand-light px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:from-brown-light hover:to-sand-dark transition-all duration-300 shadow-lg text-base sm:text-lg tracking-wide"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-2 sm:mt-4 text-brown-DEFAULT font-semibold min-h-[24px] text-sm sm:text-base">
          {result}
        </div>
      </div>
    </div>
  );
}
