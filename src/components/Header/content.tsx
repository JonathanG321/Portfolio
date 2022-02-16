import React, { MouseEvent } from "react"
import { Link } from "gatsby"
import { Active, Scroll } from "../../utils"
import NavButton from "../NavButton"

interface Props {
  siteTitle: string
  active: Active
  scroll: Scroll
  onClick: (e: MouseEvent<HTMLButtonElement>, scroll?: number) => void
}

function HeaderContent({ siteTitle, active, scroll, onClick }: Props) {
  return (
    <header className="flex justify-center border border-blue-700 bg-black fixed w-full top-0 z-50 h-20">
      <div
        className="w-full h-full flex items-center justify-between content-between text-white"
        style={{ maxWidth: 960 }}
      >
        <Link to="/" className="m-0" style={{ textDecoration: `none` }}>
          <h1 className="text-3xl text-blue-700">{siteTitle}</h1>
        </Link>
        <div className="h-full">
          <NavButton active={active.panel1} onClick={onClick} content="Home" />
          <NavButton
            active={active.panel2}
            onClick={e => onClick(e, scroll.panel1)}
            content="About"
          />
          <NavButton
            active={active.panel3}
            onClick={e => onClick(e, scroll.panel2)}
            content="Projects"
          />
          <NavButton
            active={active.panel4}
            onClick={e => onClick(e, scroll.panel3)}
            content="Contact"
          />
        </div>
      </div>
    </header>
  )
}

export default HeaderContent
