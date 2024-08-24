import React from 'react'

type MenuItemProps = {
    imageSrc: string;
    title: string;
    rating: number;
    reviewCount: number;
    price: string;
};

const MenuItem = ({ imageSrc, title, rating, reviewCount, price }: MenuItemProps) => {
    return (
        <div className="justify-self-center relative bg-pink-50 rounded-lg shadow-md p-6 pt-12 text-center flex flex-col items-center w-52 h-72 my-10">
            <div className="absolute -top-12 -right-12 size-40 rounded-full z-40">
                <div className="size-40 bg-red-800 rounded-full flex items-center justify-center p-1">
                    <img src={imageSrc} alt={title} className="size-36 object-cover rounded-full" />
                </div>
            </div>
            <h3 className="text-xl font-semibold mt-16 mb-2">{title}</h3>
            <div className="flex justify-center items-center mb-2">
                <span className="text-yellow-500 text-sm">{'★'.repeat(rating)}</span>
                <span className="text-gray-500 text-sm ml-2">({reviewCount})</span>
            </div>
            <p className="text-lg font-bold mb-2">${price}</p>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Buy Now</button>
        </div>
    )
}

export default MenuItem
