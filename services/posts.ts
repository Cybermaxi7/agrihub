import { client } from "@/sanity/lib/client";
import { SanityTypes } from "@/@types";

// export const revalidate = 60; Revalidate api calls every 60 seconds

export const getAllPosts = async (): Promise<SanityTypes.Post[]> => {
  const query = `
  *[_type == "post"] | order(_createdAt desc)`;

  return await client.fetch(query);
};

export const getPostBySlug = async (
  slug: string
): Promise<SanityTypes.Post & { estimatedReadingTime: number }> => {
  const query = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    description,
    slug,
    image,
    content,
    author->,
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
  }`;

  return await client.fetch(query, { slug });
};
export const getAllEvents = async (): Promise<SanityTypes.Event[]> => {
  const query = `
  *[_type == "event"] | order(dateTime asc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    description,
    image,
    dateTime,
    registrationLink
  }`;

  return await client.fetch(query);
};
export const getGalleries = async (): Promise<SanityTypes.Gallery[]> => {
  try {
    const query = `
    *[_type == "gallery"] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      description,
      banner,
      "images": images[] {
        "url": asset->url,
        "alt": alt,
        asset
      }
    }`;

    const result = await client.fetch(query);
    console.log("Sanity Galleries Query Result:", result); // Debug log
    return result;
  } catch (error) {
    console.error("Error fetching galleries:", error);
    return [];
  }
};

export const getGalleryById = async (
  galleryId: string
): Promise<SanityTypes.Gallery | null> => {
  try {
    const query = `
    *[_type == "gallery" && _id == $galleryId][0] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      description,
      "images": images[] {
        "url": asset->url,
        "alt": alt,
        asset
      }
    }`;

    const result = await client.fetch(query, { galleryId });
    console.log("Sanity Single Gallery Query Result:", result); // Debug log
    return result;
  } catch (error) {
    console.error(`Error fetching gallery with ID ${galleryId}:`, error);
    return null;
  }
};
