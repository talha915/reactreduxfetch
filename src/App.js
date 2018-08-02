import React, { Component } from 'react';
import './App.css';
import Main from './component/Main';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Main/>       
      </Provider>
    );
  }
}

export default App;
