import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ServicesSection = ({ data }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const services = data.nodes[0].servicesPageSection
    const cats = []

    for (let i = 0; i < services.length; i++) {
      if (cats.indexOf(services[i].category) < 0) {
        cats.push(services[i].category)
      }
    }
    setCategories(cats)
  }, [])
  return (
    <Container>
      <div className="wrp">
        {categories.map((cat, index) => (
          <div key={index}>
            <h1 className="first-heading">{cat}</h1>
            <div className="cards">
              {data.nodes[0].servicesPageSection.map((item, index) => {
                if (item.category === cat)
                  return (
                    <div className="card" key={index}>
                      <Img
                        fluid={item.image.fluid}
                        alt="Think autom8"
                        className="img"
                      />
                      <div className="card-content">
                        <h2>{item.heading}</h2>
                        <p>{item.text.text}</p>
                      </div>
                    </div>
                  )
              })}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default ServicesSection

const Container = styled.div`
  padding: 0px 10px;
  .wrp {
    padding: 5em 10px;
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
    padding-left: 4em;
  }
  p {
    text-align: justify;
    color: #585858;
    line-height: 1.7em;
    font-weight: 500;
    font-size: 18px !important;
  }
  h1 {
    color: #0c0c3e;
    margin-bottom: 1em;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 2px;
  }
  h2 {
    color: #0c0c3e;
    margin-bottom: 0.75em;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .first-heading {
    text-align: center;
  }
  .img {
    min-width: 340px;
  }
  @media only screen and (max-width: 900px) {
    .card {
      flex-direction: column !important;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .card-content {
      padding-left: 0em;
    }
    .img {
      max-height: 400px;
      margin-bottom: 1em;
    }
  }
`
