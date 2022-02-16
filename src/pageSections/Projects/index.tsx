import React, { useState } from "react"
import { MainPageQuery } from "../../../gatsby-graphql"
import { Section } from "../../components/Section"
import ProjectCard from "../../components/ProjectCard"
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
    <Section className="bg-black">
      <div
        id="projects"
        className="flex justify-center h-full pt-20 text-white"
      >
        <div className="w-3/4 h-full flex flex-col items-center align-middle justify-center">
          <select
            className="text-black"
            onChange={e => setFilter(e.target.value as Filter)}
          >
            <option value="">Filter By</option>
            {filterOptions.map(filterItem => (
              <option key={filterItem} value={filterItem}>
                {filterItem}
              </option>
            ))}
          </select>
          {!!filteredProjects.length && (
            <div className="w-full border border-white rounded-lg p-10 grid grid-cols-3 gap-4">
              {filteredProjects.map(project => (
                <ProjectCard {...project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

export default Projects
