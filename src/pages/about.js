import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>I'm Andrew, </h1>
      <p>A goofy hip develper living in the Bay Area</p>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
