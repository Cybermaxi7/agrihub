import React from "react";
import Image from "next/image";

const HeroAbout = () => {
  return (
    <div className={"text-gray-950 container mx-auto p-4"}>
      <div
        className={
          "my-5 md:my-10 flex-between items-start flex-col md:flex-row gap-5 md:gap-20 "
        }
      >
        <div className={"relative w-full sm:w-[30%]"}>
          <h3
            className={
              "text-green-700 font-semibold text-sm md:text-lg font-heading uppercase"
            }
          >
            We are here for you
          </h3>
          <h2 className={"font-body text-sm md:text-lg "}>Let's collaborate</h2>
          <Image
            src={"/images/dotPattern.svg"}
            alt={"dot pattern svg"}
            width={100}
            className={
              "object-contain absolute top-0 -right-10 sm:right-10 md:-right-12 lg:right-10 text-green-500/50 -z-20"
            }
            height={50}
          />
        </div>
        <div className={"w-full sm:w-[70%]"}>
          <p className={"font-body leading-6"}>
            Agri innovation hub is always open for collaboration and
            partnerships, we are always interested in seeing how we can cater
            for the needs of our community by trying to address and motivate
            them with classical ideas on how to start their own business.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroAbout;
