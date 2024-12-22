"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RiMenu2Fill } from 'react-icons/ri'

const MobileNav = () => {
    const pathname = usePathname();

    const getLinkClasses = (path: string) => {
        return `flex items-center justify-center py-3 w-full text-white transit transition-colors duration-300 ${
            pathname === path
                ? 'font-bold border-b-2 border-white w-fit text-center'
                : 'hover:font-bold'
        }`;
    };

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact-us', label: 'Contact Us' }
    ];

    return (
        <Sheet>
            <SheetTrigger className="md:hidden absolute top-4 right-4 z-50 text-white">
                <RiMenu2Fill className="text-3xl text-white" />
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[250px] bg-[#0A0620] bg-opacity-90 backdrop-blur-sm"
            >
                <SheetHeader className="pt-16">
                    <h1 className="uppercase font-heading font-bold text-xl text-white text-center mb-8">
                        Logo
                    </h1>

                    <nav className="flex flex-col font-heading uppercase space-y-4 items-center">
                        {navLinks.map((link) => (
                            <SheetClose asChild key={link.href}>
                                <Link
                                    href={link.href}
                                    className={getLinkClasses(link.href)}
                                >
                                    {link.label}
                                </Link>
                            </SheetClose>
                        ))}
                    </nav>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav