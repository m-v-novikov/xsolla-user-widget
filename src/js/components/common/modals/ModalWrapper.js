import React, {useState, useEffect, useCallback, useRef} from "react";

import {hideModal, resetModalViewed} from "./../../../redux/actions/modal"
import noScroll from "no-scroll";

import {useDispatch, useMappedState} from "redux-react-hook";

const mapState = ({modal, app}) => ({modal, app});

export default ({
  className = "",
  onCloseModal = () => {},
  id,
  title,
  children,
}) => {

  const modalWrapEl = useRef(null);

  const [isOpened, setIsOpened] = useState(false);
  const {modal, app} = useMappedState(mapState);

  const dispatch = useDispatch();
  const resetModalViewedAction = useCallback(() => dispatch(resetModalViewed()), []);
  const hideModalAction = useCallback(() => dispatch(hideModal()), []);

  useEffect(() => {
    if (modal.isOpen && !isOpened || !modal.isOpen && isOpened) {
      setTimeout(() => {
        setIsOpened(prevIsOpened => !prevIsOpened);
      }, 400);
    }

    if (isOpened || app.menuIsOpen) {
      noScroll.on();
    } else {
      noScroll.off();
    }
  });


  function closeModalHandler() {
    hideModalAction();
    setIsOpened(false);

    onCloseModal();
    setTimeout(() => {
      resetModalViewedAction()
    }, 400)
  }

  function closeModal(e) {
    if (e.target === modalWrapEl.current) {
      closeModalHandler();
    }
  }

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { closeModal: closeModalHandler })
  );

  return (
    <div className={"modal-wrap" + (isOpened ? " showed" : "")} onClick={closeModal} ref={modalWrapEl}>
      <div className={`modal ${className}`} id={id}>
        <div className={"modal-header row"}>
          { title && <h3 className={"title col-20"}>{title}</h3> }
          <div className={"close-btn"} onClick={closeModalHandler}>
            <span className={"myIcons i-cancel"}/>
          </div>
        </div>
        <div className={"modal-content"}>
          { childrenWithProps }
        </div>
      </div>
    </div>
  )
}
