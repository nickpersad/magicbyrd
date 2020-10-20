import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const AboutHero = ({ title, subtitle }) => {
  return (
    <Container>
      <div className="wrp">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </Container>
  )
}

export default AboutHero

const Container = styled.div`
  background: url(${require("../images/path2.png")});
  background-size: cover;
  padding-top: 90px;
  min-height: 700px;
  height: 100vh;
  margin-bottom: 7em;
  padding: 0 10px;
  .wrp {
    max-width: 1400px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h1 {
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
    text-align: center;
    text-align: center;
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
`
