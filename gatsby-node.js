const path = require("path")

// follow example from gatsby docs
// https://www.gatsbyjs.com/docs/node-apis/#onCreateNode
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // use path from node.js
    //nodejs.org/dist/latest-v15.x/docs/api/path.html#path_path_basename_path_ext
    const slug = path.basename(node.fileAbsolutePath, ".md")

    // https://www.gatsbyjs.com/docs/schema-generation/#createnodefield
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// see Gatsby Node APIs for createPages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
