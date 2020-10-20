import React from "react"
import Layout from "../templates/DefaultLayout"
import AboutHero from "../components/AboutHero"
import AboutSection from "../components/AboutSection"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutSection: allContentfulAboutPage {
        nodes {
          heading
          heroTitle
          heroSubtitle {
            heroSubtitle
          }
          aboutPageSection {
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
      <AboutHero
        title={data.aboutSection.nodes[0].heroTitle}
        subtitle={data.aboutSection.nodes[0].heroSubtitle.heroSubtitle}
      />
      <AboutSection data={data.aboutSection} />
    </Layout>
  )
}

export default About
