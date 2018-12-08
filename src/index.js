import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App/>
    </Provider>,
    document.querySelector('#root'),
);

registerServiceWorker();
