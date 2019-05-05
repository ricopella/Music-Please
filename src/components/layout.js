import React from "react"
import "./layout.css"

const Layout = ({ children, style }) => (
  <div className="container" style={style}>
    {children}
  </div>
)

export default Layout
