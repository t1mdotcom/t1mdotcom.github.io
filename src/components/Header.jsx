import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <h1>Tim Heinemann</h1>
        </Link>
      </div>
      <nav className="header-right">
        <ul>
          <li><Link to="/contact">Contact</Link></li>
          <li>|</li>
          <li><Link to="/projects">Projects</Link></li>
          <li>|</li>
          <li><Link to="/about-me">About Me</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header