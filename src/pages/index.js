import * as React from "react"

import Layout from "../components/Layout"
import Introduction from "../components/custom-sections/Introduction"
import About from "../components/custom-sections/About"
import Experiences from "../components/custom-sections/Experiences"
import Toolkit from "../components/custom-sections/Toolkit"
import Contact from "../components/custom-sections/Contact"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Introduction />
        <About />
        <Experiences />
        <Toolkit />
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
