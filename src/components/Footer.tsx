import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-pink-100 text-red-600 mt-8 p-8 px-32">
            <div className="container flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-lg font-bold">FoodHive</h2>
                    <p className="text-sm text-gray-600">Continue FoodHive 2024 all rights reserved</p>
                </div>
                <div className="mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2">Follow Us On</h3>
                    <div className="flex space-x-4">
                        {/* Substitua os ícones pelos ícones desejados */}
                        <a href="#" aria-label="Linkedin"><img src="/socialmedia/linkedin.svg" alt="Linkedin" className='size-8' /></a>
                        <a href="#" aria-label="Github"><img src="/socialmedia/github.svg" alt="Github" className='size-8' /></a>
                    </div>
                </div>
                <div className="mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2">Menu</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Offers</a></li>
                        <li><a href="#" className="hover:underline">Service</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                    </ul>
                </div>
                <div className="mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2">Information</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Menu</a></li>
                        <li><a href="#" className="hover:underline">Quality</a></li>
                        <li><a href="#" className="hover:underline">Make a Choice</a></li>
                        <li><a href="#" className="hover:underline">Salad With Vegetable</a></li>
                        <li><a href="#" className="hover:underline">Fast Delivery</a></li>
                        <li><a href="#" className="hover:underline">Subscribe</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <ul className="space-y-2">
                        <li>+123 456 789</li>
                        <li><a href="#" className="hover:underline">Explore</a></li>
                        <li><a href="mailto:Info@FoodHive.Com" className="hover:underline">Info@FoodHive.Com</a></li>
                        <li>Av. Boa Viagem, 1234, Recife, PE, Brasil</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
