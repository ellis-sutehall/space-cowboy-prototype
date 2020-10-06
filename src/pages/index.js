import React from "react"
import { myContext } from "../../provider"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import styled from "styled-components"
import Hero from "../components/hero"
import Services from "../components/services"
import JumpMenu from "../components/jumpMenu"

const IndexPage = () => {
  return (
    <Layout>
      <myContext.Consumer>
        {context => (
          <React.Fragment>
            <SEO title="Home" />
            <Hero
              headline="Space Cowboy"
              subtitle="We make beautiful Websites"
              subtitletwo="That are Fast, Secure and Modern"
            />
            <JumpMenu />
            <Services title="Web Design" />
            <Services title="Web Development" />
          </React.Fragment>
        )}
      </myContext.Consumer>
    </Layout>
  )
}

export default IndexPage
