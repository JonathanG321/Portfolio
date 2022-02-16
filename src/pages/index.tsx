import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"
import { MainPageQuery } from "../../gatsby-graphql"
import Seo from "../components/Seo"
import { Controller, Scene } from "react-scrollmagic"
import { Timeline } from "react-gsap"
import Animation from "../components/Animation"
import Introduction from "../pageSections/Introduction"
import About from "../pageSections/About"
import Projects from "../pageSections/Projects"

type Props = PageProps<MainPageQuery>

function HomePage({
  data: { heroJson, aboutJson, allProjectsJson, contactJson },
}: Props) {
  return (
    <Layout>
      <Seo {...heroJson.seo} />
      <div className="backgrounds">
        <Animation type="triangles" />
        <Controller>
          <Scene triggerHook="onLeave" duration="600%" pin>
            <Timeline wrapper={<div id="pinContainer" />}>
              <Introduction {...heroJson} />
              <About {...aboutJson} />
              <Projects {...allProjectsJson} />
              <About {...aboutJson} />
            </Timeline>
          </Scene>
        </Controller>
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query MainPage {
    allProjectsJson {
      nodes {
        seo {
          description
          title
          image {
            data {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
            alt
          }
        }
        heroImage {
          data {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
          label
          alt
        }
        body
        title
        technologies
        languages
      }
    }
    contactJson {
      body
      title
    }
    heroJson {
      title
      seo {
        title
        image {
          data {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
          alt
        }
        description
      }
      CTA {
        label
        url
      }
      heroImage {
        data {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
        alt
        label
      }
    }
    aboutJson {
      body
      title
      technologies
      languages
    }
  }
`
