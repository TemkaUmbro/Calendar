import React, { useState } from 'react'
import Calendar from 'react-calendar'

import  'react-dater/dist/index.css'

export const CalendarForm = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div className="">
      <Calendar onChange = { onChange }  value = { value } />
    </div>
  );
}
