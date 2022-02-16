import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { MainPageQuery } from "../../../gatsby-graphql"
import "./styles.scss"
import { Link } from "gatsby"

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
      <div className="p-7 interior absolute rounded border-4 border-blue-700 bg-white top-0 h-full w-full flex flex-col justify-center align-middle z-10">
        <div className="left">
          <h1 className="text-xl">{title}</h1>
          <h2 className="text-lg">{languages.join(" / ")}</h2>
        </div>
        <div className="right">
          <p>{body}</p>
          <Link
            to={`/${title}`}
            className="button transition-colors duration-500"
          >
            <span>See More</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
