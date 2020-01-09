import React, { useState } from 'react'
import stripAnsi from 'strip-ansi'
import './FormTextarea.css'

const DEFAULT_VALUE = '[31mH[39m[36me[39m[33ml[39m[32ml[39m[35mo[39m [31mW[39m[36mo[39m[33mr[39m[32ml[39m[35md[39m[31m![39m'

const FormTextarea: React.FC = () => {
  const [value, setValue] = useState(DEFAULT_VALUE)
  const [preview, setPreview] = useState(stripAnsi(DEFAULT_VALUE))

  const handleChange = (event: any): void => {
    setValue(event.target.value)
    setPreview(stripAnsi(event.target.value))
  }

  return (
    <div className="FormTextarea">
      <textarea
        className="FormTextarea_textarea"
        value={value}
        onChange={(event) => {handleChange(event)}}
      />
      <div className="FormTextarea_preview">
        {preview}
      </div>
    </div>
  )
}

export default FormTextarea
