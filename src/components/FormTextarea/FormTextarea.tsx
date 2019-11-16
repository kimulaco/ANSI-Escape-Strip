import React, { useState } from 'react'
import './FormTextarea.css'

const FormTextarea: React.FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: any): void => {
    setValue(event.target.value)
  }

  return (
    <div className="FormTextarea">
      <textarea
        className="FormTextarea_textarea"
        value={value}
        onChange={(event) => {handleChange(event)}}
      />
      <div className="FormTextarea_preview">
        {value}
      </div>
    </div>
  )
}

export default FormTextarea
