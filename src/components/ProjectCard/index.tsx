import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
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
    <div className="flex flex-col relative pt-square overflow-hidden h-44 text-black">
      <GatsbyImage
        image={heroImage.data.childImageSharp.gatsbyImageData}
        alt={heroImage.alt}
        className="absolute top-0 border rounded w-full -z-1 h-full"
      />
      <div className="p-7 absolute rounded transition-opacity duration-500 opacity-0 transform hover:opacity-80 border-4 border-opacity-100 border-blue-700 bg-white top-0 h-full w-full flex flex-col justify-center align-middle z-10">
        <h1 className="text-xl">{title}</h1>
        <h2 className="text-lg">{languages.join(" / ")}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default ProjectCard
