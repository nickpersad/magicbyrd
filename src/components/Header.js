import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Hamburger from "./Hamburger"
import SideBar from "./SideBar"
import { useStaticQuery, graphql, Link } from "gatsby"

const Header = () => {
  const [SideBarIsActive, toggleSideBar] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 230, height: 70, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Container>
      <nav className="header-wrapper">
        <Link to="/" className="logo-link">
          i
          <Img fixed={data.file.childImageSharp.fixed} className="logo" />
        </Link>
        <ul className="right-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li className="btn-li">
            <Link to="/contact" className="nav-btn">
              Get In Touch
            </Link>
          </li>
        </ul>
        <span
          className="hamburger"
          onClick={() => toggleSideBar(!SideBarIsActive)}
        >
          <Hamburger />
        </span>
      </nav>
      <SideBar
        SideBarIsActive={SideBarIsActive}
        toggleSideBar={toggleSideBar}
      />
    </Container>
  )
}
export default Header

const Container = styled.div`
  max-width: 1920px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 100%;
  position: absolute;
  top: 0;
  .header-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    z-index: 2;
    padding: 10px 2em;
    transition: all 0.5s;
    max-width: 1500px;
    margin: auto;
  }
  .logo-link {
    display: flex;
    color: #000;
    font-size: 1px;
  }
  .right-nav {
    display: flex;
    align-items: center;
  }
  .hamburger {
    display: none;
    margin-right: 1.5em;
    margin-top: 2px;
    cursor: pointer;
  }
  li {
    margin: 0 1.5em;
    font-size: 16px;
    font-weight: 500;
    color: #736fb7;
    transition: all 0.5s;
    padding: 2px 0;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid #736fb7;
    }
  }
  .btn-li {
    border: none !important;
  }
  .nav-btn {
    color: #fff;
    background: #625aff;
    border-radius: 100px;
    padding: 12px 32px 13px 32px;
    transition: all 0.5s;
    &:hover {
      background: #736fb7;
    }
  }
  @media only screen and (max-width: 900px) {
    .right-nav {
      display: none;
    }
    .hamburger {
      display: block;
    }
    .header-wrapper {
      padding: 10px 1em;
    }
  }
`
