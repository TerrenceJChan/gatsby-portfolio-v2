import React from "react"

import * as s from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={s.content}>
      © Terrence Chan {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
