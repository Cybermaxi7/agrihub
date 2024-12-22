import React from 'react'
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroCommunity = () => {
    return (
        <section className="flex-center w-full flex-col pb-[100px]">
            <div className="get-app">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                    <h2 className="font-bold text-3xl md:text-4xl lg:bold-60 xl:max-w-[420px]">Feel Free to Be part of Our Growing whatsapp
                        Community</h2>

                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                        <Link
                            href='/https://chat.whatsapp.com/GlNonP6ayquCEbVhhwN5Bn'
                            className={"w-fit text-gray-950 font-bold text-center bg-white py-4 transit hover:bg-green-500 hover:text-white px-6 rounded-full"}
                            >Join Our Community</Link>

                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end">
                    <Image src="/images/second.jpeg" alt="phones" width={550} height={970}/>
                </div>
            </div>
        </section>
    )
}
export default HeroCommunity
