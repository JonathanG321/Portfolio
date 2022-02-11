import { graphql } from "gatsby"
import React, { useState } from "react"
import { MainPageQuery } from "../../../gatsby-graphql"
import ProjectCard from "../ProjectCard"
import "./styles.scss"

type Props = MainPageQuery["allProjectsJson"]

type Filter =
  | ""
  | "Javascript"
  | "Typescript"
  | "CSS/SCSS"
  | "Node"
  | "React"
  | "NextJs"
  | "HTML"
  | "Tailwind"
  | "Bootstrap"
  | "Gatsby"
  | "Netlify"

const filterOptions: Filter[] = [
  "",
  "Javascript",
  "Typescript",
  "CSS/SCSS",
  "Node",
  "React",
  "NextJs",
  "HTML",
  "Tailwind",
  "Bootstrap",
  "Gatsby",
  "Netlify",
]

function Projects({ nodes: projects }: Props) {
  const [filter, setFilter] = useState<Filter>("")

  if (!projects) return null

  const filteredProjects = projects.filter(
    project =>
      (project.technologies && project.technologies.includes(filter)) ||
      (project.languages && project.languages.includes(filter)) ||
      filter === ""
  )
  return (
    <div id="projects" className="flex justify-center h-full pt-20 text-white">
      <div className="w-3/4 h-full flex items-center align-middle justify-center">
        <select>
          {filterOptions.map(filterItem => (
            <option key={filterItem} value={filterItem}>
              {filterItem}
            </option>
          ))}
        </select>
        {filteredProjects.map(project => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
