import React from 'react'
import './AppHeader.css'

const AppHeader: React.FC = () => {
  return (
    <header className="AppHeader">
      <div className="AppHeader_inner">
        <h1 className="AppHeader_title">ANSI Strip Online</h1>
      </div>
    </header>
  )
}

export default AppHeader
