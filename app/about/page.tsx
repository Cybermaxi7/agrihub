import React from "react";
import WhoWeAre from "@/components/WhoWeAre";
import OurMission from "@/components/OurMission";
import Link from "next/link";
import { FaHandshake } from "react-icons/fa6";
import Image from "next/image";

const About = () => {
  return (
    <main className="relative isolate">
      <WhoWeAre />
      <OurMission />

      {/* CTA Section */}
      <div className="relative isolate -z-10 mt-32 sm:mt-40">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              alt=""
              src="/images/pinnn.jpeg"
              width={800}
              height={800}
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                Join our team
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-950">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
              <Link
                href="https://chat.whatsapp.com/GlNonP6ayquCEbVhhwN5Bn"
                className={
                  "bg-green-600 text-white px-4 py-2 hover:bg-green-700/50 transit flex flex-center gap-2 text-sm md:text-lg w-fit mt-4 rounded"
                }
              >
                <FaHandshake />
                Connect with us
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-1318/752 w-[82.375rem] flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
