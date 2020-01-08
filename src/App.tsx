import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './pages/Index'
import About from './pages/About'
import AppHeader from './components/AppHeader/AppHeader'
import AppMain from './components/AppMain/AppMain'
import AppFooter from './components/AppFooter/AppFooter'
import './App.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <AppMain>
          <Route exact path='/' component={Index} />
          <Route exact path='/about' component={About} />
        </AppMain>
        <AppFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
