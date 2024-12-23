import React from "react";
import Image from "next/image";

const OurMission = () => {
  return (
    <div
      className={"container mx-auto px-4 md:px-6 my-10 flex flex-col gap-10"}
    >
      <div className={"flex flex-col sm:flex-row flex-center gap-6"}>
        <div className={"w-full sm:w-[60%] flex flex-col gap-4 sm:gap-3"}>
          <h2
            className={
              "font-bold text-3xl md:text-6xl font-heading uppercase text-center sm:text-start"
            }
          >
            Our Mission
          </h2>
          <p
            className={
              "max-w-xl text-lg md:text-xl font-body text-center sm:text-start"
            }
          >
            Our mission is to bridge the gap between traditional farming
            practice and cutting edge technologies to enhance sustainability,
            productivity and profitability through collaboration and innovation
            between the agric and tech community.
          </p>
        </div>
        <div className={"w-full sm:w-[40%]"}>
          <Image
            src={"/images/IMG_1140.jpeg"}
            width={"200"}
            height={200}
            alt={"image"}
            className={"w-full bg-contain object-contain"}
          />
        </div>
      </div>
      <div
        className={
          "flex flex-col-reverse sm:flex-row flex-center justify-between gap-8"
        }
      >
        <div className={"w-full sm:w-[40%]"}>
          <Image
            src={"/images/img-1.jpeg"}
            width={"200"}
            height={200}
            alt={"image"}
            className={"w-full bg-contain object-contain"}
          />
        </div>
        <div className={"w-full sm:w-[60%] flex flex-col gap-4 sm:gap-3"}>
          <h2
            className={
              "font-bold text-3xl md:text-6xl font-heading uppercase text-center sm:text-start"
            }
          >
            Our Vision
          </h2>
          <p
            className={
              "max-w-xl text-lg md:text-xl font-body text-center sm:text-start"
            }
          >
            To create a sustainable and inclusive agricultural sector that is
            driven by innovation, efficiency and profitability.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurMission;
