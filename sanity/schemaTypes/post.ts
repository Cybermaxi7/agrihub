import { defineField } from "sanity";

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "This is your blog post title.",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description:
        "Make this description brief so the user knows what to expect in the post",
      type: "string",
      validation: (rule) => rule.min(50).max(250).required(),
    }),
    defineField({
      type: "reference",
      to: [{ type: "author" }],
      name: "author",
      title: "Author",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description:
        "The slug is used in the URL, so it should be unique and descriptive.",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
};
