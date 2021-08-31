import * as React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
// import Footer from "./Footer"
import "../assets/css/normalize.css"
import "../assets/css/global.css"
import * as s from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={s.scrollContainer}>{children}</div>
      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
