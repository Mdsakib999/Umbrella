import React from 'react';
import ServiceDesignComponents from './ServiceDesignComponents';
import { Link } from 'react-router-dom';

const Services = () => {
    const array = [
        {
            id: '1',
            title: 'Car Insurance Price',
            subtitle: 'Social use, commuting to work or business use, we have got the right car insurance cover for you at best deal',
            discription: 'If you are a young driver, an international driving licence holder or holding a Provisional/L llicence, Umbrella is here to beat any other insurance prices on market!',
            buttonName: 'Get a Quate',
            imgUrl: [
                {
                    url: "https://umbrellacover.co.uk/wp-content/uploads/2023/08/womans-legs-ge54d6e25e_1920.jpg",
                    height: 'md:h-[500px]'
                }
            ],
            bgColor: '#B6E0F1'
        },
        {
            id: '2',
            title: 'Van Insurance',
            subtitle: 'Carriage of own goods helps you grow your business and we have it all for any type of uses. Try a free quote below!',
            discription: 'Use your van for Business or for Carriage of your goods at cheapest deal',
            buttonName: 'Get a Quate',
            imgUrl: [
                {
                    url: "https://umbrellacover.co.uk/wp-content/uploads/2023/08/00405-CONTENT-SHU-VanInsurance-Nissan-MOBILE_600x900px_HxW0900x0600_92a354ff-b6f8-4cc4-9674-b420b8ffa64d.webp",
                    height: 'md:h-[750px]'
                }
            ],
            bgColor: '#CFE67F'
        },
        {
            id: '3',
            title: 'Food Delivery/Higher & Reward',
            subtitle: 'Do you know, Uber eats and amazon requires a different category of insurance certificate from their delivery drivers! Don’t worry, we have sorted it out for our customers with just perfect cover.',
            discription: 'The most expensive insurance cover comes for Food delivery/Courier, but we do the exception, guaranteed cheaper than anything you find yourself!',
            buttonName: 'Start a Project',
            imgUrl: [
                {
                    url: "https://umbrellacover.co.uk/wp-content/uploads/2023/08/um-uber.jpg",
                    height: 'h-[180px]'
                },
                {
                    url: "https://umbrellacover.co.uk/wp-content/uploads/2023/08/depositphotos_423216766-stock-photo-seattle-washington-usa-june-2019.webp",
                    height: 'md:h-[340px]'
                },
            ],
            bgColor: '#B6E0F1'
        },
    ]

    const chooseArray = [
        {
            id: '1',
            p: "Specialized quotation team to search the best out of the market"
        },
        {
            id: '2',
            p: "In most cases we are 40% cheaper that whatever you find yourself"
        },
        {
            id: '3',
            p: "Up-to 4 free quotation"
        },
        {
            id: '4',
            p: "Free customer service for 12 months"
        },
        {
            id: '5',
            p: "Multilingual Customer Service team"
        },
    ]


    return (
        <div>
            <div className='space-y-6'>
                {
                    array.map(item => <ServiceDesignComponents key={item.id} item={item} />)
                }
            </div>
            
            <div className="relative w-full h-full  md:h-[calc(100vh-80px)] flex flex-col justify-center items-center overflow-hidden px-2 md:px-0">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://umbrellacover.co.uk/wp-content/uploads/2023/08/car-transportation-car-wallpapers-6603726.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="z-10 py-7 ">
                    <h1 className=" text-center text-2xl md:text-6xl px-4 md:px-0 text-[#051F83] font-bold">Why choose us?</h1>
                    <div className="md:text-xl px-4 md:px-0 text-white font-semibold md:font-bold space-y-2 mt-8 md:mt-16">
                        {chooseArray.map(({ id, p }) => (
                            <p key={id}>
                                <span>{id}.</span> {p}
                            </p>
                        ))}
                    </div>
                    <div className='mt-8 flex flex-col justify-center items-center gap-6'>
                        <Link to="/quit" className='bg-blue-600 text-black hover:bg-blue-700 transition-all duration-200 px-11 py-4'>Get a Quote Now</Link>
                        <button className='bg-blue-600 text-black hover:bg-blue-700 transition-all duration-200 px-11 py-6 md:text-2xl uppercase underline '>Call us toll free: +448000584756</button>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Services;