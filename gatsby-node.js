const path = require(`path`)
const moment = require(`moment`)
const _ = require('lodash')

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
              publication {
                article {
                  ... on WP_Article {
                    id
                  }
                }
              }
            }
          }
          articles {
            nodes {
              id
              slug
            }
          }
          caseStudies {
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

  const getPublicationForArticle = articleId => {
    const publications = result.data.WP.publications.nodes
    return publications.find(publication => {
      return publication.publication && publication.publication.article && _.map(publication.publication.article, 'id').includes(articleId)
    })
  }
  
  const caseStudyTemplate = path.resolve(`src/templates/article.js`)
  result.data.WP.articles.nodes.forEach(node => {
    const { id, slug } = node
    const publicationForCaseStudy = getPublicationForArticle(id)
    createPage({
      path: `case-studies/${slug}`,
      component: caseStudyTemplate,
      context: {
        id,
        publicationSlug: publicationForCaseStudy && publicationForCaseStudy.slug ? publicationForCaseStudy.slug : ''
      },
    })
  })

  const articleTemplate = path.resolve(`src/templates/article.js`)
  result.data.WP.articles.nodes.forEach(node => {
    const { id, slug } = node
    const publicationForArticle = getPublicationForArticle(id)
    createPage({
      path: `articles/${slug}`,
      component: articleTemplate,
      context: {
        id,
        publicationSlug: publicationForArticle && publicationForArticle.slug ? publicationForArticle.slug : ''
  
      },
    })
  })
}

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions
  
  await createResolvers({
    WP_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl
      
          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }
      
          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
