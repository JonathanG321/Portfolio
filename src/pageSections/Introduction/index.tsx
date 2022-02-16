import React from "react"
import { ArrowRight } from "react-feather"
import { MainPageQuery } from "../../../gatsby-graphql"
import { Section } from "../../components/Section"
import { isBrowser } from "../../utils"
import "./styles.scss"

type Props = MainPageQuery["heroJson"]

function Introduction({ CTA, title }: Props) {
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (isBrowser) {
      window.scrollTo({
        top: (document.documentElement.scrollHeight / 10) * 3,
        behavior: "smooth",
      })
    }
  }

  return (
    <Section start>
      <div className="flex justify-center h-full pt-20 text-white font-sans">
        <div className="w-2/3 h-full flex flex-col items-center align-middle justify-center">
          <h1 className="text-2xl self-center">{title}</h1>
          <button
            className="flex border-2 rounded-md hover:border-blue-700 hover:text-blue-700 border-white px-3 py-2 transition-colors duration-500"
            onClick={onClick}
          >
            <span className="pr-2">{CTA.label}</span>
            <div className="arrow transition-transform duration-500 origin-center">
              <ArrowRight strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </Section>
  )
}

export default Introduction
