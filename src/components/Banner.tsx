import React from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa'; // Ícone de carrinho
import { BsPlayCircle } from 'react-icons/bs'; // Ícone de play

const Banner = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center bg-red-50 py-12 px-6 lg:px-32 md:px-10 pt-20">
            <div className="space-y-4 text-center md:text-left">
                <h1 className="text-4xl md:text-7xl font-bold text-red-600">
                    All Fast Food is
                </h1>
                <h1 className="text-4xl md:text-7xl font-bold text-red-600">
                    Available at <span className="text-yellow-500">Foodle</span>
                </h1>
                <p className="flex justify-center md:justify-start items-center text-gray-700 py-6 md:py-10">
                    <Image 
                        src="/hamburguer-fofo.jpg" 
                        alt="Avatar" 
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full mr-2"
                    /> 
                    We Are Just A Click Away When You Crave For Delicious Fast Food
                </p>
                <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center md:justify-start">
                    <button className="bg-red-500 text-white py-3 px-6 rounded-full flex items-center space-x-2 shadow-lg">
                        <FaShoppingCart />
                        <span>Buy Now</span>
                    </button>
                    <button className="flex items-center text-red-500 border-2 border-red-500 py-3 px-6 rounded-full space-x-2">
                        <BsPlayCircle size={20} />
                        <span>How To Order</span>
                    </button>
                </div>
            </div>
            <div className="relative w-full h-72 md:w-1/3 md:h-[630px] mt-8 md:mt-0 mb-20">
                <Image
                    src="/background-fastfood.png" 
                    alt="Burger"
                    layout="fill"
                    objectFit="contain"
                    priority
                />
            </div>
        </section>
    );
};

export default Banner;
