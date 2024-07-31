import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between p-5 md:px-32 border border-lightText rounded-lg bg-white">
        <div className="flex flex-col md:flex-row gap-5 font-medium p-5 test-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-500  transition-all"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-500  transition-all"
          >
            About
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-500  transition-all"
          >
            Courses
          </Link>
          <Link
            to="Reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-500  transition-all"
          >
            reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-500  transition-all"
          >
            Contact
          </Link>
        </div>
        <div>
          <Link to="/" className="font-semibold text-2xl p-5 cursor-pointer">
            eStudy
          </Link>
        </div>
      </div>
      <div className="text-center my-4">
        <p>
          @copyright developed by
          <span className="text-brightGreen "> MD ALIF. </span>
          All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
