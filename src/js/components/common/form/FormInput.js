import React from "react";

export default ({ col = 6, colSm = 6, placeholder, name, value, onChangeHandler, className}) => (
  <div className={`col-${col} col-sm-${colSm} form-group ${className}`}>
    <input className="form-control"
           placeholder={placeholder}
           type="text" name={name} value={value}
           onChange={(e) => onChangeHandler(name, e.target.value)}/>
  </div>
);
