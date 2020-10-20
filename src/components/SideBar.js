import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  nav {
    width: 0em;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    transition: width 0.8s ease;
    background: #f5f5f9;
    white-space: nowrap;
    overflow: hidden;
    z-index: 20000;
    color: #736fb7;
    max-width: 375px;
  }
  .sidebar-content {
    width: 100%;
    height: 100%;
    margin: 100px auto;
    font-size: 1.2em;
    letter-spacing: 2px;
    display: flex;
    flex-direction: column;
    padding: 0 2em;
  }
  .SideBar-active {
    width: 100vw;
  }
  a {
    width: min-content;
    font-size: 14px;
    margin: 0px 20px;
    font-weight: 600;
    cursor: pointer;
    margin: 1em 0;
    padding: 2px 0;
    transition: all 0.3s ease;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid #736fb7;
    }
  }
  .close {
    float: right;
    margin-right: 2.8em;
    margin-top: 2.2em;
    cursor: pointer;
    fill: #736fb7;
  }
  .nav-btn {
    width: 100%;
    text-align: center;
  }
`

const SideBar = ({ SideBarIsActive, toggleSideBar }) => {
  return (
    <Container>
      <nav className={SideBarIsActive ? `SideBar-active` : ``}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          className="close"
          onClick={() => toggleSideBar(!SideBarIsActive)}
        >
          <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
        </svg>
        <div className="sidebar-content">
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
          <Link className="footer-item nav-btn" to="/contact">
            Get In Touch
          </Link>
        </div>
      </nav>
    </Container>
  )
}

export default SideBar
