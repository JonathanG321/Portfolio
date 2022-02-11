import React from "react"
import { MainPageQuery } from "../../../gatsby-graphql"
import "./styles.scss"

type Props = MainPageQuery["heroJson"]

function Introduction({ CTA, title }: Props) {
  return (
    <div className="flex justify-center h-full pt-20 text-white font-sans">
      <div className="w-2/3 h-full flex flex-col items-center align-middle justify-center">
        <h1 className="text-2xl self-center">{title}</h1>
        <a href={/* CTA.url} */ "#about"}>{CTA.label}</a>
        <button>hello</button>
      </div>
    </div>
  )
}

export default Introduction
