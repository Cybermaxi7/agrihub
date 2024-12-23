import { urlFor } from "@/sanity/lib/image";
import { getGalleries } from "@/services/posts";
import { CalendarIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Galleries",
  description: "View our collection of galleries",
  openGraph: {
    title: "Galleries",
    description: "View our collection of galleries",
    type: "website",
    locale: "en_NG",
  },
};

const Gallery = async () => {
  const galleries = await getGalleries();

  if (!galleries?.length) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold">No galleries found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="text-black py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Galleries</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery) => (
            <Link
              href={`/gallery/${gallery._id}`}
              key={gallery._id}
              className="group"
            >
              <article className="flex flex-col gap-4 h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={urlFor(gallery.banner).url()}
                    alt={gallery.title}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-green-700 transition-colors">
                    {gallery.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {gallery.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon size={16} className="mr-2" />
                    <time>{new Date(gallery._createdAt).toDateString()}</time>
                    <span className="ml-auto">
                      {gallery.images?.length || 0} photos
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
