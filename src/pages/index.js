import React from "react"
import Layout from "../templates/DefaultLayout"
import Hero from "../components/Hero"
import FAQ from "../components/FAQ"
import Testimonials from "../components/Testimonials"
import { useStaticQuery, graphql } from "gatsby"
import HomeSection from "../components/HomeSection"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1214, maxHeight: 912) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1: file(relativePath: { eq: "test.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2: file(relativePath: { eq: "bg-2.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 767, maxHeight: 632) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tests: allContentfulTestimonials {
        nodes {
          name
          testimonial {
            testimonial
          }
          profession
          avatar {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
      questions: allContentfulFaq {
        nodes {
          answer {
            answer
          }
          question {
            question
          }
        }
      }
      homeSection: allContentfulHomePage {
        nodes {
          heading
          heroTitle
          heroSubtitle {
            heroSubtitle
          }
          homePageSection {
            heading
            text {
              text
            }
            image {
              fluid {
                ...GatsbyContentfulFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Hero
        hero={data.hero}
        title={data.homeSection.nodes[0].heroTitle}
        subtitle={data.homeSection.nodes[0].heroSubtitle.heroSubtitle}
      />
      <HomeSection data={data.homeSection} />
      <Testimonials data={data.tests} img={data.img1} />
      <FAQ data={data.questions} img={data.img2} />
    </Layout>
  )
}

export default IndexPage
