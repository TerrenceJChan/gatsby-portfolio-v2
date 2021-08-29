import * as React from "react"

import * as s from "./Section.module.css"

const Section = ({ children }) => {
    return (
        <section className={s.wrapper}>
            <div className={s.content}>
                {children}
            </div>
        </section>
    )
}

export default Section
