import Image from "next/image";

// components/Categories.tsx
const Categories = () => {
    const categories = [
        { name: "Burger", image: "/burger1.png" },
        { name: "Pizza", image: "/pizza.png" },
        { name: "French Fries", image: "/french-fries.png" },
    ];

    return (
        <section className="pb-12 bg-white lg:pt-32 px-6 lg:px-32 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold text-black">
                        Best <span className="text-red-700">Delivered</span>
                    </h2>
                    <h2 className="text-5xl font-bold text-black">
                        Categories
                    </h2>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 lg:mt-0">
                    <p className="text-gray-400">
                        Here Are some of our best distributed Categories. If you want you can order from here.
                    </p>
                </div>
            </div>
            <div className="lg:flex lg:justify-between mt-8 gap-6 space-y-20 lg:space-y-0 w-full">
                {categories.map((category) => (
                    <div key={category.name} className="flex flex-col items-center text-center lg:text-left w-full lg:w-1/3">
                        <div className="relative w-full h-64 flex items-end justify-center">
                            <Image
                                src={category.image}
                                alt={category.name}
                                layout="fill" // Makes the image cover the container
                                objectFit="contain" // Maintains aspect ratio
                                className="absolute bottom-0 left-0"
                            />
                        </div>
                        <div className="flex flex-col items-center text-center lg:text-left w-full mt-4">
                            <h3 className="font-bold text-3xl text-black mb-2">{category.name}</h3>
                            <a href="#" className="text-red-500">Order Now &gt;</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;
