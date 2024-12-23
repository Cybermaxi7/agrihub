import { getGallery } from "@/services/posts";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const Gallery = async () => {
  const gallery = await getGallery();

  if (!gallery) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold">No gallery found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {gallery.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-7xl">
          {gallery.images?.map((image, index) => {
            // Determine the grid span and sizing classes based on the image index
            const gridClass = getGridClass(index);

            return (
              <div
                key={index}
                className={`${gridClass} relative overflow-hidden rounded-xl bg-gray-100 group`}
              >
                <Image
                  src={urlFor(image).url()}
                  alt={image.alt || "Gallery image"}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                />

                {/* Optional overlay with image count */}
                {index === 0 && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg">
                      {gallery.images.length} Photos
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Helper function to determine grid classes based on image index
const getGridClass = (index: number): string => {
  switch (index) {
    case 0: // First image - large
      return "md:col-span-2 md:row-span-2 h-[400px] md:h-[500px]";
    case 1: // Second image - tall
      return "md:col-span-1 md:row-span-2 h-[400px]";
    case 2: // Third image - normal
      return "md:col-span-1 md:row-span-1 h-[240px]";
    case 3: // Fourth image - normal
      return "md:col-span-1 md:row-span-1 h-[240px]";
    case 4: // Fifth image - wide
      return "md:col-span-2 md:row-span-1 h-[240px]";
    default: // All other images
      return "md:col-span-1 md:row-span-1 h-[240px]";
  }
};

export default Gallery;
