"use client";
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md py-4 px-6 lg:px-32 md:px-10 fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-red-500">Foodle</div>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-red-500 pl-4"
                    >
                        {isOpen ? <AiOutlineClose size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
                <ul className={`md:flex md:space-x-0 space-y-4 md:space-y-0 ${isOpen ? 'fixed top-16 right-0 bg-white w-full shadow-md z-40' : 'hidden'} transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:relative md:flex-row md:space-y-0 md:bg-transparent md:shadow-none`}>
                    <li><a href="/" className="block px-4 py-2 text-gray-600 hover:text-red-500">Home</a></li>
                    <li><a href="/offer" className="block px-4 py-2 text-gray-600 hover:text-red-500">Offer</a></li>
                    <li><a href="/service" className="block px-4 py-2 text-gray-600 hover:text-red-500">Service</a></li>
                    <li><a href="/menu" className="block px-4 py-2 text-gray-600 hover:text-red-500">Menu</a></li>
                    <li><a href="/about" className="block px-4 py-2 text-gray-600 hover:text-red-500">About Us</a></li>
                    <li><button className="text-red-500 hover:text-red-600 px-4 py-2 md:hidden">Login</button></li>
                    <li><button className="text-red-500 hover:text-red-600 px-4 py-2 md:hidden">Sign Up</button></li>
                </ul>
                <div className="hidden md:flex space-x-4">
                    <button className="text-red-500 hover:text-red-600">Login</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
