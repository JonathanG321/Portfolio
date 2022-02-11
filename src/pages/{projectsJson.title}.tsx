import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { ProjectQuery } from "../../gatsby-graphql"
import Layout from "../components/layout"
import Seo from "../components/seo"

type Props = PageProps<ProjectQuery>

function Page({ data }: Props) {
  const {
    json: { title, body, heroImage, seo },
  } = data
  return (
    <Layout>
      <Seo {...seo} />
      <GatsbyImage
        alt={heroImage.alt}
        image={heroImage.data.childImageSharp.gatsbyImageData}
      />
      <p>{heroImage.label}</p>
      <p>{title}</p>
      <p>{body}</p>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query Project($id: String!) {
    json: projectsJson(id: { eq: $id }) {
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
    }
  }
`
