import React from 'react'
import Image from "next/image";

const HeroCollaborate = () => {
    return (
        <section className="flex-center container mx-auto flex-col">
            <div className="w-full pb-24 pt-10 flex flex-col md:flex-row flex-between">
                <div className={"p-4"}>
                    <Image src="/images/logo.svg" alt="camp" width={90} height={60}/>
                    <p className="uppercase  font-bold font-heading -mt-1 mb-3 text-green-700">
                        We are here for you
                    </p>
                    <h2 className="font-semibold text-4xl md:text-6xl lg:font-bold xl:max-w-[390px]">
                        {" "}
                        Let&apos;s Collaborate...
                    </h2>
                </div>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10 pr-10 p-4">
                    <p className="text-lg md-text-xl font-body font-semibold text-gray-950 xl:max-w-[520px]">
                        Agri innovation hub is always open for collaboration and
                        partnerships, we are always interested in seeing how we can cater
                        for the needs of our community by trying to address and motivate
                        them with classical ideas on how to start their own business.
                    </p>
                </div>
            </div>

            <div className="flex-center max-container relative w-full">
                <Image
                    src="/images/fifth.jpeg"
                    alt="boat"
                    width={1440}
                    height={580}
                    className="w-full object-cover object-center 2xl:rounded-5xl"
                />


            </div>
        </section>
    )
}
export default HeroCollaborate
