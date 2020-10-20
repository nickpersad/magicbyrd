import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const FAQ = ({ data, img }) => {
  const [question, setQuestion] = useState(-1)

  return (
    <Container>
      <div className="content">
        <h1>FAQ</h1>
        {data.nodes.map((node, index) => (
          <div
            className="question-card"
            id={`question-card-${index}`}
            key={index}
          >
            <div className="infos" onClick={() => setQuestion(index)}>
              <h4>{node.question.question}</h4>
              <p
                id={`answer-${index}`}
                style={
                  index === question
                    ? { height: "auto", paddingTop: "0.75em" }
                    : {}
                }
              >
                {node.answer.answer}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              id={`plus-${index}`}
              onClick={() => setQuestion(index)}
              style={index === question ? { display: "none" } : {}}
            >
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              className="minus"
              id={`minus-${index}`}
              onClick={() => setQuestion(-1)}
              style={index === question ? { display: "block" } : {}}
            >
              <path d="M0 10h24v4h-24z" />
            </svg>
          </div>
        ))}
      </div>
      <div className="illustarion">
        <Img fluid={img.childImageSharp.fluid} className="img" />
      </div>
    </Container>
  )
}

export default FAQ

const Container = styled.div`
  display: grid;
  grid-template-columns: 64% 35%;
  max-width: 1300px;
  margin: auto;
  padding: 5em 10px;
  grid-gap: 1%;
  .content {
    max-width: 750px;
  }
  .illustarion,
  .img {
    width: 100%;
    margin-top: 2em;
  }
  .infos {
    cursor: pointer;
  }
  h1 {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 1em;
    color: #0c0c3e;
    text-align: justify;
  }
  h4 {
    color: #585858;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0;
    font-weight: 600;
    text-transform: uppercase;
  }
  p {
    color: #7a7a7a;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 26px;
    font-weight: 500;
    padding-right: 1em;
    height: 0px;
    overflow: hidden;
    transition: all 0.6s;
  }
  .minus {
    display: none;
  }
  .question-card {
    border: 2px solid #e4e7f3;
    padding: 20px;
    margin: 1.5em 0;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg {
    fill: #1d2b3f;
    min-width: 25px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1160px) {
    grid-template-columns: 100%;
    grid-gap: 0%;
    .img {
      display: none;
    }
    .content {
      max-width: unset;
    }
  }
  @media only screen and (max-width: 840px) {
    h2 {
      font-size: 28px !important;
      line-height: 1.2em;
    }
    h4 {
      font-size: 18px;
    }
  }
`
