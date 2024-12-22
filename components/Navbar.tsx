"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { clsx } from "clsx";
import usePath from "@/lib/useInvalidPath";

const Navbar = () => {
  const pathname = usePathname();
  const isInvalid: boolean = usePath();

  const getLinkClasses = (path: string) => {
    return `hover:font-bold text-white transit transition-colors duration-300 whitespace-nowrap !text-sm ${
      pathname === path ? "font-bold border-b-2 border-white" : ""
    }`;
  };
  if (isInvalid) return <></>;
  return (
    <header className="w-full text-white fixed top-0 left-0 z-50 bg-green-500/80">
      <div className="container w-full mx-auto flex justify-between items-center p-2 overflow-x-hidden">
        <Link
          href="/"
          className={"rounded-full bg-white flex flex-center w-9 h-9"}
        >
          <Image
            src={"/images/logo.png"}
            width={50}
            height={20}
            alt={"Logo for agrihub"}
            className={"rounded-full"}
          />
        </Link>
        <nav className={"hidden md:flex font-heading"}>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className={getLinkClasses("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={getLinkClasses("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className={getLinkClasses("/blog")}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={getLinkClasses("/contact-us")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
