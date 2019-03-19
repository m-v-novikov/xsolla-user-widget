import React, {useState, useEffect, useCallback} from "react";
import FormInput from "./common/form/FormInput";
import FormTextarea from "./common/form/FormTextarea";

export default ({error, requestAction, currentUser }) => {

  const defFieldsObj = currentUser || { username: "", email: "", text: "" };

  const [state, setState] = useState(defFieldsObj);

  function onChangeHandler(field, value){
    setState({
      ...state,
      [field]: value
    })
  }

  function onSubmitHandler(e) {
    e.preventDefault();
  }

  function onClearFiltersHandler(e) {
    e.preventDefault();
    setState({username: "", email: "", text: ""});
  }

  const fields = {
    "username": "User name",
    "email": "Email",
  };

  return (
    <form className={"default-form m20-0 " + (error.isError ? "error": "")} onSubmit={onSubmitHandler}>
      {
        error.isError &&
        <div className={"row"}>
          { Object.keys(error.txt).map((item, i) => (<span key={i} className={"error-block col-24"}>{error.txt[item]}</span>))}
        </div>
      }

      <div className="row ">
        {
          Object.keys(fields)
            .map( (field, i) => {
              const fieldsObj = {
                name: field,
                placeholder: fields[field],
                value: state[field],
                onChangeHandler,
                className: (!state[field].length ? "has-error" : ""),
              };
              return <FormInput key={i} {...fieldsObj}/>;
            })
        }

        <FormTextarea
          name={"text"}
          placeholder={"Enter text"}
          value={state.text}
          onChangeHandler={onChangeHandler}
          className={(!state.text.length ? "has-error" : "")}
        />


        <div className={"form-group col-6 col-sm-4 col-xs-6"}>
          <button type={"submit"} className={"form-control myIcons i-enter-arrow submit-btn"}/>
        </div>
        <div className={"form-group col-6 col-sm-4 col-xs-6"}>
          <button onClick={onClearFiltersHandler} className={"form-control myIcons i-cancel cancel-btn"}/>
        </div>
      </div>
    </form>
  )
}