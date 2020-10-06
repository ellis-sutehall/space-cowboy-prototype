import React from "react"
import styled from "styled-components"

const Button = styled.a`
  display: inline-block;
  background-color: #333;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  text-transform: uppercase;
`

const Cta = props => (
  <Button className="btn btn-primary" href={props.destination}>
    {props.linktext}
  </Button>
)

export default Cta
