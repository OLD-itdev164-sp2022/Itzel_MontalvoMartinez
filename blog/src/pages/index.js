import * as React from "react"
import { graphql, Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <li>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
        </li>
      ))
    }
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
    Execute Query
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
`