import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/root';

import './main.css';

import Header from './components/header';
import { SignInForm, SignUpForm } from './components/forms';

const createStoreWithMiddleware = applyMiddleware()
  (compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Header>
            <Route path='/' exact component={SignInForm}/>
            <Route path='/signup' component={SignUpForm}/>
          </Header>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root'));
}

document.addEventListener('DOMContentLoaded', main);
registerServiceWorker();