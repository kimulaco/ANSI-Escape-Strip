import React from 'react'
import './About.css'

const App: React.FC = () => {
  return (
    <div className="About">
      <h1>About</h1>

      <p>Web service to strip ANSI Escape. Are there any logs that cannot be read due to ANSI Escape? You can convert it to text that everyone can read.</p>

      <h2>Bug</h2>

      <p>Please report any bugs or improvements to <a
        href="https://github.com/kimulaco/ANSI-Escape-Strip/issues"
        target="_blank"
        rel="noopener noreferrer"
      >Issue</a>.</p>
    </div>
  )
}

export default App
