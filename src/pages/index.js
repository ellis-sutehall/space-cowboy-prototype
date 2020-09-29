import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import Services from "../components/services"

const HomeContent = styled.section`
  width: 100%;
  min-height: 100vh;
`
const Container = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  h1 {
    padding: 6rem 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContent>
      <Container>
        <h1>Home</h1>
      </Container>
    </HomeContent>
    <Services title="Web Design" />
    {/* <Services title="Web Development" /> */}
  </Layout>
)

export default IndexPage
