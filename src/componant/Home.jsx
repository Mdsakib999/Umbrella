import React from 'react';
import CardHomeInfo from './CardHomeInfo';

const Home = () => {
    return (
        
        <div>
            
            <div className=' overflow-hidden'>
                <img className='rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover' src="https://static.vecteezy.com/system/resources/previews/005/709/282/large_2x/panoramic-view-over-icelandic-landscape-of-big-volcanic-caldera-askja-in-the-middle-of-volcanic-desert-in-highlands-with-red-turquoise-and-orange-volcano-soil-at-sunset-colors-iceland-photo.jpg" alt="" />
            </div>



        <CardHomeInfo></CardHomeInfo>

        {/* home about */}
        <div className=' lg:py-16 flex justify-evenly items-center gap-8'>
            <div className='lg:w-[40%]'>
                <p>ABOUT US</p>
                <p className='text-4xl font-serif my-5'>WE ARE AN INDEPENDENT INSURANCE BROKER</p>
                <p>We search the cheapest available price for you with your consent. We do not work for any specific insurance company or broker and do not administrate or monitor any of our customers policy</p>
                <button className='border px-8 py-3 mt-5 rounded-md border-gray-500 hover:border-blue-600 hover:text-blue-600'>Find Out More</button>
            </div>

            <div className=' lg:w-[25%]'>
                <img className='w-full' src="https://i.ibb.co/xMFYMRd/umblrlla-Logo.jpg" alt="About picture" />
            </div>
        </div>


        </div>
    );
};

export default Home;