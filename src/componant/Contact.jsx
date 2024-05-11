import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      contactNumber: "",
      message: "",
    });
  };

  return (
    <div>
      <div>
        <img
          className="w-full lg:h-[400px]"
          src="https://t3.ftcdn.net/jpg/04/81/31/66/360_F_481316696_cPzBNRfqMpbq2cx2soWytWAjhzZYByS4.jpg"
          alt=""
        />
      </div>

      <div className=" lg:w-[70%] mx-auto mt-24 lg:flex justify-between text-lg">
        <div className=" lg:w-[40%] ps-10 lg:ps-0">
          <p className="font-medium lg:text-4xl text-3xl font-serif mb-10">
            You can find us at
          </p>

          <p>EMAIL</p>
          <p>hello@umbrellacover.co.uk</p>

          <p className="mt-10">TOLL FREE NUMBER</p>
          <p>0151 452 3321</p>

          <p className="mt-10">Opening Hours</p>
          <p>Mon-Sat (9 am-7 pm)</p>

          <p className="mt-10 text-xl">We are based online only</p>
        </div>

{/* form part */}
        <div className=" mt-12 lg:mt-0 lg:w-[50%] px-5 lg:px-0">
        <p className="font-medium text-3xl lg:text-4xl font-serif mb-10">
        Let's get in touch
          </p>
          <form onSubmit={handleSubmit} className=" mt-8 p-4 ">
            <div className="mb-4">
              
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full py-3 border-b focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              
              <input
              required
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full py-3 border-b focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full py-3 border-b focus:outline-none focus:border-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

      </div>

      {/* why choose */}

      <div
        className="mt-16 relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
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

              <p className="lg:w-[60%] w-[80%] mx-auto mt-8 rounded border-2 border-blue-600 bg-blue-600 py-5 font-medium leading-normal hover:border-blue-700 hover:bg-blue-700 ">CALL US TOLL FREE: 00000000000</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
