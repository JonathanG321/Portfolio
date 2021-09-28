import seo from "../partials/seo"

const section = {
  file: "src/sectionData/about.json",
  label: "About",
  name: "about",
  create: true,
  fields: [
    seo,
    { name: "title", label: "Title" },
    { name: "image", label: "Image", widget: "image" },
    { name: "name", label: "Name" },
    { name: "body", label: "Body" },
    {
      name: "specializations",
      label: "Specializations",
      widget: "object",
      fields: [
        { name: "image", label: "Image", widget: "image" },
        { name: "title", label: "Title" },
        { name: "description", label: "Description" },
      ],
    },
    { name: "languages", label: "Languages", widget: "list" },
    { name: "technologies", label: "Technologies", widget: "list" },
  ],
}

export default section
