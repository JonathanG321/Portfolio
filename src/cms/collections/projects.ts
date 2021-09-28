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
    { name: "title", label: "Title" },
    heroImage,
    { name: "body", label: "Body", widget: "markdown" },
  ],
}

export default projects
