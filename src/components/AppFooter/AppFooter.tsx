import React from 'react'
import './AppFooter.css'

const AppFooter: React.FC = () => {
  return (
    <footer className="AppFooter">
      <div className="AppFooter_inner">
        <p className="AppFooter_copyright">
          <small>&copy; 2020 ANSI Escape Strip.</small>
        </p>
      </div>
    </footer>
  )
}

export default AppFooter
