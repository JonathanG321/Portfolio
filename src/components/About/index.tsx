import React from "react"
import { MainPageQuery } from "../../../gatsby-graphql"
import "./styles.scss"

type Props = MainPageQuery["aboutJson"]

function About({ body, languages, technologies, title }: Props) {
  return (
    <div id="about" className="flex justify-center h-full pt-20 text-white">
      <div className="w-3/4 h-full flex items-center align-middle justify-center">
        <div className="flex w-full justify-between">
          <div className="w-1/2 flex flex-col align-center">
            <h1 className="text-2xl self-center mb-4">{title}</h1>
            <h3 className="text-lg self-center">{body}</h3>
          </div>
          <div>
            <h1 className="text-2xl self-center mb-4">Languages</h1>
            <ul className="list-none">
              {languages &&
                languages.map(lang => (
                  <li className="list-none text-left mb-2">{lang}</li>
                ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl self-center mb-4">Technologies</h1>
            <ul className="list-none">
              {technologies &&
                technologies.map(tech => (
                  <li className="list-none text-left mb-2">{tech}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
