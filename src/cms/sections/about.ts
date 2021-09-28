import seo from "../partials/seo"

const section = {
  file: "src/sectionData/about.json",
  label: "About",
  name: "about",
  create: true,
  fields: [
    seo,
    { name: "title", label: "Title" },
    { name: "body", label: "Body", widget: "markdown" },
    { name: "languages", label: "Languages", widget: "list" },
    { name: "technologies", label: "Technologies", widget: "list" },
  ],
}

export default section
