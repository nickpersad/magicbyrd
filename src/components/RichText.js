import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

const Container = styled.div`
  color: #020836;
  h1 {
    font-weight: 600;
    font-size: 36px;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  h3 {
    font-weight: 600;
    font-size: 22px;
    margin-top: 1em;
    margin-bottom: 0.25em;
  }
  h2 {
    font-weight: 600;
    font-size: 24px;
    margin-top: 1em;
    margin-bottom: 0.25em;
  }
  p {
    font-size: 20px;
    line-height: 1.6em;
  }
`

const RichText = ({ data }) => {
  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Text = ({ children }) => <p className="align-center">{children}</p>
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }
  return <Container>{documentToReactComponents(data, options)}</Container>
}

export default RichText
