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
      node.internal.type === `PagesJson` ||
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

      type Hero implements Node {
        fields: Fields
      }
      type About implements Node {
        fields: Fields
      }
      type Projects implements Node {
        fields: Fields
      }
      type Contact implements Node {
        fields: Fields
      }
    `)
  },
  onCreateWebpackConfig({ actions }) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@utils": path.resolve(__dirname, "src/utils/index.ts"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
          "@assets": path.resolve(__dirname, "src/assets"),
          "@data": path.resolve(__dirname, "src/data"),
        },
      },
    })
  },
}
