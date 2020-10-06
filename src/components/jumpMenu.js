import React, { useEffect } from "react"
import { myContext } from "../../provider"
import styled from "styled-components"
import ScrollOut from "scroll-out"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const ServicesNavWrap = styled.div`
  width: 100%;
  background-color: #333;
  height: 3rem;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 6rem;
  &.sticky {
    position: fixed;
    top: 6rem;
  }
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
        &.active {
          color: lightblue;
        }
      }
    }
  }
`

const JumpMenu = props => {
  // const [isSticky, setSticky] = useState(false)

  // const ref = useRef(null)

  // const handleScroll = () => {
  //   // if (ref.current) {
  //   //   if (ref.current.getBoundingClientRect().top <= 96) {
  //   //     console.log(ref.current.getBoundingClientRect().top)
  //   //     setSticky("sticky")
  //   //   }
  //   //   if (window.pageYOffset <= ref.current.getBoundingClientRect().top) {
  //   //     setSticky("not-sticky")
  //   //   }
  //   // }
  //   let jumpMenu = document.getElementById("jumpMenu")
  //   // let siteHeader = document.getElementById("siteHeader")
  //   // let stickyPos = siteHeader.offsetTop
  //   let stickyPos = jumpMenu.offsetTop

  //   // console.log(jumpMenu)
  //   console.log(stickyPos)
  //   // console.log(window.pageYOffset)
  //   if (window.pageYOffset >= stickyPos - 96) {
  //     jumpMenu.classList.add("sticky")
  //   } else {
  //     jumpMenu.classList.remove("sticky")
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)
  //   return () => {
  //     console.log("Scroll removed")
  //     window.removeEventListener("scroll", () => handleScroll)
  //   }
  // }, [])

  useEffect(() => {
    console.log("Did this work?")
    ScrollOut({})
    return () => {
      console.log("Probably not")
      ScrollOut().teardown()
    }
  }, [])

  return (
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <ServicesNavWrap id="jumpMenu">
            <Container>
              <ServicesNavTitleWrap>
                <ServicesNavTitle>{context.serviceTitle}</ServicesNavTitle>
              </ServicesNavTitleWrap>
              <ServicesNav>
                <ul>
                  <li>
                    <AnchorLink className="web-design" to="/#webdesign">
                      Web Design
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink className="web-dev" to="/#webdevelopment">
                      Web Development
                    </AnchorLink>
                  </li>
                </ul>
              </ServicesNav>
            </Container>
          </ServicesNavWrap>
        </React.Fragment>
      )}
    </myContext.Consumer>
  )
}

export default JumpMenu
