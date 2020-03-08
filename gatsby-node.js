const kebabcase = require(`lodash.kebabcase`)
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        WP {
          publications {
            nodes {
              id
              title
            }
          }
          articles {
            nodes {
              id
              title
              articles {
                metadata {
                  title
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`)
    return
  }

  const publicationTemplate = path.resolve(`src/templates/publication.js`)
  result.data.WP.publications.nodes.forEach(node => {
    const { title, id } = node
    createPage({
      path: `publications/${kebabcase(title)}`,
      component: publicationTemplate,
      context: {
        id,
      },
    })
  })

  const articleTemplate = path.resolve(`src/templates/article.js`)
  result.data.WP.articles.nodes.forEach(node => {
    const { id, articles } = node
    createPage({
      path: `articles/${kebabcase(articles.metadata.title)}`,
      component: articleTemplate,
      context: {
        id,
      },
    })
  })
}
