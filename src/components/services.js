// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { myContext } from "../../provider"
import styled from "styled-components"
import ScrollOut from "scroll-out"

const ServicesWrap = styled.section`
  width: 100%;
  background-color: #f5f5f5;
`

const ServicesContent = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  color: black;
  padding: 4rem 0;
`

const Services = props => {
  useEffect(() => {
    // console.log("Did this work?")
    let serviceMenuDesign = document.querySelector(".web-design")
    let serviceMenuDev = document.querySelector(".web-dev")

    ScrollOut({
      threshold: 0.2,
      onShown: function (el, ctx) {
        if (el.id === "webdesign") {
          if (serviceMenuDesign) {
            serviceMenuDesign.classList.add("active")
          }
        } else if (el.id === "webdevelopment") {
          if (serviceMenuDev) {
            serviceMenuDev.classList.add("active")
          }
        }
      },
      onHidden: function (el, ctx) {
        if (el.id === "webdesign") {
          if (serviceMenuDesign) {
            serviceMenuDesign.classList.remove("active")
          }
        } else if (el.id === "webdevelopment") {
          if (serviceMenuDev) {
            serviceMenuDev.classList.remove("active")
          }
        }
      },
    })
    return () => {
      ScrollOut().teardown()
    }
  }, [])

  let serviceId = props.title.toLowerCase()
  serviceId = serviceId.replace(" ", "")
  return (
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <ServicesWrap id={serviceId} data-scroll>
            <ServicesContent>
              <Container>
                <Title>{props.title}</Title>
              </Container>
            </ServicesContent>
          </ServicesWrap>
        </React.Fragment>
      )}
    </myContext.Consumer>
  )
}

export default Services
