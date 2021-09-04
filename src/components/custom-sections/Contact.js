import * as React from "react"
import Section from "../Section"

import * as s from "../Section.module.css"

const Contact = props => {
  return (
    <Section header={"Contact"}>
      <div className={s.FlexBox} id="contact">
        <div className={s.FlexBox_flexItem___column}>
          <p>Let's chat! I promise to be on my best behaviour! 😇</p>
        </div>
      </div>
      <div className={s.FlexBox}>
        <div className={s.FlexBox_flexItem___left}>
          <h3>Email</h3>
        </div>
        <div className={s.FlexBox_flexItem___right}>
          <a href="mailto:contact@terrencejchan.com">
            contact@terrencejchan.com
          </a>
        </div>
      </div>
      <div className={s.FlexBox}>
        <div className={s.FlexBox_flexItem___left}>
          <h3>GitHub</h3>
        </div>
        <div className={s.FlexBox_flexItem___right}>
          <a
            href="https://github.com/TerrenceJChan"
            target="_blank"
            rel="noreferrer"
          >
            View my projects!
          </a>
        </div>
      </div>
      <div className={s.FlexBox}>
        <div className={s.FlexBox_flexItem___left}>
          <h3>LinkedIn</h3>
        </div>
        <div className={s.FlexBox_flexItem___right}>
          <a
            href="https://www.linkedin.com/in/terrencejchan/"
            target="_blank"
            rel="noreferrer"
          >
            Let's connect!
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Contact
