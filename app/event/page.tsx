import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import { getAllEvents } from "@/services/posts";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Events = async () => {
  const data = await getAllEvents();
  console.log(data);
  // const events = [
  //   {
  //     title: "Tech Conference 2024",
  //     description:
  //       "Join us for an amazing conference featuring the latest in technology trends and innovations. We'll be covering topics from AI to cloud computing, with hands-on workshops and networking opportunities.",
  //     image: "/api/placeholder/800/400",
  //     dateTime: "2024-12-25T10:00:00",
  //     registrationLink: "https://example.com/register",
  //   },
  //   {
  //     title: "Workshop: Future of AI",
  //     description:
  //       "An interactive workshop exploring the future of artificial intelligence and its impact on society. Learn about the latest developments in AI and how they might shape our future.",
  //     image: "/api/placeholder/800/400",
  //     dateTime: "2024-12-26T14:00:00",
  //     registrationLink: "https://example.com/register",
  //   },
  // ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>

        <div className="flex flex-col gap-8">
          {data.map((event, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                  <div className="relative h-full">
                    <Image
                      src={urlFor(event.image).url()}
                      alt={event.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="flex-1 p-6 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {event.title}
                    </h2>

                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.dateTime)}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{formatTime(event.dateTime)}</span>
                    </div>

                    <p className="text-gray-600 mb-6">{event.description}</p>
                  </div>

                  <Button
                    className="w-full md:w-auto group/button"
                    variant="outline"
                    asChild
                  >
                    <Link href={event.registrationLink}>
                      <span className="flex items-center justify-center gap-2">
                        Register Now
                        <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
