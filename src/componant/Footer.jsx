import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <div>
    <p className="bg-red-600 font-semibold text-white py-3 text-lg text-center"> <Link to='/privacy'>Privacy Policy</Link> | <Link to='/condition'>Terms & Conditions</Link> </p>
    <dir className=" py-10 lg:flex lg:justify-evenly items-center">
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

  <div className=' lg:w-[20%] w-[50%] mx-auto lg:mx-0 my-10 lg:my-0 '>
        <img className='w-full' src="https://i.ibb.co/1QpyjB9/Whats-App-Image-2024-05-12-at-4-16-50-PM-removebg-preview.png" alt="About picture" />
    </div>

  <div className=" lg:w-[30%] flex flex-col items-center mr-8 lg:mr-0">
<img className='w-[50%]' src="https://umbrellacover.co.uk/wp-content/uploads/2023/08/ico_CookieScript-300x125.png" alt="footer logo" />
<p>Umbrella is registered with ICO (Information commissioners office) and complaint with PCI DSS</p>
  </div>


  </dir>
  </div>
};

export default Footer;
