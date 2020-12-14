import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>I'm Andrew, </h1>
      <p>A goofy hip develper living in the Bay Area</p>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
