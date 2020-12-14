import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h2>Andrew's Blog</h2>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about/">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
