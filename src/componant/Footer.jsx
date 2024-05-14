import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p className="bg-red-600 font-semibold text-white py-3 text-lg text-center">
        {" "}
        <Link to="/privacy">Privacy Policy</Link> |{" "}
        <Link to="/condition">Terms & Conditions</Link>{" "}
      </p>

      <div className=" py-8 bg-slate-100">
      <p className="text-center text-4xl font-semibold mb-5">England Insure </p>
      <div className=" lg:w-[60%] w-[85%] mx-auto pb- text-center">
      <p className="font-bold mb-2">OUR IDENTITY</p>
        <p className=" "> 
          We are an independent price searching company, search on your behalf
          with your consent to find you reasonable prices. We can assist the
          vulnerable customers with very helpful service as our multilingual
          dedicated friendly staffs are waiting to serve. Also, you are strongly
          advised to understand our Terms & Conditions and Privacy Policy
          thoroughly before accepting our services. We do not work as a broker
          or agent for any specific company but a Non-Regulated Introducer for
          'World in Holding Limited' which is authorised by Financial Conduct
          Authority (FCA). However, we are registered with the Information
          Commissioner's Office (ICO) and all your information are protected
          under the 'Data Protection Act & General Data Protection Regulation
          (GDPR 2018).
        </p>
      </div>
      </div>
      <div className=" bg-white py-10 lg:flex lg:justify-evenly items-center ">
        <div className="">
          <ul className=" flex justify-center gap-6 px-1 font-medium text-lg mr-10 lg:mr-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className=" lg:w-[20%] w-[50%] mx-auto lg:mx-0 my-10 lg:my-0 ">
          <img
            className="w-full"
            src="https://i.ibb.co/1QpyjB9/Whats-App-Image-2024-05-12-at-4-16-50-PM-removebg-preview.png"
            alt="About picture"
          />
        </div>

        <div className=" lg:w-[30%] flex flex-col items-center  lg:mr-0">
          <img
            className="w-[30%] mb-3"
            src="https://umbrellacover.co.uk/wp-content/uploads/2023/08/ico_CookieScript-300x125.png"
            alt="footer logo"
          />
          <p className=" px-3 lg:px-0 text-center">
          England insure is registered with ICO and complaint with PCI DSS regulations & Data protection laws. Information are end to end encrypted & will never be shared with any 3rd party agencies.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Footer;
