import seo from "../partials/seo"
import heroImage from "../partials/heroImage"

const projects = {
  name: "projects",
  label: "Projects",
  folder: "src/sectionData/Projects",
  slug: "{{slug}}",
  path: "{{title}}",
  create: true,
  fields: [
    seo,
    heroImage,
    { name: "title", label: "Title" },
    { name: "body", label: "Body" },
    { name: "tags", label: "Tags", widget: "list" },
  ],
}

export default projects
