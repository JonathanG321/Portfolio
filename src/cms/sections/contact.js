import seo from "../partials/seo"

const section = {
  file: "src/sectionData/contact.json",
  label: "Contact",
  name: "contact",
  create: true,
  fields: [
    seo,
    { name: "title", label: "Title" },
    { name: "body", label: "Body", widget: "markdown" },
  ],
}

export default section
