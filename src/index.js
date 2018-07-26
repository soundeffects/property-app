import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/root';

import './main.css';

import Header from './components/header';
import SignIn from './components/signin';
import SignUp from './components/signup';

const createStoreWithMiddleware = applyMiddleware()(createStore);


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Header>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
          </Header>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root'));
}

document.addEventListener('DOMContentLoaded', main);
registerServiceWorker();