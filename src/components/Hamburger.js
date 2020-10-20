import React from "react"
import styled from "styled-components"

const Container = styled.div`
  b {
    height: 2px;
    width: 19px;
    background: #736fb7;
    border-radius: 4px;
    margin-bottom: 4px;
    display: block;
  }
`

const Hamburger = () => {
  return (
    <Container>
      <b></b>
      <b></b>
      <b></b>
    </Container>
  )
}

export default Hamburger
