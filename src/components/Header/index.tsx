import React, { useEffect, useState, MouseEvent } from "react"
import {
  Active,
  activeDefault,
  isBrowser,
  Panel,
  panelDefault,
  Scroll,
  scrollDefault,
} from "../../utils"
import HeaderContent from "./content"

interface Props {
  siteTitle: string
}

function Header({ siteTitle }: Props) {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [scroll, setScroll] = useState<Scroll>(scrollDefault)
  const [panel, setPanel] = useState<Panel>(panelDefault)
  const [active, setActive] = useState<Active>(activeDefault)

  function onClick(e: MouseEvent<HTMLButtonElement>, scroll: number = 0) {
    e.preventDefault()
    if (isBrowser) {
      window.scrollTo({
        top: scroll,
        behavior: "smooth",
      })
    }
  }

  function setScrollHeights() {
    setScroll({
      panel1: (document.documentElement.scrollHeight / 10) * 3,
      panel2: (document.documentElement.scrollHeight / 10) * 6,
      panel3: (document.documentElement.scrollHeight / 10) * 9,
    })
    setPanel({
      panel1: (document.documentElement.scrollHeight / 10) * 2.5,
      panel2: (document.documentElement.scrollHeight / 10) * 5,
      panel3: (document.documentElement.scrollHeight / 10) * 7.5,
      panel4: document.documentElement.scrollHeight,
    })
    setActive({
      panel1: scrollHeight <= panel.panel1,
      panel2: scrollHeight <= panel.panel2 && scrollHeight > panel.panel1,
      panel3: scrollHeight <= panel.panel3 && scrollHeight > panel.panel2,
      panel4: scrollHeight <= panel.panel4 && scrollHeight > panel.panel3,
    })
  }

  function onScroll(this: Window) {
    if (isBrowser) setScrollHeight(this.scrollY)
  }

  useEffect(() => {
    if (isBrowser) window.addEventListener("scroll", onScroll)
    console.log(scrollHeight)
  }, [])
  useEffect(() => {
    setScrollHeights()
    console.log()
  }, [document.documentElement.scrollHeight])
  return (
    <HeaderContent
      siteTitle={siteTitle}
      active={active}
      onClick={onClick}
      scroll={scroll}
    />
  )
}

export default Header
