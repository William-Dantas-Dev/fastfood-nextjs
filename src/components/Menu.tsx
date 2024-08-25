import React from 'react'
import MenuItem from './MenuItem';

const Menu = () => {
    const menuItems = [
        {
            imageSrc: '/burger-menu.png',
            title: 'Burger',
            rating: 5,
            reviewCount: 160,
            price: '3.50',
        },
        {
            imageSrc: '/PizzaMenu.png',
            title: 'Pizza',
            rating: 4,
            reviewCount: 142,
            price: '4.20',
        },
        {
            imageSrc: '/chicken-fries.png',
            title: 'Chicken Fry',
            rating: 4,
            reviewCount: 123,
            price: '5.00',
        },
        {
            imageSrc: '/Grill-Sandwich.png',
            title: 'Grill Sandwich',
            rating: 5,
            reviewCount: 112,
            price: '4.80',
        },
        {
            imageSrc: '/Taco-Traifi.png',
            title: 'Taco Traifi',
            rating: 4,
            reviewCount: 152,
            price: '3.63',
        },
        {
            imageSrc: '/Noddles-Ramen.png',
            title: 'Noddle\'s Ramen',
            rating: 5,
            reviewCount: 163,
            price: '6.50',
        },
        {
            imageSrc: '/Sushi-Roll.png',
            title: 'Sushi Roll',
            rating: 5,
            reviewCount: 140,
            price: '7.00',
        },
        {
            imageSrc: '/pasta-alfredo.png',
            title: 'Pasta Alfredo',
            rating: 4,
            reviewCount: 130,
            price: '5.50',
        },
    ];
    return (
        <div className="mx-auto py-8 px-32">
            <div className="flex flex-col md:flex-row justify-between items-start pb-8">
                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold text-black">
                        Our <span className="text-red-700">Regular</span>
                    </h2>
                    <h2 className="text-5xl font-bold text-black">
                        Menu
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Menu
