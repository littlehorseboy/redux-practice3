import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../reducers/configureStore';
import AsyncApp from './AsyncApp.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}

export default Root;
