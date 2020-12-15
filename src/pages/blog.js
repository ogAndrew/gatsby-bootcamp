import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <Layout>
      <h1>BLog</h1>
      <ol>
        {edges.map(item => {
          const {
            html,
            excerpt,
            frontmatter: { title, date },
          } = item.node
          return (
            <li key={title}>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
