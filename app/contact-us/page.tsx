"use client";

import React from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactUs = () => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Add your email submission logic here
    window.location.href = `mailto:maximusagbe@gmail.com?subject=${encodeURIComponent(e.target.subject.value)}&body=${encodeURIComponent(e.target.message.value)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 font-heading mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more? We're here to help. Reach out
            to us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="p-6">
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Link
                    href="https://chat.whatsapp.com/GlNonP6ayquCEbVhhwN5Bn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-green-600 hover:text-green-700"
                  >
                    <MessageCircle className="w-8 h-8" />
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-sm text-gray-600">
                        Chat with us directly
                      </p>
                    </div>
                  </Link>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Link
                    href="mailto:info@agrihub.com"
                    className="flex items-center gap-4 text-green-600 hover:text-green-700"
                  >
                    <Mail className="w-8 h-8" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm text-gray-600">info@agrihub.com</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Office Location */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold text-green-600 font-heading mb-2">
                  Our offices
                </h2>
                <p className="text-gray-600 mb-4">
                  Make a stop to pay us a visit at the hub...
                </p>
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-800">Kaduna</h3>
                  <p className="text-gray-600 flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    No 21 Yusuf Aboki Street
                    <br />
                    Abakwa GRA
                    <br />
                    Kaduna
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://maps.google.com/?q=No 21 Yusuf Aboki Street Abakwa GRA Kaduna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm flex items-center gap-1"
                    >
                      Get Directions
                      <span className="text-xl">→</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
