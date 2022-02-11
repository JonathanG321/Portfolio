import React from "react"
import { MainPageQuery } from "../../../gatsby-graphql"
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
    <div className="flex justify-center h-full pt-20 text-white font-sans">
      <div className="w-2/3 h-full flex flex-col items-center align-middle justify-center">
        <h1 className="text-2xl self-center">{title}</h1>
        <button onClick={onClick}>{CTA.label}</button>
      </div>
    </div>
  )
}

export default Introduction
