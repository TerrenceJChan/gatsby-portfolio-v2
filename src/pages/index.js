import * as React from "react"

import Layout from "../components/Layout"
import Introduction from "../components/custom-sections/Introduction"
import About from "../components/custom-sections/About"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Introduction />
        <About />
      </Layout>
    </>
  )
}

export default IndexPage
