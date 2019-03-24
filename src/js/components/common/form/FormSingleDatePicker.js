import React from "react";
import { SingleDatePicker } from 'react-dates';

export default ({col = 6, colSm = 6, id, placeholder, dateField, focused, onDateChange, onFocusChange}) => (
  <div className={`col-${col} col-sm-${colSm} form-group`}>
    <SingleDatePicker
      placeholder={placeholder}
      date={dateField || null}
      onDateChange={(date) => onDateChange(date)}
      focused={focused}
      onFocusChange={({ focused: focusedField }) => onFocusChange({ focused: focusedField })}
      numberOfMonths={1}
      isOutsideRange={() => false}
      displayFormat="DD/MM/YYYY"
      id={id}/>
  </div>
);
