import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h2>Let's get in touch</h2>
      <p>
        The best way to reach me is
        <a href="https://twitter.com/andrewtalle" target="_blank">
          @andrewtalle
        </a>
        on Twitter!
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
