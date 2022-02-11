import * as React from "react"
import { MainPageQuery } from "../../../gatsby-graphql"

function ProjectCard({
  body,
  heroImage,
  languages,
  seo,
  technologies,
  title,
}: MainPageQuery["allProjectsJson"]["nodes"][number]) {
  return (
    <div className="flex flex-col border rounded p-7 text-white">
      <h1 className="text-xl">{title}</h1>
      <h2 className="text-lg">{languages.join(" / ")}</h2>
      <p>{body}</p>
    </div>
  )
}

export default ProjectCard
