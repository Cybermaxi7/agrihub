import React from 'react';
import {FaMapMarkedAlt} from "react-icons/fa";

const ImageCarousel = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] px-4 sm:px-6 overflow-x-auto hide-scrollbar">                   {/* Container for images with gap */}
            <div className="flex gap-4 sm:gap-6 h-full">
                {/* First Image Section */}
                <div className="relative min-w-[85%] h-full rounded-2xl">
                    {/* Image */}
                    <div
                        className="w-full h-full bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url('/images/img-1.jpeg')` }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] rounded-2xl" />
                        <div className={" absolute z-30 top-5 left-5 md:top-10 md:left-10 flex items-center justify-center gap-2"}>
                            <div className={"w-14 h-14 bg-green-500 rounded-full flex flex-center"}>
                                <FaMapMarkedAlt className={"text-2xl text-white"} />
                            </div>
                            <div className={"flex flex-col text-white"}>
                                <h2 className={"font-heading text-sm md:text-lg font-semibold"}>Putuk Truno Spaces</h2>
                                <p className={"font-body italic"}>Prigen, Pasuruan</p>
                            </div>
                        </div>

                        {/* Design Elements */}
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                            {/* Decorative diagonal lines */}
                            <div className="absolute -right-20 top-0 w-96 h-96 border-t-2 border-r-2 border-white/20 rounded-tr-full transform rotate-12" />
                            <div className="absolute -left-20 bottom-0 w-96 h-96 border-b-2 border-l-2 border-white/20 rounded-bl-full transform -rotate-12" />
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 p-6 sm:p-12 text-white h-full flex flex-col justify-end">
                            <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">50+ Adults Trained</h2>
                            {/*<p className="text-sm sm:text-lg mb-4 sm:mb-8 line-clamp-3 sm:line-clamp-none">*/}
                            {/*    Description text goes here. Add your content.*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>

                {/* Second Image Section */}
                <div className="relative min-w-[85%] sm:min-w-[70%] h-full rounded-2xl">
                    {/* Image */}
                    <div
                        className="w-full h-full bg-cover bg-center rounded-2xl"
                        style={{backgroundImage: `url('images/img-2.jpeg')`}}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded-2xl"/>
                        <div
                            className={" absolute z-30 top-5 left-5 md:top-10 md:left-10 flex items-center justify-center gap-2"}>
                            <div className={"w-14 h-14 bg-green-500 rounded-full flex flex-center"}>
                                <FaMapMarkedAlt className={"text-2xl text-white"}/>
                            </div>
                            <div className={"flex flex-col text-white"}>
                                <h2 className={"font-heading text-sm md:text-lg font-semibold"}>Mountain View Spaces</h2>
                                <p className={"font-body italic"}>Somewhere in the Wilderness</p>
                            </div>
                        </div>

                        {/* Design Elements */}
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                            {/* Circular design elements */}
                            <div
                                className="absolute right-20 top-20 w-64 h-64 border-2 border-white/20 rounded-full transform -rotate-45"/>
                            <div
                                className="absolute left-20 bottom-20 w-48 h-48 border-2 border-white/20 rounded-full transform rotate-45"/>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 p-6 sm:p-12 text-white h-full flex flex-col justify-end">
                            <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">9+ Kids Trained</h2>
                            {/*<p className="text-sm sm:text-lg mb-4 sm:mb-8 line-clamp-3 sm:line-clamp-none">*/}
                            {/*    Description text goes here. Add your content.*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ImageCarousel;