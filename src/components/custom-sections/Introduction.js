import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../Section"

import * as s from "../Section.module.css"


const Intro = (props) => {
    return (
        <Section header={"Introduction"}>
            <div className={s.FlexBox}>
                <div className={s.FlexBox_flexItem___column}>
                    <StaticImage
                        src="../../assets/images/terrence-800x800.png"
                        placeholder="blurred"
                        height={200}
                    />
                </div>
                <div className={s.FlexBox_flexItem___column}>
                    <p>Heya!</p>
                </div>
                <div className={s.FlexBox_flexItem___column}>
                    <p>My name's Terrence.</p>
                </div>
                <div className={s.FlexBox_flexItem___column}>
                    <p>I do Front-End Development.</p>
                </div>
            </div>
        </Section>
    )
}

export default Intro
