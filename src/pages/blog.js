import React from "react"
import Layout from "../templates/DefaultLayout"
import BlogHero from "../components/BlogHero"
import LatestPosts from "../components/LatestPosts"
import { useStaticQuery, graphql } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "draw.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 853, maxHeight: 604) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posts: allContentfulBlogPost {
        nodes {
          publishDate(formatString: "MMM DD, YYYY")
          description {
            description
          }
          category
          title
          thumbnail {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <BlogHero img={data.img} />

      <LatestPosts data={data.posts} />
    </Layout>
  )
}

export default Blog
