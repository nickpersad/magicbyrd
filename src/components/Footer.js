import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 250, height: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <div className="footer-top">
        <div className="footer-top-item">
          <Img fixed={data.file.childImageSharp.fixed} className="logo" />
        </div>
        <div className="footer-top-item">
          <Link className="footer-item" to="/">
            Home
          </Link>
          <Link className="footer-item" to="/about">
            About
          </Link>
          <Link className="footer-item" to="/services">
            Services
          </Link>
          <Link className="footer-item" to="/blog">
            Blog
          </Link>
          <Link className="footer-item" to="/contact">
            Contact
          </Link>
        </div>
        <div className="footer-top-item">
          <Link className="footer-item" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="footer-item" to="/terms">
            Terms of Service
          </Link>
          <a className="footer-item" href="https://twitter.com/">
            Twitter
          </a>
          <a className="footer-item" href="https://facebook.com/">
            Facebook
          </a>
          <a className="footer-item" href="https://instagram.com/">
            Instagram
          </a>
        </div>
        <div className="footer-top-item email">
          <h6>Get in touch</h6>
          <a href="mailto:nick@magicbyrd.com">nick@magicbyrd.com</a>
          <a href="callto:+15618666912">(561) 866-6912</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copyright">Copyright 2020 © All rights Reserved</span>
      </div>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  padding: 9em 10px 2em 10px;
  background: url(${require("../images/path1.png")});
  color: #736fb7;
  background-size: cover;
  h6 {
    font-size: 20px;
    font-weight: 500;
    color: #444;
    margin-bottom: 0.8em;
  }
  a {
    padding: 0.4em 0;
    font-weight: 500;
  }
  .footer-top {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .footer-top-item {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }
  .footer-top-item:first-child {
    justify-content: center;
    align-items: center;
  }
  .footer-bottom {
    color: #444;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    span {
      margin: 0.5em 0;
      font-weight: 500;
    }
  }
  @media only screen and (max-width: 840px) {
    .footer-top {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .email {
      margin-top: 1.5em;
    }
    .footer-top-item {
      align-items: center;
    }
    .logo {
      margin-bottom: 1.5em;
    }
    .footer-bottom {
      margin-top: 2em;
    }
    a {
      font-size: 15px;
    }
    h6 {
      margin-bottom: 0.5em;
    }
  }
`
