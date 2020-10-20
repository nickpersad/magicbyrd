import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Testimonials = ({ data, img }) => {
  return (
    <Container>
      <div className="wrp">
        <Img fixed={img.childImageSharp.fixed} className="img" />
        <h1>​« A recognized experience »​</h1>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          transitionTime={1000}
          emulateTouch={true}
          infiniteLoop={false}
          autoPlay={true}
          interval={5000}
        >
          {data.nodes.map((node, index) => (
            <div className="test-box" key={index}>
              <Img fluid={node.avatar.fluid} className="avatar" />
              <p className="name">
                {node.name} - {node.profession}
              </p>
              <p className="quote">{node.testimonial.testimonial}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  )
}

export default Testimonials

const Container = styled.div`
  background: url(${require("../images/path.png")});
  background-size: cover;
  .wrp {
    max-width: 1300px;
    margin: 0 auto;
    padding: 5em 10px 9em 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .carousel-root {
    width: 100%;
  }
  .carousel .slide {
    background: transparent;
  }
  h1 {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 1em;
    color: #0c0c3e;
    text-align: center;
  }

  .test-box {
    padding: 2em 1em 1em 1em;
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .quote {
    color: #7a7a7a;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    line-height: 1.6em;
  }
  .name {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    letter-spacing: 1px;
    margin: 0.8em 0 1em 0;
  }
  .avatar {
    width: 90px;
    height: 90px;
    border-radius: 100px;
  }
`
