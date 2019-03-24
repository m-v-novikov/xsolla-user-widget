import React, {useState, useEffect, useCallback} from "react";
import FormInput from "./common/form/FormInput";
import FormCheckbox from "./common/form/FormCheckbox";

import {history} from "../routers/AppRouter";

const defUser = {"user_name": "", "email": "", "user_custom": "", "enabled": false, "user_id": ""};
export default ({
  error,
  requestAction,
  isCreate = false,
  currentUser = defUser,
  resetError = () => {}
}) => {

  const [state, setState] = useState(currentUser);

  function onChangeHandler(field, value){
    setState({
      ...state,
      [field]: value
    })
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    resetError();
    requestAction(state);
  }

  function onCancelHandler(e) {
    e.preventDefault();
    history.push("/");
    resetError();
  }

  const fields = {
    "user_name": "User name",
    "email": "Email",
    "user_custom": "Custom params"
  };

  if(isCreate){fields["user_id"] = "User id";}

  return (
    <form className="default-form m20-0 " onSubmit={onSubmitHandler}>

      {
        Object.keys(fields)
          .map( (field, i) => {
            const fieldsObj = {
              name: field,
              placeholder: fields[field],
              value: state[field] || "",
              className: (error.isError && error.txt[field]) ? "error": "",
              onChangeHandler
            };
            return (
              <div className="row" key={i} >
                {(error.isError && error.txt[field]) && <span className="error-block col-24">{error.txt[field].toString().replace(/\\/g, "")}</span>}
                <FormInput {...fieldsObj}/>
              </div>
            );
          })
      }

      <div className="row">
        {(error.isError && error.txt.enabled) && <span className="error-block col-24">{error.txt.enabled.toString().replace(/\\/g, "")}</span>}
        <FormCheckbox
          name="enabled"
          checked={state.enabled}
          onChangeHandler={onChangeHandler}
          placeholder="Is user enabled"/>
      </div>

      <div className="row ">
        <div className="form-group col-3 col-sm-3 col-xs-6">
          <button type="submit" className="form-control myIcons i-enter-arrow submit-btn"/>
        </div>
        <div className="form-group col-3 col-sm-3 col-xs-6">
          <button onClick={onCancelHandler} className="form-control myIcons i-cancel cancel-btn"/>
        </div>
      </div>
    </form>
  )
}
