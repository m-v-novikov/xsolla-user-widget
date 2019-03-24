import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useMappedState } from "redux-react-hook";
import { setMenuState } from "../../../redux/actions/app";

const mapState = ({app}) => ({app});

export default function Header(){

  const { app } = useMappedState(mapState);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ small, setSmall ] = useState(app.mediaSize === "mobile");

  const dispatch = useDispatch();
  const _setMenuState = useCallback((menuIsOpen) => dispatch(setMenuState(menuIsOpen)), []);

  useEffect(() => {
    const isSmall = app.mediaSize === "mobile";
    setSmall(isSmall);

    if(!isSmall){
      _setMenuState(false);
      setIsOpen(false)
    }else{
      setTimeout(() => {
        _setMenuState(isOpen);
      }, (isOpen ? 700 : 300))
    }
  }, [app.mediaSize, app.menuIsOpen, isOpen]);

  function onMenuClickHandler(){
    setIsOpen(!isOpen);
  }

  function onLinkClickHandler(){
    setIsOpen(false);
  }

  const links = [
    {
      path: "/main",
      text: "Home"
    },
    {
      path: "/create",
      text: "Create"
    }
  ];

  return (
    <header className={"header " + app.mediaSize}>
      <div className="content-container">
        <div className="header-content">

          {
            !small ?
              <div className="left-side">
                { links.map((link, i) => (<NavLink key={i} to={link.path} className={"menu-item"}>{link.text}</NavLink>)) }
              </div>
              :
              <div className="left-side">
                <span onClick={onMenuClickHandler} className={"icon myIcons " + (isOpen ? "i-cancel" : "i-menu")}/>
              </div>
          }

          <div className="right-side">
            <NavLink onClick={onLinkClickHandler} className="header-logo myIcons i-group" to="/"/>
          </div>
        </div>

        {
          small &&
          <div className={"mobile-content" + (isOpen ? " menu-open" : "")}>
            <div className="content-container">
              <ul className="menu">
                { links.map((link, i) => (<li key={i} className={"menu-item"}><NavLink to={link.path} onClick={onLinkClickHandler}>{link.text}</NavLink></li>)) }
              </ul>
            </div>
          </div>
        }
      </div>
    </header>
  );
}