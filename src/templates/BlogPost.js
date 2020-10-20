import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import RichText from "../components/RichText"
import styled from "styled-components"
import Img from "gatsby-image"

const BlogPost = ({ data }) => {
  return (
    <Container>
      <SEO title="Magic Byrd - An IoT Platform for Enabling Smart Products" />
      <Header />
      <div className="body">
        <Img fluid={data.contentfulBlogPost.thumbnail.fluid} className="img" />
        <h1>{data.contentfulBlogPost.title}</h1>
        <RichText data={data.contentfulBlogPost.body.json} />
      </div>
      <Footer />
    </Container>
  )
}

export default BlogPost
export const pageQuery = graphql`
  query BlogPostBySlug($title: String!) {
    contentfulBlogPost(title: { eq: $title }) {
      publishDate
      category
      title
      thumbnail {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      body {
        json
      }
    }
  }
`

const Container = styled.div`
  background: #f2f2f7;
  .body {
    margin: auto;
    max-width: 1100px;
    padding: 12em 10px 1em 10px;
  }
  h1{
    margin-top: 0.5em;
    line-height: 1.5em;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 0.7em;
    color: #0c0c3e;
  }
  }
`
