const path = require(`path`)
const moment = require(`moment`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const publicationsTemplate = path.resolve(`src/templates/publications.js`)

  const today = moment()
  const aMonthAgo = moment(today).subtract(30, "days")

  createPage({
    path: `publications`,
    component: publicationsTemplate,
    context: {
      after: {
        month: aMonthAgo.month() + 1,
        day: aMonthAgo.date(),
        year: aMonthAgo.year(),
      },
      before: {
        month: today.month() + 1,
        day: today.date(),
        year: today.year(),
      },
    },
  })

  const result = await graphql(
    `
      {
        WP {
          publications {
            nodes {
              id
              slug
            }
          }
          articles {
            nodes {
              id
              slug
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
    const { id, slug } = node
    createPage({
      path: `publications/${slug}`,
      component: publicationTemplate,
      context: {
        id,
      },
    })
  })

  const articleTemplate = path.resolve(`src/templates/article.js`)
  result.data.WP.articles.nodes.forEach(node => {
    const { id, slug } = node
    createPage({
      path: `articles/${slug}`,
      component: articleTemplate,
      context: {
        id,
      },
    })
  })
}
