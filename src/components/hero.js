import React from "react"
import styled from "styled-components"
import Button from "./button"

const Herowrap = styled.section`
  width: 100%;
  height: calc(100vh - (48px + 96px));
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Hero = props => {
  return (
    <Herowrap>
      <Container>
        <h1>{props.headline}</h1>
        <h2>{props.subtitle}</h2>
        <h2>{props.subtitletwo}</h2>
        <Button destination="/work" linktext="See what we've created" />
      </Container>
    </Herowrap>
  )
}

export default Hero
