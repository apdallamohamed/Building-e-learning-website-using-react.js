import React from "react";
import Heading from "../layout/Heading";
import Button from "../layout/Button";
import img from "../assets/contact.svg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-8 mt-10">
      <Heading title1="Contact" title2="Us" />
      <div className="flex flex-col md:flex-row justify-between w-full">
        <form className="w-full md:w-2/5 space-y-5 pt-64 justify-center">
          <div className="flex flex-col">
            <label htmlFor="userName" className="items-left">Enter Your Name</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.240)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Enter Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.240)_0px_3px_8px] transition-all"
              type="text"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Enter Your Number</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.240)_0px_3px_8px] transition-all"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your Number"
            />
          </div>
          <div className="flex flex-row justify-center ">
            <Button title="Send Message" />
          </div>
        </form>
        <div className="w-full md:w-2/4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
