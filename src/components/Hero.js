import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Hero = ({ hero, title, subtitle }) => {
  const goto = () => {
    document.querySelector("#first-heading").scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <Container>
      <div className="wrp">
        <div className="content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
        <Img fluid={hero.childImageSharp.fluid} className="img" />
      </div>
      <div className="hero__scroll-indicator" onClick={() => goto()}>
        <span className="hero__scroll-text">Scroll</span>
        <span className="icon-chevron-down" id="scrollToNextSection"></span>
      </div>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  background: url(${require("../images/bg-home.png")});
  background-size: cover;
  padding-top: 90px;
  min-height: 700px;
  height: 85vh;
  margin-bottom: 7em;
  padding: 0 10px;

  .hero__scroll-indicator {
    position: absolute;
    animation: scrollindicator 2s 3;
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  @keyframes scrollindicator {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }
    40% {
      -webkit-transform: translate(-50%, -1.5rem);
      transform: translate(-50%, -1.5rem);
    }
    60% {
      -webkit-transform: translate(-50%, -0.75rem);
      transform: translate(-50%, -0.75rem);
    }
  }
  .hero__scroll-text {
    display: none;
    color: #645dff;
    font-size: 0.8125rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    opacity: 0.7;
  }
  .icon-chevron-down {
    color: #645dff;
    display: block;
    font-size: 0.68rem;
    height: 2.5rem;
    line-height: 2.5rem;
    opacity: 0.9;
    text-align: center;
    width: 2.5rem;
    transition: color 200ms;
    position: relative;
  }
  .icon-chevron-down::before {
    content: "";
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    display: inline-block;
    height: 0.8em;
    left: 0em;
    position: relative;
    top: 27%;
    transform: rotate(135deg);
    vertical-align: top;
    width: 0.8em;
  }
  @media (min-width: 67.5625rem) {
    .hero__scroll-indicator {
      display: block;
      bottom: 2rem;
      right: 1.5rem;
      left: auto;
    }
    .hero__scroll-indicator .icon-chevron-down {
      border: 1px solid #645dff;
      border-radius: 50%;
      cursor: pointer;
    }
    .hero__scroll-text {
      color: #645dff;
      display: block;
      font-size: 0.8125rem;
      margin-bottom: 0.5rem;
      opacity: 0.7;
    }
  }

  .wrp {
    max-width: 1400px;
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
    width: 60vw;
  }
  .img {
    position: absolute !important;
    right: 10em;
    top: 15em;
    max-width: 800px;
  }
  h1 {
    line-height: 1.5em;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 0.7em;
    color: #0c0c3e;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: #585858;
    line-height: 1.7em;
    letter-spacing: 1px;
    text-align: justify;
  }
  button {
    color: #fff;
    background: #625aff;
    border-radius: 100px;
    padding: 12px 32px 13px 32px;
    transition: all 0.5s;
    border: none;
    font-size: 18px;
    margin-top: 2em;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    &:hover {
      background: #736fb7;
    }
  }
  @media only screen and (max-width: 1680px) {
    .img {
      right: 5em;
    }
  }
  @media only screen and (max-width: 1460px) {
    .img {
      right: 10px;
    }
  }
  @media only screen and (max-width: 1300px) {
    .img {
      width: 50vw;
    }
  }
  @media only screen and (max-width: 1200px) {
    h1 {
      font-size: 32px;
      letter-spacing: 1px;
    }
    p {
      font-size: 18px;
    }
    .content {
      max-width: 500px;
    }
  }
  @media only screen and (max-width: 960px) {
    .wrp {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .img {
      display: none;
    }
  }
`
