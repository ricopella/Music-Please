import React, { FC } from 'react'
import './layout.css'

const Layout: FC<{}> = ({ children }) => (
  <div className="container">{children}</div>
)

export default Layout
