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
                src="https://www.shutterstock.com/image-photo/summer-road-trip-car-vacation-260nw-76499428.jpg"
                alt="Ctg College"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Car Insurance</h2>
              <p>
                Social use, commuting to work or business use, we have got the
                right car insurance cover for you at best deal
              </p>

              <div className="card-actions justify-center mt-4">
                <Link className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-blue-600 hover:to-red-600 px-4 py-2 rounded-md text-white font-medium shadow-md" to="/quit">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <figure>
              <img
                className="w-full h-[350px]"
                src="https://sterling-wordpress.s3.amazonaws.com/uploads/2019/11/van-insurance-480x980-480x677.jpg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Van Insurance</h2>
              <p>
                Carriage of own goods helps you grow your business and we have
                it all for any type of uses. Try a free quote below!
              </p>

              <div className="card-actions justify-center mt-4">
                <Link className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-blue-600 hover:to-red-600 px-4 py-2 rounded-md text-white font-medium shadow-md" to="/quit">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <figure>
              <img
                className="w-full h-[350px]"
                src="https://s.yimg.com/ny/api/res/1.2/V78VG_Tpb5faZxkRoallog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM3Mg--/https://media.zenfs.com/en/evening_standard_239/777235bf808f9a8569e1e457f7827be3"
                alt="City clg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Food Delivery/Higher & Reward</h2>
              <p>
                The most expensive insurance cover comes for Food
                delivery/Courier, but we do the exception!
              </p>
              <div className="card-actions justify-center mt-4">
                <Link className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-blue-600 hover:to-red-600 px-4 py-2 rounded-md text-white font-medium shadow-md" to="/quit">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h1 className="w-[80%] lg:w-[25%] mx-auto text-center bg-gradient-to-r from-red-600 to-blue-600 hover:from-blue-600 hover:to-red-600 px-4 py-3 rounded-md text-white font-semibold shadow-md">
          Give us a call- +448000584756
        </h1>
      </div>
    </>
  );
};

export default CardHomeInfo;
