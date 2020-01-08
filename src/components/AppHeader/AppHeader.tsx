import React from 'react'
import { Link } from 'react-router-dom'
import './AppHeader.css'

const AppHeader: React.FC = () => {
  return (
    <header className="AppHeader">
      <div className="AppHeader_inner">
        <h1 className="AppHeader_title">
          <Link className="AppHeader_title-link" to="/">ANSI Strip Online</Link>
        </h1>
        <p className="AppHeader_about">
          <Link className="AppHeader_about-link" to="/about">About</Link>
        </p>
      </div>
    </header>
  )
}

export default AppHeader
