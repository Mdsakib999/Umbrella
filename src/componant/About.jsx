import React from "react";

const About = () => {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center "
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/05/06/32/62/360_F_506326245_2GtSGEjKLDtpHS0FSkEBs4gV34DmTtS5.jpg')",
          height: "400px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >
          <div className=" flex h-full items-center justify-center">
            <div className=" text-white">
              {/* <h2 className="mb-4 text-6xl font-semibold">
                ABOUT US
              </h2> */}
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="flex flex-col justify-center items-center">
        <p className="font-medium text-4xl font-serif mt-16 mb-10 lg:w-[50%] text-center mx-auto ">
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
        <p className="font-medium text-xl mt-16 mb-10 lg:w-[70%]">
          We search the cheapest available price for you with your consent. We
          do not work for any specific insurance company or broker and do not
          administrate or monitor any of our customers policy
        </p>
        <img src="https://i.ibb.co/xMFYMRd/umblrlla-Logo.jpg" alt="" />

        <div className="flex justify-evenly text-center lg:w-[80%] my-16">
          <div className="w-[40%] ">
            <p className="text-xl font-medium mb-3">Our Mission</p>
            <p>
              Build the best service that creates the most value for our
              customers, use business to inspire and implement friendly
              solutions.
            </p>
          </div>
          <div className="w-[40%]">
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
