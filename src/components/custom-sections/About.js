import * as React from "react"
import Section from "../Section"

import * as s from "../Section.module.css"


const About = (props) => {
    return (
        <Section header={"About"}>
            <div className={s.FlexBox}>
                <div className={s.FlexBox_flexItem___left}>
                    <h3>My Hobbies</h3>
                </div>
                <div className={s.FlexBox_flexItem___right}>
                    <h3>My Hobbies</h3>
                </div>
            </div>
        </Section>
    )
}

export default About
