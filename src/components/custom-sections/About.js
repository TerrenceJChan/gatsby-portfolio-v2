import * as React from "react"
import Section from "../Section"

import * as s from "../Section.module.css"


const About = (props) => {
    return (
        <Section header={"About"}>
            <div className={s.FlexBox}>
                <div className={s.FlexBox_flexItem___left}>
                    <h3>Study Foci</h3>
                </div>
                <div className={s.FlexBox_flexItem___right}>
                    <div className={s.Card___small}>Business (Major)</div> 
                    <div className={s.Card___small}>Political Science (Major)</div> 
                    <div className={s.Card___small}>Economics (Minor)</div> 
                    <div className={s.Card___small}>International Trade (Minor)</div> 
                </div>
            </div>
            <div className={s.FlexBox}>
                <div className={s.FlexBox_flexItem___left}>
                    <h3>My Hobbies</h3>
                </div>
                <div className={s.FlexBox_flexItem___right}>
                    <div className={s.Card___small}>Running</div> 
                    <div className={s.Card___small}>Reading</div> 
                    <div className={s.Card___small}>Bouldering</div> 
                    <div className={s.Card___small}>Gaming</div> 
                    <div className={s.Card___small}>Dragon Boating</div> 
                </div>
            </div>
        </Section>
    )
}

export default About
