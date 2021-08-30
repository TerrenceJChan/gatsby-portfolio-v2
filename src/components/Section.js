import * as React from "react"

import * as s from "./Section.module.css"

const Section = (props) => {
    return (
        <section className={s.wrapper}>
            <div className={s.Content}>
                <h2>{props.header}</h2>
                {props.children}
            </div>
        </section>
    )
}

export default Section
