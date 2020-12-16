import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Let's get in touch</h2>
      <p>
        The best way to reach me is
        <a href="https://twitter.com/andrewtalle" target="_blank">
          @andrewtalle
        </a>
        on Twitter!
      </p>
    </Layout>
  )
}

export default ContactPage
