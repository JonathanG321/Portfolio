import React from "react"
import { PageProps } from "gatsby"
import { Controller, Scene } from "react-scrollmagic"
import { Timeline, Tween } from "react-gsap"
import Animation from "../Animation"
import { MainPageQuery } from "../../../gatsby-graphql"
import Seo from "../seo"
import About from "../About"
import Introduction from "../Introduction"
import Projects from "../Projects"
import "./styles.scss"

type Props = PageProps<MainPageQuery>

function Page({ data }: Props) {
  const { heroJson, aboutJson, allProjectsJson, contactJson } = data

  return (
    <>
      <Seo {...heroJson.seo} />
      <div className="backgrounds">
        {/* <Animation type="triangles" /> */}
        <Controller>
          <Scene triggerHook="onLeave" duration="600%" pin>
            <Timeline wrapper={<div id="pinContainer" />}>
              <Section start>
                <Introduction {...heroJson} />
              </Section>
              <Section className="bg-black">
                <About {...aboutJson} />
              </Section>
              <Section className="bg-black">
                <Projects {...allProjectsJson} />
              </Section>
              <Section className="bg-black">
                <About {...aboutJson} />
              </Section>
            </Timeline>
          </Scene>
        </Controller>
      </div>
      <About />
    </>
  )
}

type SectionProps = {
  children?: React.ReactNode
  className?: string
  start?: boolean
}

function Section({ children, className = "", start = false }: SectionProps) {
  return (
    <>
      {start ? (
        <Tween from={{ zIndex: 2 }} to={{ zIndex: 2 }}>
          <section className={"panel " + className}>
            <div className="inner-panel">{children}</div>
          </section>
        </Tween>
      ) : (
        <Tween from={{ opacity: 0, zIndex: 1 }} to={{ opacity: 1, zIndex: 2 }}>
          <section className={"panel " + className}>
            <div className="inner-panel">{children}</div>
          </section>
        </Tween>
      )}
      <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
    </>
  )
}

export default Page
