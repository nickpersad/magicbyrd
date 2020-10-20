import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const HomeSection = ({ data }) => {
  return (
    <Container>
      <div className="wrp">
        <h1 className="first-heading" id="first-heading">
          {data.nodes[0].heading}
        </h1>
        <div className="cards">
          {data.nodes[0].homePageSection.map((item, index) => (
            <div className="card" key={index}>
              <Img
                fluid={item.image.fluid}
                alt="Think autom8"
                className="img"
              />
              <div className="card-content">
                <h1>{item.heading}</h1>
                <p>{item.text.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default HomeSection

const Container = styled.div`
  padding: 0px 10px;
  .wrp {
    padding: 7em 10px;
    max-width: 1300px;
    margin: auto;
  }
  .card {
    display: flex;
    justify-content: space-between;
    padding: 5em 10px;
    max-width: 1300px;
    margin: auto;
  }
  .card-content {
    padding-left: 5em;
    padding-top: 1.25em;
    max-width: 850px;
  }
  .card:nth-child(odd) {
    flex-direction: row-reverse;
    padding-right: 30px;
    .card-content {
      padding-left: 0em;
      padding-right: 5em;
    }
  }
  p {
    text-align: justify;
    color: #585858;
    line-height: 1.7em;
    font-weight: 500;
    max-width: 620px;
    font-size: 18px !important;
  }
  h1 {
    color: #0c0c3e;
    margin-bottom: 1em;
    font-size: 36px;
    font-weight: 700;
  }
  .first-heading {
    text-align: center;
  }
  .img {
    width: 100%;
    height: 100%;
    max-width: 620px;
    border-radius: 4px;
  }
  @media only screen and (max-width: 1130px) {
    .card {
      flex-direction: column !important;
      justify-content: center;
      align-items: center;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .card:nth-child(odd) {
      padding-right: 0px !important;
    }
    .card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: unset;
      padding-left: unset;
      padding-right: unset !important;
    }
    h1 {
      margin-top: 0.75em;
      margin-bottom: 0.5em;
      text-align: center;
      width: 100%;
    }
    .item {
      max-width: 600px;
    }
  }
`
