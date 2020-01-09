import React, { useState } from 'react'
import stripAnsi from 'strip-ansi'
import './FormTextarea.css'

type Props = {
  value?: string
}

const FormTextarea: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState(props.value || '')
  const [preview, setPreview] = useState(stripAnsi(value))

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
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
      <div
        className="FormTextarea_preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  )
}

export default FormTextarea
