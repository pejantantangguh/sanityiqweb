export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "tagline",
      type: "string",
      title: "Tagline",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "backgroundImage",
    },
  },
};
