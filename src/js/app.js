require('../../icons.font');
import 'react-dates/lib/css/_datepicker.css';
import './../sass/styles.scss';
import 'react-dates/initialize';

import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import AppRouter from './routers/AppRouter';
import configureStore from './redux/store/configureStore';

const store = configureStore();
const jsx = (
  <StoreContext.Provider value={store}>
    <AppRouter />
  </StoreContext.Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));