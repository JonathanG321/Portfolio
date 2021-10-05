import image from "./image"

const seo = {
  label: "SEO Settings",
  name: "seo",
  widget: "object",
  collapsed: true,
  fields: [
    { label: "Title", name: "title", widget: "string" },
    { label: "Meta Description", name: "description", widget: "text" },
    image
  ],
}

export default seo
