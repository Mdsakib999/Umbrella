import React from "react";
import CardHomeInfo from "./CardHomeInfo";
import CustomerFeedback from "./CustomerFeedback";

const Home = () => {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center "
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/005/709/282/large_2x/panoramic-view-over-icelandic-landscape-of-big-volcanic-caldera-askja-in-the-middle-of-volcanic-desert-in-highlands-with-red-turquoise-and-orange-volcano-soil-at-sunset-colors-iceland-photo.jpg')",
          height: "600px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <div className=" flex h-full items-center justify-center">
            <div className=" text-white">
              <h2 className="mb-4 lg:text-6xl text-3xl text-blue-500 font-semibold">
                Right cover at cheapest
              </h2>
              <p className="font-medium lg:text-lg w-[60%] mx-auto mt-12 mb-16">
                Private Car, Commercial Use, Food Delivery, Business use, we
                have it all! Call us toll free or click below to get the
                cheapest quote
              </p>
              <button
                type="button"
                className="rounded border-2 border-blue-600 bg-blue-600 px-7 pb-[8px] pt-[10px] font-medium leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-blue-600 hover:bg-blue-700 "
              >
                Get a Quote Now
              </button>
              <p
                
                className="rounded border-2 mt-8 lg:w-[30%] w-[70%] mx-auto border-blue-600 bg-blue-600 lg:px-7  pb-[8px] pt-[10px] font-medium leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-blue-600 hover:bg-blue-700 "
              >
                Give us a call- 0151 452 3321
              </p>
            </div>
          </div>
        </div>
      </div>

      <CardHomeInfo></CardHomeInfo>

      {/* user Review */}
      <CustomerFeedback></CustomerFeedback>

      {/* home about */}
      <div className="lg:py-24 pt-6 lg:pt-0 lg:flex justify-evenly items-center gap-8 px-10 lg:px-0">
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
          <button className="border px-8 py-3 mt-5 rounded-md border-gray-500 hover:border-blue-600 hover:text-blue-600">
            Find Out More
          </button>
        </div>

        <div className=" lg:w-[25%] w-[80%] m-8 lg:m-0 ">
          <img
            className="w-full"
            src="https://i.ibb.co/xMFYMRd/umblrlla-Logo.jpg"
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
              <h2 className="mb-4 lg:text-6xl text-3xl text-blue-600 font-semibold">
                Why choose us?
              </h2>
              <ol className="text-left mt-10 mb-12 text-xl font-semibold leading-10 px-8 lg:px-0">
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
              <button
                type="button"
                className="rounded border-2 border-blue-600 bg-blue-600 px-7 pb-[8px] pt-[10px] font-medium leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 "
              >
                Get a Quote Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
