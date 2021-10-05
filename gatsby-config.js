const path = require("path")

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}
function kebabCaseToPascalCase(str) {
  return capitalize(str).replace(/-./g, match => match[1].toUpperCase())
}

function getNetlifyCMSOptions() {
  const customizeWebpackConfig = config => {
    config.module.rules.unshift({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    })
    config.module.rules.unshift({
      test: /\.tsx?$/,
      use: [
        {
          loader: "ts-loader",
          options: { configFile: "tsconfig.netlify.json" },
        },
      ],
      exclude: /node_modules/,
    })
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    const { alias } = config.resolve
    alias["@components"] = path.join(__dirname, "src", "components")
    alias["@assets"] = path.join(__dirname, "src", "assets")
  }
  return {
    enableIdentityWidget: true,
    publicPath: `admin`,
    manualInit: true,
    includeRobots: false,
    modulePath: `./src/cms/index.js`,
    customizeWebpackConfig,
  }
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     postCssPlugins: [tailwindcss, tailwindConfig],
    //   },
    // },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          breakpoints: [768, 1024, 1536],
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: path.join("gatsby-graphql", "index.ts"),
        documentPaths: [
          "./src/**/*.{ts,tsx}",
          "./node_modules/gatsby-*/**/*.js",
        ],
        codegenDelay: 500,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(__dirname, `src`, `sectionData`, `Projects`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: path.join(__dirname, `src`, `sectionData`),
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node, object, isArray }) => {
          if(node.sourceInstanceName === "projects") {
            return "ProjectsJson";
          }
          return `${kebabCaseToPascalCase(node.name)}Json`
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: getNetlifyCMSOptions(),
    },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /assets/,
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
