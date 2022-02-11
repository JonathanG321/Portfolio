import React from "react"
import { graphql, PageProps } from "gatsby"
import { isBrowser } from "../utils"
import Page from "../components/Page"
import Layout from "../components/layout"
import { MainPageQuery } from "../../gatsby-graphql"

type Props = PageProps<MainPageQuery>

function HomePage(query: Props) {
  return <Layout>{isBrowser && <Page {...query} />}</Layout>
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
