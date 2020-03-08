/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-remove-serviceworker`,
    // `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "WP",
        fieldName: "WP",
        url: "https://content.obvious.in/wp/graphql",
      },
    },
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
  ],
}
