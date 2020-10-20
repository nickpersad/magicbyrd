import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const BlogHero = ({ img }) => {
  return (
    <Container>
      <div className="wrp">
        <div className="content">
          <h1>Discover more about MagicByrd and IoT</h1>
          <p>
            Our blog posts keeps you updated with the latest content and news
            about IoT and MagicByrd.
          </p>
        </div>
        <Img fluid={img.childImageSharp.fluid} className="img" />
      </div>
    </Container>
  )
}

export default BlogHero

const Container = styled.div`
  background: url(${require("../images/path528.png")});
  background-size: cover;
  background-position: center;
  padding-top: 90px;
  min-height: 700px;
  height: 100vh;
  margin-bottom: 7em;
  padding: 0 10px;
  .wrp {
    max-width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .content {
    max-width: 600px;
    padding-top: 2em;
  }
  .img {
    max-width: 420px;
    width: 100%;
  }
  h1 {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 0.7em;
    color: #0c0c3e;
    line-height: 1.5em;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: #585858;
    line-height: 1.7em;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 900px) {
    .img {
      display: none;
    }
    .content {
      max-width: unset;
    }
    .wrp {
      justify-content: center;
      align-items: center;
    }
    h1 {
      font-size: 32px;
      letter-spacing: 1px;
    }
    p {
      font-size: 18px;
    }
  }
`
