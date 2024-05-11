import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <dir className=" py-10 lg:flex justify-evenly items-center">
  <div className="">
  <ul className="flex justify-center gap-6 px-1 font-medium text-lg">
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

  <div className=' lg:w-[10%] w-[50%] mx-auto lg:mx-0 my-10 lg:my-0'>
        <img className='w-full' src="https://i.ibb.co/xMFYMRd/umblrlla-Logo.jpg" alt="About picture" />
    </div>

  <div className="lg:w-[30%] flex flex-col items-center">
<img className='w-[50%]' src="https://umbrellacover.co.uk/wp-content/uploads/2023/08/ico_CookieScript-300x125.png" alt="footer logo" />
<p>Umbrella is registered with ICO (Information commissioners office) and complaint with PCI DSS</p>
  </div>


</dir>
};

export default Footer;
