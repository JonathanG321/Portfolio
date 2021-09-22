import seo from "../partials/seo"

const page = {
  file: "src/pageData/home.json",
  label: "Home",
  name: "home",
  create: true,
  fields: [
    { name: "path", label: "Path", default: "", required: false },
    {
      name: "date",
      label: "Date",
      widget: "datetime",
      default: "",
      required: false,
    },
    { name: "title", label: "Title", default: "", required: false },
    {
      name: "body",
      label: "Body",
      widget: "markdown",
      default: "",
      required: false,
    },
    seo,
  ],
}

export default page
