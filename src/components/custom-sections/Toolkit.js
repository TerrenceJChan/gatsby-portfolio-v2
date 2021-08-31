import * as React from "react"
import Section from "../Section"

import * as s from "../Section.module.css"

const Toolkit = props => {
  return (
    <Section header={"Toolkit"}>
      <div className={s.FlexBox} id="toolkit">
        <div className={s.FlexBox_flexItem___left}>
          <h3>Everyday Tools</h3>
        </div>
        <div className={s.FlexBox_flexItem___right}>
          <div className={s.Card___small}>HTML</div>
          <div className={s.Card___small}>CSS</div>
          <div className={s.Card___small}>SCSS</div>
          <div className={s.Card___small}>JS</div>
          <div className={s.Card___small}>Node.js</div>
        </div>
      </div>
      <div className={s.FlexBox}>
        <div className={s.FlexBox_flexItem___left}>
          <h3>Favourite Frameworks</h3>
        </div>
        <div className={s.FlexBox_flexItem___right}>
          <div className={s.Card___small}>React.js</div>
          <div className={s.Card___small}>Next.js</div>
          <div className={s.Card___small}>Gatsby.js</div>
        </div>
      </div>
      <div className={s.FlexBox}>
        <div className={s.FlexBox_flexItem___left}>
          <h3>Currently Studying</h3>
        </div>
        <div className={s.FlexBox_flexItem___right}>
          <div className={s.Card___small}>SQL</div>
          <div className={s.Card___small}>PostgreSQL</div>
          <div className={s.Card___small}>GraphQL</div>
        </div>
      </div>
      <div className={s.FlexBox}>
        <div className={s.FlexBox_flexItem___left}>
          <h3>Additional Skills</h3>
        </div>
        <div className={s.FlexBox_flexItem___right}>
          <div className={s.Card___small}>SEO</div>
          <div className={s.Card___small}>WordPress</div>
          <div className={s.Card___small}>Google Webmaster Tools</div>
        </div>
      </div>
    </Section>
  )
}

export default Toolkit
