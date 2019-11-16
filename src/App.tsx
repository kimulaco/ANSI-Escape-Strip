import React from 'react'
import FormTextarea from './components/FormTextarea/FormTextarea'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>ANSI Strip Online</h1>
      </header>

      <main>
        <FormTextarea />
      </main>
    </div>
  )
}

export default App
