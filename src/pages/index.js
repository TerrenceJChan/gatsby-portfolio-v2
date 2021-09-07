import * as React from "react"
import { Helmet } from "react-helmet"

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
        <Helmet>
          <title>Portfolio | Terrence Chan</title>
          <meta name="description" content="Personal portfolio site" />
        </Helmet>
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
