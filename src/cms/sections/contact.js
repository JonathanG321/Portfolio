const section = {
  file: "src/sectionData/contact.json",
  label: "Contact",
  name: "contact",
  create: true,
  fields: [
    { name: "title", label: "Title" },
    { name: "body", label: "Body", widget: "markdown" },
  ],
}

export default section
