"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto py-12 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  width={50}
                  height={20}
                  alt="Agrihub logo"
                  className="rounded-full"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm">
              Empowering agricultural innovation and sustainable farming
              practices through community engagement and education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/event" className="text-sm hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@agrihub.com" className="hover:underline">
                  info@agrihub.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  No 21 Yusuf Aboki Street
                  <br />
                  Abakwa GRA, Kaduna
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-900 p-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-900 p-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-900 p-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Agrihub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
