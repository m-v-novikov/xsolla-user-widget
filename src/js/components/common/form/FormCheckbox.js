import React from "react";

export default ({ col = 8, colSm = 4, placeholder, name, checked, onChangeHandler, className}) => (
  <div className={`col-${col} col-sm-${colSm} form-group ${className}`}>
    <input className={"form-checkbox"}
           type="checkbox" name={name} id={`check-${name}`} checked={checked}
           onChange={(e) => onChangeHandler(name, !checked)}/>
    <label htmlFor={`check-${name}`}>{placeholder}</label>
  </div>
);
