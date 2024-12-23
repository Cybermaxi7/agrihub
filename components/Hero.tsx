import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaHandshake, FaUserPlus } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div
      className="transit bg-cover flex relative h-full md:min-h-dvh pt-20 md:pt-10 lg:pt-20 pb-5 text-white overflow-x-hidden "
      style={{ backgroundImage: `url('/images/bg-Hero-1.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[5px]"></div>
      {/*<div className="absolute top-[5rem] right-8 bottom-8 left-8 bg-white/10 backdrop-blur-[10px]"></div>*/}
      <div
        className={
          "container mx-auto flex flex-col md:flex-row mt-10 px-6 lg:px-0 my-2 z-20 gap-10 h-full"
        }
      >
        <div
          className={
            "mt-2 md:mt-5  flex flex-col gap-6 sm:gap-15 xl:gap-5 w-full md:w-[60%]"
          }
        >
          <h2
            className={
              "font-accent uppercase text-stone-400 font-bold tracking-[.6rem] text-center sm:text-start"
            }
          >
            Innovation
          </h2>
          <div className={"max-w-2xl  text-center sm:text-start"}>
            <p
              className={
                "font-heading uppercase text-4xl md:text-6xl xl:text-7xl  font-semibold relative"
              }
            >
              Where innovation meets agriculture
            </p>
            <p
              className={
                "font-body mt-5 text-sm md:text-lg xl:text-xl z-20 relative"
              }
            >
              Agri innovation hub is a social enterprise that brings together
              stakeholders in the agricultural value chain and technology
              industry to co-create innovative and sustainable solutions to the
              challenges facing these sectors.
            </p>
          </div>

          <div
            className={
              "flex flex-col sm:flex-row gap-4 md:gap-3 font-heading font-semibold"
            }
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdOjdaZw8wRXw5KJeN9y8Rj5qgqaNQxgtQCw7YrX0e26zisrw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={
                "bg-green-600 text-white px-4 py-2 hover:bg-green-700/50 transit flex flex-center gap-2 text-xs md:text-sm"
              }
            >
              <FaUserPlus />
              Register
            </Link>
            <Link
              href="https://chat.whatsapp.com/GlNonP6ayquCEbVhhwN5Bn"
              className={
                "text-green-700 bg-white flex px-2 py-2 flex-center gap-2 text-xs md:text-sm hover:bg-green-600 hover:text-white transit"
              }
            >
              <FaHandshake />
              Connect with us
            </Link>
          </div>
        </div>
        <div className={"my-auto w-full md:w-[40%]"}>
          <div className="flex flex-center flex-col gap-10 md:gap-20 bg-white/10 backdrop-blur-[10px] p-4 rounded shadow-md">
            <div className={"flex flex-between w-full"}>
              <div>
                <p className={"font-heading"}>Location</p>
                <h2 className={"font-body uppercase font-bold"}>
                  Kaduna State
                </h2>
              </div>
              <IoLocationSharp className={"text-xl animate-bounce"} />
            </div>
            <div className={"flex flex-between w-full"}>
              <div>
                <p>Street</p>
                <h2 className={"font-body uppercase font-bold"}>
                  No. 21 Yusuf Aboki street
                </h2>
              </div>{" "}
              <div>
                <p>District</p>
                <h2 className={"font-body uppercase font-bold"}>Abakwa GRA</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
