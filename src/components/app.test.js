import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import ReduxPromise from 'redux-promise'
import App from './app'
import reducers from '../reducers/index'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App/>
    </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
