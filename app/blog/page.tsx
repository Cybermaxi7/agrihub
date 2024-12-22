import { SanityTypes } from "@/@types";
import { urlFor } from "@/sanity/lib/image";
import { getAllPosts } from "@/services/posts";

import Image from "next/image";
import Link from "next/link";

const Blog = async () => {
  const posts: SanityTypes.Post[] = await getAllPosts();

  return (
    <div className="py-24 sm:py-32 text-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Our Blog
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80 group"
            >
              <Image
                src={urlFor(post.image).url()}
                alt={post.title}
                layout="responsive"
                width={1200}
                height={800}
                className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-start px-8  pb-8 pt-12">
                <p className="text-sm/6 text-gray-100 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 line-clamp-4 font-body">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg text-white text-sm transition-all duration-300 w-fit transform translate-y-4 group-hover:translate-y-0 ml-auto font-heading"
                >
                  Read More...
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300 w-full z-10">
                <p className="mr-8">
                  {new Date(post._createdAt).toDateString()}
                </p>
                <p>{post.author?.name}</p>
              </div>
              <h3 className="mt-3 text-lg/6 font-semibold text-white z-10">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
