import { client } from "@/sanity/lib/client";
import { SanityTypes } from "@/@types";

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
