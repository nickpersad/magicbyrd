const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allContentfulBlogPost.nodes.forEach(node => {
    const slug = node.title
      .split(" ")
      .join("-")
      .toLowerCase()
    const title = node.title
    createPage({
      path: slug,
      component: path.resolve("src/templates/BlogPost.js"),
      context: {
        title,
      },
    })
  })
}
