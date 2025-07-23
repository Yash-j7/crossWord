import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-brown-DEFAULT text-darkbrown py-8 px-2 sm:px-0 text-center mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <h3 className="text-lg font-bold tracking-wide text-darkbrown mb-2">
          CONNECT WITH CROSSWORD
        </h3>
        <div className="flex gap-4 justify-center mb-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brown-DEFAULT text-darkbrown text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/posts/crossworstaffing_crossword-staffing-solutions-wishes-you-a-activity-7341474516071522304-EwUJ?utm_source=share&utm_medium=member_android&rcm=ACoAAAEcMXQB3d5neYBDwIeXV8RkQ75n_qGJljY "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brown-DEFAULT text-darkbrown text-xl"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brown-DEFAULT text-darkbrown text-xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brown-DEFAULT text-darkbrown text-xl"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="text-darkbrown text-sm mb-1">
          410 Peachtree Parkway, Suite 4245, Cumming, GA 30041
        </div>
        <div className="text-darkbrown text-sm mb-1">
          info@crosswordstaffing.com
        </div>
        <div className="text-darkbrown text-sm mb-2">404 805 6664</div>
      </div>
      <p className="text-xs sm:text-sm mt-4">
        © 2025 Crossword Staffing Solutions
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm">
        <a href="#" className="bg-brown-DEFAULT hover:underline">
          Privacy policy
        </a>
        <a href="#" className="bg-brown-DEFAULT hover:underline">
          Terms and Conditions
        </a>
      </div>
    </footer>
  );
}

export default Footer;
