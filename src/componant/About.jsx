import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {

  const {pathname} = useLocation();

  useEffect(() => {
    window.scroll(0,0);
  }, [pathname]);

  return (
    <div>
      
        <div>
        <img
          className="w-full lg:h-[400px]"
          src="https://t3.ftcdn.net/jpg/05/06/32/62/360_F_506326245_2GtSGEjKLDtpHS0FSkEBs4gV34DmTtS5.jpg"
          alt=""
        />
      </div>
      


      {/*  */}

      <div className="flex flex-col justify-center items-center">
        <p className="font-medium lg:text-4xl text-2xl font-serif mt-16 mb-10 lg:w-[50%] w-[80%] text-center mx-auto ">
          WE ARE AN INDEPENDENT INSURANCE BROKER
        </p>
        <img
        
          src="https://umbrellacover.co.uk/wp-content/uploads/2023/08/ico_CookieScript-300x125.png"
          alt=""
        />
        <img
          src="https://umbrellacover.co.uk/wp-content/uploads/2023/08/pci-dss-compliant-logo-vector-300x167.png"
          alt=""
        />
        <p className="font-medium text-xl mt-16 mb-10 lg:w-[70%] px-6 lg:px-0 text-center lg:text-left">
          We search the cheapest available price for you with your consent. We
          do not work for any specific insurance company or broker and do not
          administrate or monitor any of our customers policy
        </p>
        <img className="w-[80%] lg:w-[40%] lg:my-9" src="https://i.ibb.co/1QpyjB9/Whats-App-Image-2024-05-12-at-4-16-50-PM-removebg-preview.png" alt="" />

        <div className="lg:flex justify-evenly text-center w-[80%] my-16 ">
          <div className="lg:w-[40%] ">
            <p className="text-xl font-medium mb-3">Our Mission</p>
            <p>
              Build the best service that creates the most value for our
              customers, use business to inspire and implement friendly
              solutions.
            </p>
          </div>
          <div className="lg:w-[40%] mt-10 lg:mt-0">
            <p className="text-xl font-medium mb-3">Our Values</p>
            <p>
            We strive to go above and beyond for our clients no matter the challenge. We aim to deliver our very best work every single day across our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
