// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

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

const ServicesNavWrap = styled.div`
  width: 100%;
  background-color: #333;
  height: 3rem;
  display: flex;
  justify-content: center;
`
const ServicesNavTitleWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`
const ServicesNavTitle = styled.div`
  font-size: 1.5rem;
  color: white;
  text-transform: uppercase;
`

const ServicesNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    li {
      padding: 0 1.5rem;
      margin: 0;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
  &.sticky {
    position: fixed;
    top: 6rem;
  }
`

const Services = props => {
  const [isSticky, setSticky] = useState(false)

  const ref = useRef(null)

  const handleScroll = () => {
    if (ref.current) {
      if (ref.current.getBoundingClientRect().top <= 96) {
        console.log(ref.current.getBoundingClientRect().top)
        setSticky("sticky")
      }
      if (window.pageYOffset <= ref.current.getBoundingClientRect().top) {
        setSticky("not-sticky")
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      console.log("Scroll removed")
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  return (
    <ServicesWrap>
      <ServicesNavWrap className={isSticky} ref={ref}>
        <Container>
          <ServicesNavTitleWrap>
            <ServicesNavTitle>{props.title}</ServicesNavTitle>
          </ServicesNavTitleWrap>
          <ServicesNav>
            <ul>
              <li>
                <a href="#webDesign">Web Design</a>
              </li>
              <li>
                <a href="#webDev">Web Development</a>
              </li>
            </ul>
          </ServicesNav>
        </Container>
      </ServicesNavWrap>
      <ServicesContent>
        <Container>
          <Title>{props.title}</Title>
        </Container>
      </ServicesContent>
    </ServicesWrap>
  )
}

export default Services
