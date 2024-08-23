import React from 'react'
import { CiDeliveryTruck, CiPizza } from "react-icons/ci";
import { LuRefreshCcw } from "react-icons/lu";

const Services = () => {
    return (
        <section className="lg:absolute block lg:shadow-2xl lg:bottom-[-0px] lg:mt-0 my-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-20 lg:flex flex-col lg:flex-row lg:flex-wrap lg:justify-around py-4 bg-white lg:border border-gray-200 rounded-3xl text-black lg:w-full md:mx-10 lg:max-w-screen-lg 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:mx-0 lg:px-0 px-6">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3 lg:p-2">
                <div className="flex items-center justify-start space-x-4 w-full">
                    <div className="bg-blue-100 flex items-start justify-start rounded-full mb-2 p-2 lg:ml-6">
                        <CiDeliveryTruck className="w-16 h-16" />
                    </div>
                    <div className="flex flex-col items-start text-center lg:text-left">
                        <h3 className="font-bold text-lg">Fast Delivery</h3>
                        <p className="text-sm lg:text-base">The Food will be delivered to your home within 1-2 hours of your ordering.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3 lg:p-2">
                <div className="flex items-center justify-start space-x-4 w-full">
                    <div className="bg-blue-100 flex items-center justify-center rounded-full mb-2 p-2">
                        <LuRefreshCcw className="w-16 h-16" />
                    </div>
                    <div className="flex flex-col items-start lg:items-start text-start lg:text-left">
                        <h3 className="font-bold text-lg">Fresh Food</h3>
                        <p className="text-sm lg:text-base">Your Food will be delivered 100% fresh to your home. We do not deliver stale food.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3 lg:p-2">
                <div className="flex items-center justify-start space-x-4 w-full">
                    <div className="bg-blue-100  flex items-center justify-center rounded-full mb-2 p-2">
                        <CiPizza className="w-16 h-16" />
                    </div>
                    <div className="flex flex-col items-start lg:items-start text-center lg:text-left">
                        <h3 className="font-bold text-lg">Customizable Orders</h3>
                        <p className="text-sm lg:text-base">Build your perfect meal with our customizable options.</p>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Services;
