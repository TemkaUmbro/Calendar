import { useState } from 'react';
import DatePicker from 'sassy-datepicker';
import { TimePicker } from 'sassy-datepicker';

const Picker = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState({
    minutes: 0,
    hours: 10,
  });
  
  const minTime = { hours: 10, minutes: 0 };
  const maxTime = { hours: 12, minutes: 0 };
  function InRange() {
    // suppose you want to allow user to pick a date from today to the end of this year
  
    return <TimePicker minTime={minTime} maxTime={maxTime} />;
  }
  InRange()

  const onChange = newTime => {
    console.log(`New date selected`, newTime);
    setDate(newTime);
  };

  return <>
    <TimePicker minTime={minTime} maxTime={maxTime} onChange={onChange} selected={time} />
    <DatePicker />
  </>
  
}

export default Picker