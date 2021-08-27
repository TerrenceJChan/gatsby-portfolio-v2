import * as React from "react"

import * as s from "./Section.module.css"

const Section = ({ children }) => {
    return (
        <section className={s.content}>
            {children}
        </section>
    )
}

export default Section
