import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Container = styled.div`
  padding: 7em 10px 10em 10px;
  max-width: 1300px;
  margin: auto;

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-column-gap: 2em;
    grid-row-gap: 6em;
  }
  h1 {
    line-height: 1.5em;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 2em;
    color: #0c0c3e;
    text-align: center;
  }

  h5 {
    margin-top: 3.5em !important;
    margin-bottom: 1.25em !important;
    font-weight: 700;
    font-size: 14px !important;
    text-align: center;
    color: #675fff;
  }
  h4 {
    font-size: 22px;
    letter-spacing: 1px;
    font-weight: 600;
    color: #2a263d;
    line-height: 1.6em;
    text-align: center;
  }
  hr {
    margin: 2em auto;
    width: 60px;
    height: 5px;
    background: #000;
  }
  h6 {
    text-align: center;
    font-size: 18px !important;
    font-weight: 600;
    margin-bottom: 1.5em;
  }
  p {
    text-align: justify;
    color: #2a263d;
    font-size: 16px;
    line-height: 1.6em;
    font-weight: 500;
  }
  a {
    cursor: pointer;
  }
  .img-wrp {
    position: relative;
  }
  .post-img {
    max-height: 400px;
    z-index: 2;
    min-height: 400px;
  }
  .triangle {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 5%;
  }
  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 32px !important;
    }
  }
`

const LatestPosts = ({ data }) => {
  return (
    <Container>
      <h1>Recent blog posts</h1>
      <div className="cards">
        {data.nodes.map((post, index) => (
          <div className="post-card" key={index}>
            <div className="img-wrp">
              <Link
                to={post.title
                  .split(" ")
                  .join("-")
                  .toLowerCase()}
              >
                <Img
                  fluid={post.thumbnail.fluid}
                  alt="post"
                  className="post-img"
                />
              </Link>
              <img
                src={require("../images/triangle.png")}
                className="triangle"
                alt="triangle"
              />
            </div>
            <h5>{post.category}</h5>
            <Link
              to={post.title
                .split(" ")
                .join("-")
                .toLowerCase()}
            >
              <h4>{post.title}</h4>
            </Link>
            <hr />
            <h6>{post.publishDate}</h6>
            <p>{post.description.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default LatestPosts
