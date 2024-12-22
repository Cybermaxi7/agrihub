import React from 'react'
import Image from "next/image";

const WhoWeAre = () => {
    return (
        <section>
            <div className="relative isolate -z-10">
                <svg
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none"/>
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0}/>
                </svg>
                <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                        }}
                        className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
                <div className="overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                                <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl font-heading text-center sm:text-start">
                                    Who We are
                                </h1>
                                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none font-body">
                                    Agri innovation hub is a social enterprise that brings together stakeholders in the agricultural value chain and technology industry to co-create innovative and sustainable solutions to the challenges facing these sectors. We provide forum where farmers, researchers, investors and other stakeholders in the technology and agricultural industries will exchange ideas, obtain capital and create innovative solutions that can enhance agricultural output and sustainability. We create a community of agripreneurs, offer business consultancy, trainings, Business Incubation and mentorship programs. We provide state of the art co-workspace, private office and a conference room for rent in conducive neighborhood at the heart of Kaduna State, Nigeria.
                                </p>
                            </div>
                            <div
                                className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                <div
                                    className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div className="relative">
                                        <Image
                                            alt=""
                                            src="/images/second.jpeg"
                                            width={100}
                                            height={100}
                                            className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div
                                            className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"/>
                                    </div>
                                </div>
                                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div className="relative">
                                        <Image
                                            alt=""
                                            width={100}
                                            height={100}
                                            src="/images/third.jpeg"
                                            className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div
                                            className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"/>
                                    </div>
                                    <div className="relative">
                                        <Image
                                            alt=""
                                            src="/images/seventh.jpeg"
                                            width={100}
                                            height={100}
                                            className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div
                                            className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"/>
                                    </div>
                                </div>
                                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                    <div className="relative">
                                        <Image
                                            alt=""
                                            src="/images/eigteenth.jpeg"
                                            width={100}
                                            height={100}
                                            className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div
                                            className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"/>
                                    </div>
                                    <div className="relative">
                                        <Image
                                            alt=""
                                            src="/images/twelveth.jpeg"
                                            width={100}
                                            height={100}
                                            className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />

                                        <div
                                            className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhoWeAre
