// window.CMS_MANUAL_INIT = true
import CMS from "netlify-cms-app"
import sections from "./sections"
import projects from "./collections/projects"

CMS.init({
  config: {
    load_config_file: false,
    local_backend: true,
    backend: {
      name: "git-gateway",
      branch: "main",
      api_root: "https://api.github.com",
      site_domain:
        process.env.NODE_ENV === "development"
          ? "cms.netlify.com"
          : "friendly-liskov-bef2af.netlify.app",
      base_url: "https://api.netlify.com",
      cms_label_prefix: "netlify-cms/",
    },
    media_folder: "src/assets",
    public_folder: "/assets",
    collections: [sections, projects],
  },
})
