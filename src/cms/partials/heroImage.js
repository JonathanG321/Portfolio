const heroImage = {
  label: "Hero Image",
  name: "heroImage",
  widget: "object",
  fields: [
    { label: "Label", name: "label" },
    { label: "Alt", name: "alt" },
    { label: "Image", name: "data", widget: "image", required: false },
  ],
}

export default heroImage
