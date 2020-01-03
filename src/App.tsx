import React from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import AppMain from './components/AppMain/AppMain'
import AppFooter from './components/AppFooter/AppFooter'
import FormTextarea from './components/FormTextarea/FormTextarea'

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader />
      <AppMain>
        <FormTextarea />
      </AppMain>
      <AppFooter />
    </div>
  )
}

export default App
