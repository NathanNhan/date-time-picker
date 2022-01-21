import React, { useState, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function App() {
  const [selectedDate, handleDateChange] = useState(localStorage.getItem("date") ? JSON.parse(localStorage.getItem("date")) : new Date());
  useEffect(()=>{
    localStorage.setItem("date", JSON.stringify(selectedDate));
  })
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <TimePicker value={selectedDate} onChange={handleDateChange} />
      <DateTimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  );
}

export default App;
