"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu2Fill } from "react-icons/ri";
import Image from "next/image";

const MobileNav = () => {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    return `flex items-center justify-center py-3 w-full text-white transit transition-colors duration-300 ${
      pathname === path
        ? "font-bold border-b-2 border-white w-fit text-center"
        : "hover:font-bold"
    }`;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/event", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <Sheet>
      <SheetTrigger className="md:hidden absolute top-4 right-4 z-50 text-white">
        <RiMenu2Fill className="text-3xl text-white" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[250px] bg-green-700/70 bg-opacity-90 backdrop-blur-sm"
      >
        <SheetHeader className="pt-16 flex-center">
          <Link
            href="/"
            className={
              "rounded-full bg-white flex flex-center w-12 h-12 absolute top-4 left-4"
            }
          >
            <Image
              src={"/images/logo.png"}
              width={74}
              height={29}
              alt={"Logo for agrihub"}
              className={"rounded-full"}
            />
          </Link>

          <nav className="flex flex-col font-heading uppercase space-y-4 items-center">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link href={link.href} className={getLinkClasses(link.href)}>
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
