import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../Section"

import * as s from "../Section.module.css"

const Intro = props => {
  return (
    <Section header={"Introduction"}>
      <div className={s.FlexBox} id="intro">
        <div className={s.FlexBox_flexItem___column}>
          <StaticImage
            src="../../assets/images/terrence-800x800.png"
            alt="Terrence's headshot"
            placeholder="blurred"
            layout="constrained"
            width={400}
            heght={400}
          />
        </div>
        <div className={s.FlexBox_flexItem___column}>
          <div>
            <p>
              Hey! My name's <span class="highlight">Terrence</span>
            </p>
            <p>
              I do <span class="highlight">Front-End Development</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Intro
