import React from "react"
import Layout from "../templates/DefaultLayout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import RichText from "../components/RichText"

const Terms = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulTermsOfServicePage {
        heading
        body {
          json
        }
      }
    }
  `)

  return (
    <Container>
      <Layout>
        <div className="content">
          <h1>{data.contentfulTermsOfServicePage.heading}</h1>
          <RichText data={data.contentfulTermsOfServicePage.body.json} />
        </div>
      </Layout>
    </Container>
  )
}

export default Terms

const Container = styled.div`
  background: #f2f2f7;
  color: #020836;
  padding-top: 90px;
  h1 {
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.5em;
    font-size: 36px;
    letter-spacing: 1px;
  }
  .content {
    max-width: 1000px;
    margin: auto;
    padding: 7em 0;
  }
`
