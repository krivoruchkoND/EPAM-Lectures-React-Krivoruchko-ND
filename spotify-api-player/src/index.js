import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import App from './containers/AppComponentContainer';

import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
