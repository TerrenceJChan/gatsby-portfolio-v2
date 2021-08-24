import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

import * as s from "./Header.module.css"

const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <header className={s.navbar}>
      <div className={s.navCenter}>
        <div className={s.navHeader}>
          <Link to="/">
            <StaticImage
              src="../assets/images/logo.png"
              alt="Terrence Chan"
              placeholder="blurred"
              layout="constrained"
              height={92}
            />
          </Link>

          <button className={s.navBtn} onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div
          className={show ? `${s.navLinks} ${s.showLinks}` : `${s.navLinks}`}
        >
          <Link
            to="/"
            className={s.navLink}
            activeClassName={s.activeLink}
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={s.navLink}
            activeClassName={s.activeLink}
            onClick={() => setShow(false)}
          >
            Projects
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
