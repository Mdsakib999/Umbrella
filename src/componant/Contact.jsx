import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { TfiEmail } from "react-icons/tfi";
import { TbPhoneCall } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const {pathname} = useLocation();

  useEffect(() => {
    window.scroll(0,0);
  }, [pathname]);

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
    
    emailjs
      .sendForm('service_45mzuur', 'template_f1tv0tm', form.current, {
        publicKey: 'rY5m7SAUF-eQqaCLI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast("Welcome to England Insure & Thank you for your interest. One of our colleague will contact you within 3-4 hours.");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

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

      <div className=" bg-white lg:w-[70%] mx-auto mt-24 lg:flex justify-between text-lg">
        <div className=" lg:w-[40%] ps-10 lg:ps-0">
          <p className="font-medium lg:text-4xl text-3xl font-serif mb-10">
            You can find us at
          </p>

          <p className="font-semibold flex items-center gap-2"><TfiEmail className="text-2xl"/> EMAIL</p>
          <p className="ml-[33px]">hello@englandinsure.com</p>
          <p className="ml-[33px]">Info@englandinsure.com</p>

          <p className="mt-8 font-semibold flex items-center gap-2"> <TbPhoneCall className="text-2xl"/> Contact center: </p>
          <p className="ml-[31px]">+448000584756 (Toll Free)</p>

          <p className="mt-4 font-semibold flex items-center gap-2"><FaWhatsapp className="text-2xl"/> Business WhatsApp: </p>
          <p className="ml-[30px]">+48505322531</p>

          <p className="mt-10 font-semibold flex items-center gap-2"><MdOutlineDateRange className="text-2xl"/>Opening Hours</p>
          <p className="ml-[30px]">Mon - Sat (9 am-7 pm)</p>

          <p className="mt-10 text-xl">We are an online based company.</p>
          <Link target="_blank" to='https://www.facebook.com/profile.php?id=61559223407380'>
          <FaFacebookSquare className="text-3xl mt-3"></FaFacebookSquare>
          </Link>
        </div>

{/* form part */}
        <div className=" mt-12 lg:mt-0 lg:w-[50%] px-5 lg:px-0">
        <p className="font-medium text-3xl lg:text-4xl font-serif mb-10">
        Let's get in touch
          </p>
          <form ref={form} onSubmit={handleSubmit} className=" mt-8 p-4 ">
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
              value="Send"
              className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-md text-white font-medium shadow-md"
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
              <h2 className="mb-4 mt-16 lg:mt-1 lg:text-6xl text-3xl text-blue-600 font-semibold">
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
              <Link to='/quit'
                type="button"
                className=" bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-white font-medium shadow-md "
              >
                Get a Quote
              </Link>

              <p className="lg:w-[60%] w-[80%] mx-auto mt-8 mb-20 lg:mb-4 bg-red-600 hover:bg-red-700 px-4 py-4 rounded-md text-white font-medium shadow-md ">CALL US TOLL FREE: +448000584756 (Toll Free)</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer 
      position="top-center"
      />
    </div>
  );
};

export default Contact;
