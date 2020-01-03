import React from 'react'
import './AppMain.css'

const AppMain: React.FC = ({children}) => {
  return (
    <main className="AppMain">
      <div className="AppMain_inner">
        {children}
      </div>
    </main>
  )
}

export default AppMain
