import React from "react";
import { Link } from "react-router-dom";

const CardHomeInfo = () => {
  return (
    <>
    {/* service */}
      <div className="bg-slate-200 pt-10 pb-12">
        <h1 className="font-bold lg:text-5xl  my-5 text-center text-blue-700">
          Our Services
          <div className="mt-6 border-2  border-blue-400 mx-auto w-[13%]"></div>
        </h1>

        <div className=" flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:gap-3 mt-12 mb-20">
          <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <figure>
              <img
                className="w-full h-[350px]"
                src="https://i.ibb.co/wddPRWN/car.jpg"
                alt="Car pic"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Car Insurance</h2>
              <p>
                Social use, commuting to work or business use, we have got the
                right car insurance cover for you at best deal
              </p>

              <div className="card-actions justify-center mt-4">
                <Link className="bg-red-600 px-4 py-2 rounded-md text-white font-medium shadow-md" to="/quit">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <figure>
              <img
                className="w-full h-[350px]"
                src="https://i.ibb.co/w6yHy3y/van.jpg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Van Insurance</h2>
              <p>
                Carriage of own goods helps you grow your business and we have
                it all for any type of uses. Try a free quote below!
              </p>

              <div className="card-actions justify-center mt-4">
                <Link className="bg-red-600 px-4 py-2 rounded-md text-white font-medium shadow-md" to="/quit">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <figure>
              <img
                className="w-full h-[350px]"
                src="https://i.ibb.co/4MXLgV9/food.jpg"
                alt="Food delivery"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Food Delivery/Higher & Reward</h2>
              <p>
                The most expensive insurance cover comes for Food
                delivery/Courier, but we do the exception!
              </p>
              <div className="card-actions justify-center mt-4">
                <Link className="bg-red-600 px-4 py-2 rounded-md text-white font-medium shadow-md" to="/quit">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h1 className="w-[80%] lg:w-[25%] mx-auto text-center bg-red-600 px-4 py-3 rounded-md text-white font-semibold shadow-md">
          Give us a call- +448000584756
        </h1>
      </div>
    </>
  );
};

export default CardHomeInfo;
