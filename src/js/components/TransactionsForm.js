import React, { useState, useEffect } from "react";
import FormSingleDatePicker from "./common/form/FormSingleDatePicker";

export default ({id, requestAction}) => {

  const [state, setState] = useState({
    "datetime_from": null,
    "datetime_to": null,
    focusedFrom: null,
    focusedTo: null,
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    requestAction(id, state["datetime_from"], state["datetime_to"]);
  }

  function onClearHandler(e) {
    e.preventDefault();
    setState({
      "datetime_from": null,
      "datetime_to": null,
      focusedFrom: null,
      focusedTo: null,
    })
  }

  return(
    <form className="default-form mb-20" onSubmit={onSubmitHandler}>
      <div className="row">
        <h3 className="col-24">Get transactions list.</h3>
      </div>

      {
        ["From", "To"].map((field, i) => (
          <div className="row" key={i}>
            <FormSingleDatePicker
              dateField={state[`datetime_${field.toLowerCase()}`]}
              focused={state[`focused${field}`]}
              placeholder={`Date ${field.toLowerCase()}`}
              onDateChange={(date) => { setState( (prevState) => ({ ...prevState, [`datetime_${field.toLowerCase()}`]: date}))}}
              onFocusChange={({ focused: focusedField }) => setState((prevState) => ({ ...prevState, [`focused${field}`] : focusedField }))}
              id={`date${field}`}/>
          </div>
        ))
      }

      <div className="row">
        <div className="form-group col-3 col-sm-3 col-xs-6">
          <button type="submit" className="form-control myIcons i-enter-arrow submit-btn"/>
        </div>
        <div className="form-group col-3 col-sm-3 col-xs-6">
          <button onClick={onClearHandler} className="form-control myIcons i-cancel cancel-btn"/>
        </div>
      </div>

    </form>
  )
}
