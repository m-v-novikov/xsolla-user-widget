import React, { useCallback } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Media from 'react-media';
import DynamicImport from '../components/common/libs/DynamicImport';
import NotFoundPage from '../components/pages/NotFoundPage';

import { useDispatch, useMappedState } from "redux-react-hook";
import { setMediaSize } from "../redux/actions/app";
import Footer from "../components/common/layout/Footer";
import Header from "../components/common/layout/Header";

export const history = createHistory();

const mapState = ({app}) => ({app});

export default function AppRouter(){

  const { app } = useMappedState(mapState);
  const dispatch = useDispatch();
  const setMediaSizeAction = useCallback((mediaSize) => dispatch(setMediaSize(mediaSize)), []);

  const dynamicRoutesConfig = [
    {
      path: "/",
      pathToComponent: "pages/MainPage"
    },
    {
      path: "/main",
      pathToComponent: "pages/MainPage"
    },
    {
      path: "/create",
      pathToComponent: "pages/CreateUserPage"
    },
    {
      path: "/user/:id",
      pathToComponent: "pages/UserPage"
    }
  ];

  return(
    <Router history={history}>
      <div id={"inner-wrapper"} className={app.mediaSize + (app.menuIsOpen ? " menu-open" : "")}>

        <Media
          query="(max-width: 767px)"
          onChange={matches => {
            if(matches){
              setMediaSizeAction("mobile");
            }else{
              setMediaSizeAction("desktop");
            }
          }}/>

        <Header />

        <main className={"main"}>
          <Switch>
            {
              dynamicRoutesConfig.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  component={(props) => {
                    return(
                      <DynamicImport path={route.pathToComponent} props={props}/>
                    )
                  }}
                  exact={true}
                />
              ))
            }

            <Route component={NotFoundPage} />
          </Switch>
        </main>

        <Footer/>
      </div>
    </Router>
  )
}
