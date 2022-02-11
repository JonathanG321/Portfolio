const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

const getFileNode = options => (source, _, context, info) => {
  const { fieldName } = info
  const partialPath = source[fieldName]

  if (!partialPath) {
    return null
  }

  const filePath = path.join(__dirname, options.path, partialPath)

  const fileNode = context.nodeModel.runQuery({
    firstOnly: true,
    type: "File",
    query: {
      filter: {
        absolutePath: {
          eq: filePath,
        },
      },
    },
  })

  if (!fileNode) {
    return null
  }

  return fileNode
}

module.exports = {
  onCreateNode({ node, actions, getNode }) {
    const { createNodeField } = actions
    if (
      node.internal.type === `MarkdownRemark` ||
      node.internal.type === `SectionsJson` ||
      node.internal.type.includes(`Json`)
    ) {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  },
  createSchemaCustomization({ actions }) {
    const { createTypes, createFieldExtension } = actions

    createFieldExtension({
      name: "fileByAbsolutePath",
      args: {
        path: {
          type: "String!",
          defaultValue: "",
        },
      },
      extend: options => ({
        resolve: getFileNode(options),
      }),
    })

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js
    createTypes(`
      type SiteSiteMetadata {
        siteUrl: String
      }

      type Fields {
        slug: String
      }

      type ProjectsJson implements Node {
        fields: Fields
        image: File @fileByAbsolutePath(path: "src")
      }
      type ProjectsJsonHeroImage implements Node {
        data: File @fileByAbsolutePath(path: "src")
      }
      type ProjectsJsonSeoImage implements Node {
        data: File @fileByAbsolutePath(path: "src")
      }

      type HeroJson implements Node {
        fields: Fields
      }
      type HeroJsonSeoImage implements Node {
        data: File @fileByAbsolutePath(path: "src")
      }
      type HeroJsonHeroImage implements Node {
        data: File @fileByAbsolutePath(path: "src")
      }

      type AboutJson implements Node {
        fields: Fields
      }
      type AboutJsonSeoImage implements Node {
        data: File @fileByAbsolutePath(path: "src")
      }

      type ContactJson implements Node {
        fields: Fields
      }
      type ContactJsonSeoImage implements Node {
        data: File @fileByAbsolutePath(path: "src")
      }
    `)
  },
  onCreateWebpackConfig({ actions, stage, loaders }) {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /scrollmagic/,
              use: loaders.null(),
            },
            {
              test: /gsap/,
              use: loaders.null(),
            },
            {
              test: /react-scrollmagic/,
              use: loaders.null(),
            },
            {
              test: /react-gsap/,
              use: loaders.null(),
            },
            {
              test: /tsparticles/,
              use: loaders.null(),
            },
            {
              test: /tsparticles-preset-fire/,
              use: loaders.null(),
            },
            {
              test: /tsparticles-preset-links/,
              use: loaders.null(),
            },
            {
              test: /tsparticles-preset-triangles/,
              use: loaders.null(),
            },
            {
              test: /tsparticles-preset-stars/,
              use: loaders.null(),
            },
          ]
        },
      })
    }
  },
}