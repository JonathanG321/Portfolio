import seo from "../partials/seo"
import heroImage from "../partials/heroImage"

const projects = {
  name: "projects",
  label: "Projects",
  folder: "src/sectionData/Projects",
  media_folder: "../../assets",
  public_folder: "/assets",
  extension: "json",
  format: "json",
  slug: "{{slug}}",
  path: "{{title}}",
  required: false,
  create: true,
  fields: [
    seo,
    heroImage,
    { name: "title", label: "Title" },
    { name: "body", label: "Body", widget: "markdown" },
  ],
}

export default projects
