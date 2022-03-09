import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarReact() {

  const[date,setDate] = useState(new Date())

  const onChange =date=>{
    setDate(date)
  }

  return (
    <div>
      <Calendar showWeekNumbers onChange={onChange} value={date}/>
      {date.toString()}
    </div>
  )
}

export default CalendarReact;