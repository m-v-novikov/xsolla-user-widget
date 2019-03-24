import React from "react";

export default ({ col = 24, colSm = 12, placeholder, name, value, onChangeHandler, className}) => (
  <div className={`col-${col} col-sm-${colSm} form-group ${className}`}>
    <textarea className="form-control textarea"
      placeholder={placeholder}
      name={name} value={value}
      onChange={(e) => onChangeHandler(name, e.target.value)}/>
  </div>
);
