import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
    console.log(date);
  };

  return (
    // <div className="date-picker container">
    <Calendar onChange={onChange} value={date} />

    // </div>
  );
};

export default DatePicker;
