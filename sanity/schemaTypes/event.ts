import { defineField } from "sanity";

export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "This is the title of the event",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "This is the description of the event",
      type: "string",
      validation: (rule) => rule.min(50).max(400).required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "This is the image for the event",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "dateTime",
      title: "Date and Time",
      description: "Specify the date and time of the event",
      type: "datetime",
    }),
    defineField({
      name: "registrationLink",
      title: "Registration Link",
      description: "Link for attendees to register for the event (optional)",
      type: "url",
      validation: (rule) =>
        rule.uri({
          allowRelative: false, // Only absolute URLs
          scheme: ["http", "https"],
        }),
    }),
  ],
};
