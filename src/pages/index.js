import * as React from "react"

import Layout from "../components/Layout"
import Section from "../components/Section"
import About from "../components/custom-sections/About"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <About />
        <Section>
          <p>Some more content</p>
        </Section>
        <Section>
          <p>Some more content</p>
        </Section>
        <Section>
          <p>Some more content</p>
        </Section>
        <Section>
          <p>Some more content</p>
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage
