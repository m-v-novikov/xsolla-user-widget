import React, {useState, useEffect, useCallback} from "react";
import ModalWrapper from "./ModalWrapper";
import FormInput from "../form/FormInput";
import FormTextarea from "../form/FormTextarea";
import {useDispatch, useMappedState} from "redux-react-hook";
import {requestChangeUserBalance, setChangeBalanceError} from "../../../redux/actions/users";

export default () => {
  const dispatch = useDispatch();
  const setChangeBalanceErrorAction = useCallback((changeBalanceError) => dispatch(setChangeBalanceError(changeBalanceError)), []);

  return (
    <ModalWrapper
      onCloseModal={() => {setChangeBalanceErrorAction({isError: false, txt: {}})}}
      id="change-balance"
      title="Change balance">
        <ChangeBalance />
    </ModalWrapper>
  )
}

const mapState = ({modal, users}) => ({modal, users});
const ChangeBalance = ({closeModal}) => {

  const { modal, users } = useMappedState(mapState);
  const [state, setState] = useState({amount: "", comment: "", "user_id": modal.dataToModal["user_id"]});

  const dispatch = useDispatch();
  const requestChangeBalanceAction = useCallback((userFields) => dispatch(requestChangeUserBalance(userFields)), []);

  function onChangeHandler(field, value){
    setState({
      ...state,
      [field]: value
    })
  }

  function onSubmitHandler(e){
    e.preventDefault();
    requestChangeBalanceAction(state);
  }

  function onCancelHandler(e) {
    e.preventDefault();
    closeModal();
  }

  return(
    <div>
      <div className="modal-sub-header row">
        <p className={"helper col-24"}>Enter balance.</p>
      </div>
      <div className="modal-sub-content">

        <form className="default-form row" onSubmit={onSubmitHandler}>

          {
            (users.changeBalanceError.isError && users.changeBalanceError.txt.amount) &&
            <span className={"error-block col-24"}>{users.changeBalanceError.txt.amount.toString().replace(/\\/g, "")}</span>
          }
          <FormInput
            name={"amount"}
            placeholder={"Balance amount"}
            value={state.amount}
            onChangeHandler={onChangeHandler}/>

          <div className={"form-group col-4 col-sm-3 col-xs-6"}>
            <button type={"submit"} className={"form-control myIcons i-enter-arrow submit-btn"}/>
          </div>
          <div className={"form-group col-4 col-sm-3 col-xs-6"}>
            <button onClick={onCancelHandler} className={"form-control myIcons i-cancel cancel-btn"}/>
          </div>

          {(users.changeBalanceError.isError && users.changeBalanceError.txt.comment) && <span className={"error-block col-24"}>{users.changeBalanceError.txt.comment}</span>}
          <FormTextarea
            name={"comment"}
            placeholder={"Leave a comment"}
            value={state.comment}
            onChangeHandler={onChangeHandler}/>
        </form>
      </div>
    </div>
  );
}
