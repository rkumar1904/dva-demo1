import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <h3>Brand Logo</h3>
      <ul>
        <Link to="/" >
          <li> Home </li>
        </Link>
        <Link to="/about">
          <li> About </li>
        </Link>
        <Link to="/contact">
          <li> Contact </li>
        </Link>
      </ul>
    </nav>
  )
}
