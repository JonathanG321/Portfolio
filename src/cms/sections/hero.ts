import seo from "../partials/seo"
import cta from "../partials/cta"

const section = {
  file: "src/sectionData/hero.json",
  label: "Hero",
  name: "hero",
  create: true,
  fields: [
    seo,
    { name: "title", label: "Title", widget: "markdown", required: true },
    cta,
  ],
}

export default section
