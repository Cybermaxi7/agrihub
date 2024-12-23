import { defineField } from "sanity";

export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Gallery Title",
      description: "Give this gallery collection a title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Optional: Describe what this gallery is about",
      type: "text",
      validation: (rule) => rule.max(300), // Optional field with max length
    }),
    defineField({
      name: "banner",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      description: "Add up to 10 images to this gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // Enables hotspot for better image cropping
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
              description: "Alternative text for accessibility",
              validation: (rule) => rule.max(100),
            },
          ],
        },
      ],
      validation: (rule) =>
        rule.max(10).warning("Maximum of 10 images allowed"), // Limits to 10 images
    }),
  ],
};
