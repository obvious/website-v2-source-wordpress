/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-remove-serviceworker`,
    // `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Obvious`,
        short_name: `Obvious`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FF725C`,
        display: `standalone`,
        icon: `src/images/Obvious-favicon-v2.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`,  `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "WP",
        fieldName: "WP",
        url: "https://content.obvious.in/wp/graphql",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ],
}
