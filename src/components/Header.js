import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

import * as s from "./Header.module.css"
// import logo from "../assets/images/logo.svg"

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
            {/* <img src={logo} alt="Terrence Chan" id="logo"/> */}
          </Link>

          <button className={s.navBtn} onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div
          className={show ? `${s.navLinks} ${s.showLinks}` : `${s.navLinks}`}
        >
          {/* <Link
            to="/"
            className={s.navLink}
            activeClassName={s.activeLink}
            onClick={() => setShow(false)}
          >
            Home
          </Link> */}
          <a href="#intro" className={s.navLink} onClick={() => setShow(!show)}>
            Intro
          </a>
          <a href="#about" className={s.navLink} onClick={() => setShow(!show)}>
            About
          </a>
          <a
            href="#experiences"
            className={s.navLink}
            onClick={() => setShow(!show)}
          >
            Experiences
          </a>
          <a
            href="#toolkit"
            className={s.navLink}
            onClick={() => setShow(!show)}
          >
            Toolkit
          </a>
          <a
            href="#contact"
            className={s.navLink}
            onClick={() => setShow(!show)}
          >
            Contact
          </a>
          {/* <Link
            to="/projects"
            className={s.navLink}
            activeClassName={s.activeLink}
            onClick={() => setShow(false)}
          >
            Projects
          </Link> */}
        </div>
      </div>
    </header>
  )
}

export default Header
