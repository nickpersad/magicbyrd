import React from "react"
import Layout from "../templates/DefaultLayout"
import ServicesHero from "../components/ServicesHero"
import { useStaticQuery, graphql } from "gatsby"
import ServicesSection from "../components/ServicesSection"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      servicesSection: allContentfulServicesPage {
        nodes {
          heroTitle
          heroSubtitle {
            heroSubtitle
          }
          servicesPageSection {
            category
            heading
            image {
              fluid {
                ...GatsbyContentfulFluid_noBase64
              }
            }
            text {
              text
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ServicesHero
        title={data.servicesSection.nodes[0].heroTitle}
        subtitle={data.servicesSection.nodes[0].heroSubtitle.heroSubtitle}
      />
      <ServicesSection data={data.servicesSection} />
    </Layout>
  )
}

export default Services
