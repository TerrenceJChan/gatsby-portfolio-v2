import * as React from "react"

import Layout from "../components/Layout"
import Introduction from "../components/custom-sections/Introduction"
import About from "../components/custom-sections/About"
import Experiences from "../components/custom-sections/Experiences"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Introduction />
        <About />
        <Experiences />
      </Layout>
    </>
  )
}

export default IndexPage
