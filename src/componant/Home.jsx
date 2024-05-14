import React, { useEffect, useState } from "react";
import CardHomeInfo from "./CardHomeInfo";
import CustomerFeedback from "./CustomerFeedback";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const backgrounds = [
    "https://i.ibb.co/fD1SLcH/umbg3.jpg",
    "https://i.ibb.co/b7KxpVm/umbg2.jpg",
    "https://i.ibb.co/QbHSjXT/umb-bg1.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // scroll top
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center "
        style={{
          backgroundImage: `url('${backgrounds[currentBackgroundIndex]}')`,
          height: "650px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <div className=" flex h-full items-center justify-center">
            <div className=" text-white">
              <h2 className="mb-4 lg:text-6xl text-3xl text-blue-00 font-semibold">
                Right cover at cheapest
              </h2>
              <p className="font-medium lg:text-lg w-[60%] mx-auto mt-12 mb-16">
                Private Car, Commercial Use, Food Delivery, Business use, we
                have it all! Call us toll free or click below to get the
                cheapest quote
              </p>
              <Link
                to="/quote"
                type="button"
                className="rounded  px-7 pb-[10px] pt-[10px] font-medium bg-red-600 hover:bg-red-700"
              >
                Get a Quote Now
              </Link>
              
              <p className="rounded mt-8 lg:w-[35%] w-[90%] mx-auto lg:px-7  pb-[18px] pt-[18px] font-medium bg-red-600 hover:bg-red-700 cursor-pointer">
                Give us a call: +448000584756 (Toll Free)
              </p>
            </div>
          </div>
        </div>
      </div>

      <CardHomeInfo></CardHomeInfo>

      {/* user Review */}
      <CustomerFeedback></CustomerFeedback>

      {/* home about */}
      <div className=" bg-white lg:pb-20  pt-14 lg:flex justify-evenly items-center gap-8 px-10 lg:px-0">
        <div className="lg:w-[40%]">
          <p>ABOUT US</p>
          <p className="text-4xl font-serif my-5">
            WE ARE AN INDEPENDENT INSURANCE BROKER
          </p>
          <p>
            We search the cheapest available price for you with your consent. We
            do not work for any specific insurance company or broker and do not
            administrate or monitor any of our customers policy
          </p>

          <Link to='/quote'
            type="button"
            class=" text-white border font-medium rounded-lg text-sm px-5 py-2 text-center lg:mt-4 mt-8 mr-2 mb-2 bg-red-600 hover:bg-red-700"
          >
            Get a Quote
          </Link>
        </div>

        <div className=" lg:w-[30%] w-[80%] m-8 lg:m-0 ">
          <img
            className="w-full"
            src="https://i.ibb.co/1QpyjB9/Whats-App-Image-2024-05-12-at-4-16-50-PM-removebg-preview.png"
            alt="About picture"
          />
        </div>
      </div>

      {/* Why choice us */}

      <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/man-giving-thumbs-up-out-his-car-while-road-trip_23-2148783405.jpg?w=1060&t=st=1715407558~exp=1715408158~hmac=3821bb32e3a21ae74c2048b71f328b625bd2d62c245c342233dd7df32252931e')",
          height: "600px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className=" flex h-full items-center justify-center">
            <div className=" text-white">
              <h2 className="mb-4 lg:text-6xl text-3xl text-white font-semibold">
                Why choose us?
              </h2>
              <ol className="text-left mt-10 mb-12 lg:text-xl font-semibold leading-10 px-8 lg:px-0">
                <li>
                  1. Specialized quotation team to search the best out of the
                  market
                </li>
                <li>
                  2. In most cases we are 40% cheaper than whatever you find
                  yourself
                </li>
                <li>3. Up-to 4 free quotation </li>
                <li>4. Free customer service for 12 months</li>
                <li>5. Multilingual Customer Service team</li>
              </ol>
              {/* <Link
                to="/quote"
                className=" font-medium bg-gradient-to-r from-red-600 to-blue-600 hover:from-blue-600 hover:to-red-600 px-6 py-4 rounded-md text-white shadow-md "
              >
                Get a Quote Now
              </Link> */}
              <Link
                to="/quote"
                className=" font-medium bg-red-600 hover:bg-red-700 px-6 py-4 rounded-md text-white shadow-md "
              >
                Get a Quote Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
