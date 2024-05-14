import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ServiceDesignComponents = ({ item }) => {
    const {pathname} = useLocation();

    useEffect(() => {
      window.scroll(0,0);
    }, [pathname]);
    const { title, subtitle, discription, buttonName, imgUrl, bgColor, id } = item
    console.log(bgColor);
    return (
        <div className={`text-black  ${id === '1' || id === '3' ? 'bg-[#B6E0F1]' : 'bg-[#CFE67F]'}`}>
            <div className="max-w-[1200px] mx-auto p-3 " >
                <div className="flex md:flex-row flex-col items-center gap-4 md:gap-16 px-5">
                    <div className="w-full md:w-[50%] mx-auto space-y-3" >
                        {
                            imgUrl.map(({ height, url }) => <img key={height} className={`${height} mx-auto rounded-2xl ${id === '1' ? 'w-fit' : 'w-full'}`} src={url} alt="" />)
                        }
                    </div>
                    <div className="w-full md:w-[50%] mx-auto space-y-6" >
                        <h1 className="text-3xl">{title}</h1>
                        <p className=" text-gray-500">{subtitle}</p>
                        <h2 className="text-lg md:text-2xl mb-10">{discription}</h2>
                        <Link to='/quit'>
                        <button className=" text-white mt-5 border  transition-all duration-300  px-6 py-3 rounded-md font-medium bg-red-600 hover:bg-red-700 text-sm">{buttonName}</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDesignComponents;