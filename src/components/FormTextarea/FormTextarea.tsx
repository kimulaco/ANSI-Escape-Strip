import React, { useState } from 'react'
import stripAnsi from 'strip-ansi'
import './FormTextarea.css'

const FormTextarea: React.FC = () => {
  const [value, setValue] = useState('')
  const [preview, setPreview] = useState(value)

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
