import React from 'react'
import FormTextarea from '../components/FormTextarea/FormTextarea'

const DEFAULT_VALUE = '[31mH[39m[36me[39m[33ml[39m[32ml[39m[35mo[39m [31mW[39m[36mo[39m[33mr[39m[32ml[39m[35md[39m[31m![39m'

const App: React.FC = () => {
  return (
    <div>
      <FormTextarea id="ansi-escape" value={DEFAULT_VALUE} />
    </div>
  )
}

export default App
