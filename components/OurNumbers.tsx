import React from 'react';
import Image from 'next/image';
import { stats } from "@/lib/data";
import AnimatedCounter from "@/components/AnimatedCounter";

interface Stat {
    id: number;
    name: string;
    value: string;
}

export default function OurNumbers() {
    return (
        <div className="text-white">
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="absolute inset-0 -z-10">
                    <Image
                        alt="Team collaboration background"
                        src="/images/statsBg.jpg"

                        fill
                        quality={100}
                        priority
                        className="object-cover"
                        sizes="100vw"
                        // style={{
                        //     objectFit: 'cover',
                        //     filter: 'brightness(0.5) saturate(0) contrast(1.2)'
                        // }}
                    />
                </div>
                <div className="relative mx-auto px-6 lg:px-8 container p-4">
                    <div
                        aria-hidden="true"
                        className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        />
                    </div>
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                        <h2 className="text-base font-body font-semibold leading-8 tracking-[.3rem] text-blue-500">
                            Lets talk figures
                        </h2>
                        <p className="mt-2 text-4xl font-heading font-semibold tracking-tight text-balance text-white sm:text-5xl">
                            Our Numbers
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300 font-body">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                            suscipit eaque, iste dolor cupiditate blanditiis.
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {stats.map((stat: Stat) => (
                            <div
                                key={stat.id}
                                className="flex flex-col gap-y-3 border-l font-heading border-white/10 pl-6"
                            >
                                <dt className="text-sm leading-6">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight">
                                    {!isNaN(parseFloat(stat.value.replace(/[^0-9.]/g, ''))) ? (
                                        <AnimatedCounter value={stat.value}/>
                                    ) : (
                                        stat.value
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
