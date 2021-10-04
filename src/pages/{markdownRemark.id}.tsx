import * as React from "react"
import { graphql, PageProps } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import { ProjectsQuery } from "../../gatsby-graphql"
import Layout from "../components/layout"
// import Seo from "../components/seo"

type Props = PageProps<ProjectsQuery>

function Page({ data }: Props) {
  const {
    markdownRemark: {
      frontmatter: { title, body },
    },
  } = data
  return (
    <Layout>
      {/* <Seo {...seo} />
      <GatsbyImage
        alt={heroImage.label}
        image={heroImage.image.childImageSharp.gatsbyImageData}
      />
      <p>{heroImage.label}</p> */}
      <p>{title}</p>
      <p>{body}</p>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query Projects($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      # frontmatter {
      # heroImage {
      #   label
      #   image {
      #     childImageSharp {
      #       gatsbyImageData(placeholder: TRACED_SVG, width: 720)
      #     }
      #   }
      # }
      # seo {
      #   title
      #   description
      #   image {
      #     childImageSharp {
      #       gatsbyImageData(placeholder: TRACED_SVG, width: 720)
      #     }
      #   }
      # }
      #   title
      #   body
      # }
    }
  }
`
