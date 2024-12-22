import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { urlFor } from "@/sanity/lib/image";
import { getPostBySlug } from "@/services/posts";
import { CalendarIcon } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

const PostBySlug = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const decodedSlug = decodeURIComponent(slug);
  console.log(decodedSlug);
  const post = await getPostBySlug(decodedSlug);
  console.log(post);
  return (
    <div className="text-black py-24 sm:py-32 flex flex-col flex-center w-full">
      <div className="h-full w-full flex flex-1 container mx-auto flex-col">
        <Label className="text-5xl max-w-4xl tracking-tighter font-bold uppercase font-heading">
          {post.title}
        </Label>
        <div className="flex flex-row items-center space-x-3 pb-2">
          <div className="flex flex-center space-x-2">
            <Avatar className="bg-gray-200">
              <AvatarFallback>
                {post.author.name.substring(0, 1)}
              </AvatarFallback>
            </Avatar>
            <p className="font-semibold font-accent">{post.author.name}</p>
          </div>
          <div className="flex-center gap-2">
            <CalendarIcon size={20} className="text-green-700" />
            <p>{new Date(post._createdAt).toDateString()}</p>
          </div>
        </div>
        <div className="w-full h-96 max-h-96 relative overflow-hidden">
          <Image
            src={urlFor(post.image).url()}
            alt={post.title}
            fill
            className="w-full h-full object-center object-cover rounded-lg"
          />
        </div>
        <article className="prose lg:prose-lg pt-6 ">
          <PortableText value={post.content} />
        </article>
      </div>
    </div>
  );
};

export default PostBySlug;
