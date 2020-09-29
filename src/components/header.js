import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const SiteHeader = styled.header`
  background-color: #333;
  border-bottom: 2px solid white;
  height: 6rem;
  position: fixed;
  width: 100%;
  top: 0;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`
const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const HomeLink = styled.div`
  width: 30%;
  margin: 0;
  a {
    color: white;
    font-size: 2rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`
const HeaderNav = styled.nav`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    li {
      padding: 0 1.5rem;
      margin: 0;
      a {
        font-family: sans-serif;
        text-decoration: none;
        color: white;
        text-transform: uppercase;
      }
    }
  }
`
const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Container>
      <HeaderWrap>
        <HomeLink>
          <Link to="/">{siteTitle}</Link>
        </HomeLink>
        <HeaderNav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </HeaderNav>
      </HeaderWrap>
    </Container>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
