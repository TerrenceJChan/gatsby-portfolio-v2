import * as React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
import "../assets/css/global.css"

const Layout = ({ children }) => {

  return (
    <body>
      <Header />


      {children}

      <Footer />
    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
