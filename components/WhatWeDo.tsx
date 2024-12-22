import React from 'react'
import Image from "next/image";
import AFCards from "@/components/AFCards";
import {data} from "@/lib/data";

const WhatWeDo = () => {
    return (
        <div className={"text-white container mx-auto p-4"}>
            <div className={"flex flex-col gap-2 flex-center font-heading"}>
                <h3 className={"tracking-[.2rem] uppercase underline underline-offset-8 text-green-700 text-xl md:text-2xl xl:text-4xl font-semibold "}>What do we do?</h3>
                <h1 className={"text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"}>Area of Focus</h1>
            </div>
            <div className={"mt-10"}>
                <div className={"grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 md:grid-cols-3"}>
                    <div className={"relative flex flex-col gap-5"}>
                        <h3 className={"text-green-700 font-semibold text-xs md:text-sm font-heading uppercase"}>Industries</h3>
                        <h2 className={"font-body text-sm md:text-lg max-w-[7rem] "}>Some of the areas we work in</h2>
                        <Image src={"images/dotPattern2.svg"} alt={"dot pattern svg"} width={180}
                               className={"object-contain absolute top-0 right-0 text-blue-500/50"}
                               height={50}/>
                    </div>
                    {data.map((area, index) => (
                        <AFCards title={area.title} paragraph={area.paragraph} icon={area.icon} key={index} />
                    ))}

                </div>
            </div>
        </div>
    )
}
export default WhatWeDo
