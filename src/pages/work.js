import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import styled from "styled-components"
import Hero from "../components/hero"

const Work = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        headline="Work"
        subtitle="Portfolio of our Web Design and Development Work"
        // subtitletwo="That are Fast, Secure and Modern"
      />
    </Layout>
  )
}

export default Work
