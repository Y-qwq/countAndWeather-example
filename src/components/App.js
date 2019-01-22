import React, { Component } from 'react';
import {Provider} from 'react-redux'
import { createStore ,applyMiddleware} from 'redux';
import reducers from '../reducers'
import CountAndWeather from '../contrainers/CouAndWeaContrainers'
//import logger from 'redux-logger'
import thunk from 'redux-thunk'

const logger = store =>next => action =>{
  console.log('prevState:',store.getState())
  console.log('action:'+action.type)
  const result = next(action)
  console.log('nextState:',store.getState())
  return result
}

let store = createStore(reducers,applyMiddleware(thunk,logger))
// let store = applyMiddleware(thunk,logger)(createStore)(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CountAndWeather/>
      </Provider>
    );
  }
}

export default App;
