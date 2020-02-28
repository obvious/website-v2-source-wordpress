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
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "WP",
        fieldName: "WP",
        url: "https://content.obvious.in/wp/graphql",
      },
    },
  ],
}
