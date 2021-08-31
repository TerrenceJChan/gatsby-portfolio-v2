import * as React from "react"
import Section from "../Section"

import * as s from "../Section.module.css"

const Experience = props => {
  return (
    <Section header={"Experience"}>
      <div className={s.FlexBox} id="experiences">
        <div className={s.FlexBox_flexItem___left}>
          <div>
            <h3>Sun Life Financial</h3>
            <p>Digital Publisher</p>
            <p>2019 - Present</p>
          </div>
        </div>
        <div className={s.FlexBox_flexItem___right}>
          <div className={s.Card___small}>
            Modernized Sun Life's websites to be AODA compliant.
          </div>
          <div className={s.Card___small}>
            Migrated hundreds of webpages from OpenText's WEM to Adobe
            Experience Manager.
          </div>
          <div className={s.Card___small}>
            Maintained a variety of international sites through AEM.
          </div>
          <div className={s.Card___small}>
            Headed a cleanup project to modernize hundreds of internal pages in
            a timely manner.
          </div>
          <div className={s.Card___small}>
            Renewed legacy web pages using carefully written HTML and CSS.
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Experience
