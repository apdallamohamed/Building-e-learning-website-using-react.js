// import React from 'react'
import { Link } from "react-scroll";
import Button from "../layout/Button";
import img from "../assets/hero.svg";

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className="md:w-2/4 text-center">
        <h2 className="text-5xl font-semibold leading-tight ">Knowledge with</h2>
        <span className="text-5xl font-semibold text-brightGreen">Himilo</span>
        <p className="text-lightText mt-5 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          veniam cum voluptates facere laboriosam, dignissimos dtr fdd eum quis
          quibusdam deleniti nesciunt quam. Labore fugit, quasi voluptatum eius
          debitis cupiditate ipsam aliquid.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact us" />
        </Link>
      </div>
      <div className="w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
