import React from 'react'

import Header from "../Header/Header"
import StyleMedia from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={StyleMedia.wrapper}>
      <Header />
      <div className={StyleMedia.main}>
        {children}
      </div>
    </div>
  )
}

export default Layout
