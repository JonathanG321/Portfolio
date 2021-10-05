import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { MainPageQuery } from "../../gatsby-graphql"

import Layout from "../components/layout"
import Seo from "../components/seo"

type Props = PageProps<MainPageQuery>

function IndexPage({ data }: Props) {
  const {
    heroJson: { seo: heroSeo, title: heroTitle, CTA, heroImage },
    aboutJson: { body: aboutBody, languages, technologies, title: aboutTitle },
    allProjectsJson: { edges: projects },
    contactJson: { body: contactBody, title: contactTitle },
  } = data
  return (
    <Layout>
      <Seo {...heroSeo} />
      <GatsbyImage
        alt={heroImage.alt}
        image={heroImage.data.childImageSharp.gatsbyImageData}
      />
      <h2>{heroImage.label}</h2>
      <p>{heroTitle}</p>
      <p>
        {CTA.label} {CTA.url}
      </p>
      <h1>{aboutTitle}</h1>
      <p>{aboutBody}</p>
      <ul>
        {languages.map(language => (
          <li>{language}</li>
        ))}
      </ul>
      <ul>
        {technologies.map(technology => (
          <li>{technology}</li>
        ))}
      </ul>
      {projects.map(node => {
        const {
          node: { body, heroImage, title },
        } = node
        return (
          <div>
            <GatsbyImage
              alt={heroImage.alt}
              image={heroImage.data.childImageSharp.gatsbyImageData}
            />
            <h2>{heroImage.label}</h2>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        )
      })}
      <h2>{contactTitle}</h2>
      <p>{contactBody}</p>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MainPage {
    allProjectsJson {
      edges {
        node {
          body
          title
          heroImage {
            alt
            label
            data {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
        }
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
