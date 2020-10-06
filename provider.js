import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = props => {
  const [serviceTitle, setServiceTitle] = useState("Services")

  return (
    <myContext.Provider value={{ serviceTitle }}>
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
